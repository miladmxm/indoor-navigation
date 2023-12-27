import { useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef} from "react"
import { useImmer } from "use-immer"
import { downloadFile } from "./utils/download"
import data from '../my-file.json'

const ArTest = ({savePosRef,downloadRef}) => {
  
  const [cameraData, setCameraData] = useImmer([])
  const { camera } = useThree()
  const refMesh = useRef(null)
  useFrame(async () => {
    // refMesh.current?
    refMesh.current?.quaternion.set(0, camera.quaternion.y, 0, camera.quaternion.w)
    // refMesh.current?.rotation.set(0, camera.rotation.y, 0)

    // console.log(camera.position.z.toFixed(1))
    // console.log(refMesh.current.quaternion)
    refMesh.current?.position.setZ(camera.position.z)
    refMesh.current?.position.setX(camera.position.x)
    // refMesh.current?..setX(camera.position.x)

    // cameraCopyRef.current.quaternion.set(0, camera.quaternion.y, 0, camera.quaternion.w)
  })
  savePosRef.current.onclick=()=>{
    setCameraData(draft=>{draft.push({position:refMesh.current.position,quaternion:camera.quaternion})})
  }
  downloadRef.current.onclick=()=>{
    downloadFile(cameraData)
  }
  // console.log(positionCamera)
  
  useEffect(()=>{

  })
  return (
    <>
      <mesh ref={refMesh} position={[0,-0.5,-1]} rotation={[0.1,0,0]}>
        <boxGeometry args={[0.5, 0.2, 1]}/>
        {/* <meshBasicMaterial color={"#ff0000"}/> */}
        <meshNormalMaterial />
      </mesh>
    </>
  )
}
export default ArTest