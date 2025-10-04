import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const MeteorBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const meteors = [];
    const trails = [];

    // Create 4 distinct meteors using Three.js geometries
    const createMeteor = (config) => {
      let geometry;
      
      // Use different Three.js geometries for variety
      switch(config.geometryType) {
        case 'icosahedron':
          geometry = new THREE.IcosahedronGeometry(config.size, 1);
          break;
        case 'octahedron':
          geometry = new THREE.OctahedronGeometry(config.size, 0);
          break;
        case 'dodecahedron':
          geometry = new THREE.DodecahedronGeometry(config.size, 0);
          break;
        case 'cone':
          geometry = new THREE.ConeGeometry(config.size, config.size * 2, 8);
          break;
        default:
          geometry = new THREE.SphereGeometry(config.size, 8, 6);
      }

      // Create realistic meteor material
      const material = new THREE.MeshPhongMaterial({
        color: config.color,
        shininess: 80,
        specular: 0x333333,
        emissive: config.color,
        emissiveIntensity: 0.2
      });

      const meteor = new THREE.Mesh(geometry, material);
      meteor.position.copy(config.startPos);
      
      // Add random rotation
      meteor.rotation.x = Math.random() * Math.PI;
      meteor.rotation.y = Math.random() * Math.PI;

      meteor.userData = {
        config: config,
        originalPos: config.startPos.clone(),
        direction: config.direction.clone(),
        speed: config.speed,
        rotationSpeed: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        )
      };

      scene.add(meteor);
      meteors.push(meteor);
      return meteor;
    };

    // Meteor configurations
    const meteorConfigs = [
      {
        geometryType: 'icosahedron',
        size: 0.4,
        speed: 0.12,
        color: 0xFF6B35, // Orange-red like real meteors
        startPos: new THREE.Vector3(-20, 15, -8),
        direction: new THREE.Vector3(0.3, -0.8, 0.1).normalize()
      },
      {
        geometryType: 'octahedron',
        size: 0.3,
        speed: 0.15,
        color: 0x4ECDC4, // Teal
        startPos: new THREE.Vector3(15, 12, 5),
        direction: new THREE.Vector3(-0.2, -0.9, -0.1).normalize()
      },
      {
        geometryType: 'dodecahedron',
        size: 0.5,
        speed: 0.1,
        color: 0x45B7D1, // Blue
        startPos: new THREE.Vector3(-10, 18, 3),
        direction: new THREE.Vector3(0.1, -0.85, 0.2).normalize()
      },
      {
        geometryType: 'cone',
        size: 0.35,
        speed: 0.18,
        color: 0x96CEB4, // Green
        startPos: new THREE.Vector3(18, 10, -5),
        direction: new THREE.Vector3(-0.25, -0.75, -0.15).normalize()
      }
    ];

    // Create realistic trail
    const createTrail = (position, color, size) => {
      const trailGeometry = new THREE.BufferGeometry();
      const particles = 8;
      const positions = new Float32Array(particles * 3);
      
      for (let i = 0; i < particles; i++) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * size * 2;
        positions[i3 + 1] = (Math.random() - 0.5) * size * 2;
        positions[i3 + 2] = (Math.random() - 0.5) * size * 2;
      }
      
      trailGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      
      const trailMaterial = new THREE.PointsMaterial({
        color: color,
        size: size * 3,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending
      });

      const trail = new THREE.Points(trailGeometry, trailMaterial);
      trail.position.copy(position);
      
      trail.userData = {
        life: 1.0,
        decayRate: 0.03,
        originalPos: position.clone()
      };

      scene.add(trail);
      trails.push(trail);
      return trail;
    };

    // Create all meteors
    meteorConfigs.forEach(config => {
      createMeteor(config);
    });

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

    camera.position.set(0, 0, 20);
    camera.lookAt(0, 0, 0);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Update meteors
      meteors.forEach((meteor) => {
        const userData = meteor.userData;
        
        // Move meteor
        meteor.position.x += userData.direction.x * userData.speed;
        meteor.position.y += userData.direction.y * userData.speed;
        meteor.position.z += userData.direction.z * userData.speed;
        
        // Rotate meteor
        meteor.rotation.x += userData.rotationSpeed.x;
        meteor.rotation.y += userData.rotationSpeed.y;
        meteor.rotation.z += userData.rotationSpeed.z;
        
        // Create trail
        if (Math.random() < 0.3) {
          createTrail(
            meteor.position.clone(),
            userData.config.color,
            userData.config.size * 0.5
          );
        }
        
        // Reset if out of bounds
        if (meteor.position.y < -15 || 
            Math.abs(meteor.position.x) > 25 || 
            Math.abs(meteor.position.z) > 25) {
          meteor.position.copy(userData.originalPos);
          // Slightly vary the direction
          userData.direction.add(new THREE.Vector3(
            (Math.random() - 0.5) * 0.1,
            0,
            (Math.random() - 0.5) * 0.1
          )).normalize();
        }
      });

      // Update trails
      trails.forEach((trail, index) => {
        trail.userData.life -= trail.userData.decayRate;
        trail.material.opacity = trail.userData.life * 0.7;
        trail.scale.setScalar(trail.userData.life);
        
        // Move trail slightly
        trail.position.y -= 0.05;
        
        if (trail.userData.life <= 0) {
          scene.remove(trail);
          trails.splice(index, 1);
        }
      });

      // Gentle camera movement
      camera.position.x = Math.sin(Date.now() * 0.00005) * 3;
      camera.position.z = 20 + Math.cos(Date.now() * 0.00005) * 2;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: -1 
      }} 
    />
  );
};

export default MeteorBackground;