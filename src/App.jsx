import { ARButton, Controllers, XR } from '@react-three/xr'
import './App.css'
import { Canvas } from '@react-three/fiber';
import ArTest from './arTest';
import { useRef } from 'react';
import Show from './show';

function App() {
  const savePosRef = useRef()
  const downloadRef = useRef()
  return (
    <>
      <button style={{zIndex:10, position:"absolute",bottom:"20px",left:"20px", width:"55px", height:"55px"}} ref={savePosRef}> save pos </button>
      <button style={{zIndex:10, position:"absolute",bottom:"20px",right:"20px", width:"55px", height:"55px"}} ref={downloadRef}> down </button>
      <ARButton
        // className={isSessionStart ? "startedBtn" : "endedBtn"}
        sessionInit={{
          requiredFeatures: ["hit-test"],
          optionalFeatures: ["dom-overlay"],
          domOverlay: { root: document.body },
        }}
      >
        {/* {(status) => buttonStatusHandler(status)} */}
      </ARButton>
      <Canvas
        shadows
        resize={true}
        style={{height:"100vh"}}
        gl={{ preserveDrawingBuffer: true }}
      >
        <XR
        // onSessionStart={() => {
        //   setSessionStart(true);
        //   setHideAlert(true)
        //   localStorage.removeItem("error")
        // }}
        // onSessionEnd={() => {
        //   setSessionStart(false);
        //   window.location.reload(false);
        // }}
        >


          {/* //* There is no need to preview in AR mode */}
          {/* {!isSessionStart && selectedObj ? <Preview obj={selectedObj} /> : null} */}

          <Controllers rayMaterial={{ color: "blue" }} />
          {/* <Hands /> */}

          <hemisphereLight args={[0xffffff, 0x444444]} position={[0, 20, 0]} />
          <directionalLight
            castShadow
            position={[0, 10, -0]}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={25}
            shadow-camera-near={0.5}
            blurSamples={250}
            shadow-camera-left={-20}
            shadow-camera-right={20}
            shadow-camera-top={20}
            shadow-camera-bottom={-20}
            radius={5}
          />

          {/* //* In AR mode, it interferes with displacements */}
          {/* {!isSessionStart && <CameraController />} */}
          {/* <OrbitControls autoRotate={false} /> */}
          {/* <ArTest savePosRef={savePosRef} downloadRef={downloadRef}/> */}
          <Show/>
        </XR>
      </Canvas>
    </>
  )
}

export default App
