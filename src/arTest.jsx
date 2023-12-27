import { useFrame, useThree } from "@react-three/fiber"
import { useCallback, useEffect, useRef} from "react"
import { useImmer } from "use-immer"
import { downloadFile } from "./utils/download"
import data from '../my-file.json'

const ArTest = ({savePosRef,downloadRef}) => {
  
  const [cameraData, setCameraData] = useImmer([])
  const [cameraPos,setCameraPos]= useImmer({})
  
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

    setCameraPos({position:{z:camera.position.z,x:camera.position.x},quaternion:{y:camera.quaternion.y,w:camera.quaternion.w}})

    // refMesh.current?..setX(camera.position.x)

    // cameraCopyRef.current.quaternion.set(0, camera.quaternion.y, 0, camera.quaternion.w)
  })
  savePosRef.current.onclick=useCallback(()=>{
    setCameraData(draft=>{draft.push(cameraPos)})
  },[cameraPos])
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