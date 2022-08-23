import './App.css';
import React from 'react';
import { useRef } from 'react';
import { Suspense } from 'react';
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import FridgeClosed from './components/FridgeClosed';
import FridgeOpen from './components/FridgeOpen';
import MainWindow from './components/MainWindow';

function App() {
  const canvasRef = useRef(null);
  return (
    <div>
      <div style={ {width: "100vw", height: "90vh"} }>
        <Canvas ref={canvasRef}>
          <OrbitControls enableZoom={true} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} />
          <Suspense fallback={null}>
            <FridgeOpen/>
            <FridgeClosed/>
          </Suspense>
        </Canvas>
      </div>
      <MainWindow/>
    </div>
  );
}

export default App;
