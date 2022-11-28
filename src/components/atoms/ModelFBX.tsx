import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, useFBX, useProgress } from '@react-three/drei';
import { Suspense } from "react";

const Loader = () => {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

const Scene = () => {
  const fbx = useFBX("models3d/hp_printer.fbx");

  return (
    <>
      <primitive object={fbx} scale={0.003} />
      <ambientLight intensity={0.15} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.5} />
    </>
  );
};

export const ModelFBX = () => {
  return (
    <div className="h-96 w-full">
      <Canvas>
        <Suspense fallback={<Loader />}>
          <Scene />
          <OrbitControls />
          {/*<Environment preset="sunset" background />*/}
        </Suspense>
      </Canvas>
    </div>
  );
}
