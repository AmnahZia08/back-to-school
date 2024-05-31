import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { OrbitControls } from "@react-three/drei";

const Sphere = () => {
  const mesh = useRef<Mesh>();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    //@ts-ignore
    <mesh ref={mesh} castShadow receiveShadow>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={"white"} />
    </mesh>
  );
};

const ThreeScene = () => {
  return (
    <Canvas
      shadows
      style={{ height: "100vh", width: "100vw" }}
      className="bg-doodle"
      camera={{ position: [0, 0, 10], fov: 45 }}
    >
      <ambientLight intensity={0.15} />
      <directionalLight
        color={"yellow"}
        position={[0, 10, 10]}
        intensity={3}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <Sphere />
      <mesh receiveShadow position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial opacity={0.5} />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeScene;
