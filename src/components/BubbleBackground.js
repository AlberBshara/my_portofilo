import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const BubbleBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Create colorful bubbles
    const bubbles = [];
    // More professional data science colors
    const colors = [
    0x4A00E0, // Deep Purple
    0x8E2DE2, // Purple
    0x00C6FB, // Blue
    0x005BEA, // Dark Blue
    0x667EEA, // Light Purple
    0x764BA2, // Muted Purple
    0x6A11CB, // Electric Purple
    0x2575FC, // Bright Blue
    0x7F00FF, // Violet
    0x6C63FF  // Slate Blue
    ];

    // Create multiple spheres (bubbles)
    for (let i = 0; i < 12; i++) {
      const size = Math.random() * 0.4 + 0.1;
      const geometry = new THREE.SphereGeometry(size, 32, 32);
      
      const material = new THREE.MeshPhongMaterial({
        color: colors[Math.floor(Math.random() * colors.length)],
        transparent: true,
        opacity: 0.6,
        shininess: 100,
        specular: 0xffffff
      });

      const bubble = new THREE.Mesh(geometry, material);
      
      // Random position
      bubble.position.x = (Math.random() - 0.5) * 8;
      bubble.position.y = (Math.random() - 0.5) * 8;
      bubble.position.z = (Math.random() - 0.5) * 8;
      
      // Store velocity for animation
      bubble.userData = {
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01
        )
      };

      scene.add(bubble);
      bubbles.push(bubble);
    }

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.3);
    directionalLight2.position.set(-5, -5, -5);
    scene.add(directionalLight2);

    camera.position.z = 5;

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);

      bubbles.forEach((bubble) => {
        // Floating animation
        bubble.position.x += bubble.userData.velocity.x;
        bubble.position.y += bubble.userData.velocity.y;
        bubble.position.z += bubble.userData.velocity.z;

        // Bounce off boundaries
        if (Math.abs(bubble.position.x) > 6) bubble.userData.velocity.x *= -1;
        if (Math.abs(bubble.position.y) > 6) bubble.userData.velocity.y *= -1;
        if (Math.abs(bubble.position.z) > 6) bubble.userData.velocity.z *= -1;

        // Gentle rotation
        bubble.rotation.x += 0.005;
        bubble.rotation.y += 0.005;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      
      // Clean up geometries and materials
      bubbles.forEach(bubble => {
        bubble.geometry.dispose();
        bubble.material.dispose();
      });
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

export default BubbleBackground;