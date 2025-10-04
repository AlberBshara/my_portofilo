import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const BrainNetwork = () => {
  const mountRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 500, height: 500 });

  useEffect(() => {
    const updateSize = () => {
      if (mountRef.current) {
        const container = mountRef.current;
        const size = Math.min(container.clientWidth, container.clientHeight, 600);
        setDimensions({ width: size, height: size });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    
    renderer.setSize(dimensions.width, dimensions.height);
    renderer.setClearColor(0x000000, 0);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Neural Network Configuration
    const layers = 5;
    const nodesPerLayer = [4, 6, 8, 6, 4];
    const connections = [];
    const nodes = [];
    const pulses = [];

    // AI-themed colors
    const layerColors = [
      0x8A2BE2, 0x6A11CB, 0x2575FC, 0x00C6FB, 0x2EBF91
    ];

    // Scale factor based on container size
    const scale = dimensions.width / 400;

    // Create neural network layers
    for (let layer = 0; layer < layers; layer++) {
      const layerNodes = [];
      
      for (let i = 0; i < nodesPerLayer[layer]; i++) {
        const geometry = new THREE.SphereGeometry(0.08 * scale, 16, 16);
        const material = new THREE.MeshPhongMaterial({
          color: layerColors[layer],
          transparent: true,
          opacity: 0.3,
          emissive: layerColors[layer],
          emissiveIntensity: 0.1
        });

        const neuron = new THREE.Mesh(geometry, material);
        
        const x = (layer - (layers-1)/2) * 1.8 * scale;
        const y = (i - (nodesPerLayer[layer]-1)/2) * 0.4 * scale;
        const z = (Math.random() - 0.5) * 0.3 * scale;
        
        neuron.position.set(x, y, z);

        neuron.userData = {
          layer: layer,
          index: i,
          activation: 0,
          targetActivation: 0,
          color: layerColors[layer],
          pulseTime: 0,
          isActive: false
        };

        scene.add(neuron);
        nodes.push(neuron);
        layerNodes.push(neuron);
      }

      if (layer > 0) {
        const prevLayerNodes = nodes.filter(n => n.userData.layer === layer - 1);
        
        layerNodes.forEach(currentNeuron => {
          prevLayerNodes.forEach(prevNeuron => {
            if (Math.random() > 0.4) {
              const connectionGeometry = new THREE.BufferGeometry();
              const connectionMaterial = new THREE.LineBasicMaterial({
                color: 0x4A00E0,
                transparent: true,
                opacity: 0.1,
                linewidth: 1
              });

              const connection = new THREE.Line(connectionGeometry, connectionMaterial);
              connection.userData = {
                start: prevNeuron,
                end: currentNeuron,
                weight: Math.random(),
                isActive: false,
                activation: 0
              };
              
              scene.add(connection);
              connections.push(connection);
            }
          });
        });
      }
    }

    // Update connection positions
    const updateConnections = () => {
      connections.forEach(connection => {
        connection.geometry.setFromPoints([
          connection.userData.start.position,
          connection.userData.end.position
        ]);
        connection.geometry.attributes.position.needsUpdate = true;
      });
    };

    updateConnections();

    const simulateForwardPass = () => {
      nodes.forEach(node => {
        node.userData.targetActivation = 0;
        node.userData.isActive = false;
      });

      connections.forEach(conn => {
        conn.userData.isActive = false;
        conn.material.opacity = 0.1;
      });

      nodes.filter(n => n.userData.layer === 0).forEach((inputNode, index) => {
        inputNode.userData.targetActivation = Math.random();
        inputNode.userData.isActive = true;
      });

      for (let layer = 1; layer < layers; layer++) {
        const currentLayerNodes = nodes.filter(n => n.userData.layer === layer);
        
        currentLayerNodes.forEach(currentNode => {
          let inputSum = 0;
          let activeConnections = 0;

          connections.forEach(conn => {
            if (conn.userData.end === currentNode && conn.userData.start.userData.isActive) {
              inputSum += conn.userData.start.userData.activation * conn.userData.weight;
              activeConnections++;
              
              conn.userData.isActive = true;
              conn.userData.activation = conn.userData.start.userData.activation * conn.userData.weight;
            }
          });

          if (activeConnections > 0) {
            currentNode.userData.targetActivation = Math.tanh(inputSum / activeConnections);
            currentNode.userData.isActive = true;
          }
        });
      }
    };

    const createPulse = (startNode, endNode, color) => {
      const pulseGeometry = new THREE.SphereGeometry(0.03 * scale, 8, 8);
      const pulseMaterial = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 1
      });

      const pulse = new THREE.Mesh(pulseGeometry, pulseMaterial);
      pulse.position.copy(startNode.position);
      
      pulse.userData = {
        startPos: startNode.position.clone(),
        endPos: endNode.position.clone(),
        progress: 0,
        speed: 0.02,
        color: color
      };

      scene.add(pulse);
      pulses.push(pulse);
      
      return pulse;
    };

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight1.position.set(2, 2, 2);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0x8A2BE2, 0.3);
    directionalLight2.position.set(-2, -1, -1);
    scene.add(directionalLight2);

    camera.position.z = 6 * scale;
    camera.position.y = 1 * scale;

    let lastTrainingTime = 0;
    const trainingInterval = 3000;

    const animate = () => {
      requestAnimationFrame(animate);
      const currentTime = Date.now();

      nodes.forEach(node => {
        if (node.userData.isActive) {
          node.userData.activation += (node.userData.targetActivation - node.userData.activation) * 0.1;
          
          const intensity = node.userData.activation;
          node.material.emissiveIntensity = intensity * 0.5;
          node.material.opacity = 0.3 + intensity * 0.7;
          node.scale.setScalar(1 + intensity * 0.3);
        } else {
          node.material.emissiveIntensity = 0.1;
          node.material.opacity = 0.3;
          node.scale.setScalar(1);
        }
      });

      connections.forEach(conn => {
        if (conn.userData.isActive) {
          const intensity = Math.abs(conn.userData.activation);
          conn.material.opacity = 0.1 + intensity * 0.9;
          conn.material.color.setHex(
            conn.userData.activation > 0 ? 0x00C6FB : 0xFF6B6B
          );
          conn.material.linewidth = 1 + intensity * 2;
        } else {
          conn.material.opacity = 0.1;
          conn.material.color.setHex(0x4A00E0);
        }
      });

      for (let i = pulses.length - 1; i >= 0; i--) {
        const pulse = pulses[i];
        pulse.userData.progress += pulse.userData.speed;
        
        if (pulse.userData.progress >= 1) {
          scene.remove(pulse);
          pulses.splice(i, 1);
        } else {
          pulse.position.lerpVectors(
            pulse.userData.startPos,
            pulse.userData.endPos,
            pulse.userData.progress
          );
          
          pulse.scale.setScalar(1 + Math.sin(pulse.userData.progress * Math.PI) * 2);
          pulse.material.opacity = 1 - pulse.userData.progress;
        }
      }

      if (Math.random() < 0.1 && connections.length > 0) {
        const randomConn = connections[Math.floor(Math.random() * connections.length)];
        if (randomConn.userData.isActive && randomConn.userData.activation > 0.3) {
          createPulse(
            randomConn.userData.start,
            randomConn.userData.end,
            randomConn.userData.activation > 0 ? 0x00C6FB : 0xFF6B6B
          );
        }
      }

      if (currentTime - lastTrainingTime > trainingInterval) {
        simulateForwardPass();
        lastTrainingTime = currentTime;
        
        setTimeout(() => {
          connections.filter(conn => conn.userData.isActive && conn.userData.activation > 0.5)
            .slice(0, 5)
            .forEach(conn => {
              createPulse(conn.userData.start, conn.userData.end, 0x2EBF91);
            });
        }, 500);
      }

      scene.rotation.y += 0.002;
      scene.rotation.x = Math.sin(currentTime * 0.0005) * 0.1;

      renderer.render(scene, camera);
    };

    simulateForwardPass();
    animate();

    const handleResize = () => {
      camera.aspect = 1;
      camera.updateProjectionMatrix();
      renderer.setSize(dimensions.width, dimensions.height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [dimensions]);

  return (
    <div 
      ref={mountRef} 
      style={{ 
        width: '100%',
        height: '100%',
        minHeight: '500px',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
      }} 
    />
  );
};

export default BrainNetwork;