import { useFrame, useThree } from "@react-three/fiber"
// import { useEffect, useRef } from "react"
import { useImmer } from "use-immer"
// import { downloadFile } from "./utils/download"
import data from '../my-file.json'

const Show = () => {
  //   const parsData = JSON.parse(data)
  //   console.log(parsData)
  // const [positionCamera, setPositionCamera] = useImmer([])
  const { camera } = useThree()
  // const refMesh = useRef(null)
    console.log(data[0].position.z.toFixed(2) - 1)
  useFrame(async () => {
    // refMesh.current?
    // refMesh.current?.quaternion.set(0, camera.quaternion.y, 0, camera.quaternion.w)
    // refMesh.current?.rotation.set(0, camera.rotation.y, 0)

    if(camera.position.z.toFixed(2) === data[0].position.z.toFixed(2) ){
      console.log("fixed")
    }
    // console.log(camera.position.z.toFixed(1))
    // // console.log(refMesh.current.quaternion)
    // refMesh.current?.position.setZ(data[5].position.z - 2)
    // refMesh.current?.position.setX(data[5].position.x)
    // refMesh.current?..setX(camera.position.x)

    // cameraCopyRef.current.quaternion.set(0, camera.quaternion.y, 0, camera.quaternion.w)
  })

  return (
    <>
      {
        data.map((dataPos,index) => {
          return (
            <mesh key={index} position={[dataPos.position.x, -0.5, dataPos.position.z-1.3]} quaternion={[0, dataPos.quaternion.y, 0,dataPos.quaternion.w]}>
              <boxGeometry args={[0.5, 0.2, 1]} />
              {/* <meshBasicMaterial color={"#ff0000"}/> */}
              <meshNormalMaterial />
            </mesh>
          )
        })

      }
    </>
  )
}
export default Show