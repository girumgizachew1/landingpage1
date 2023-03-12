import { Suspense, useEffect, useState } from "react" 
import {Canvas , useFrame} from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from './loader'

const Computers = () => {
    const computer =useGLTF('./space/scene.gltf')
    const [rotation, setRotation] = useState(0)
  
  useFrame(({ clock }) => {
  setRotation(clock.elapsedTime * 0.5)
 })
  
  
    return (
    <mesh rotation-y={rotation} >
        <hemisphereLight intensity={0.8} groundColor="white" />
        <pointLight intensity={1}/>
        <primitive
         object={computer.scene}
         scale={1}
         position={[0,-2.5, -0.25]}
        />
        
    </mesh>
  )
}

const ComputerCanvas =()=>{
     return(
         <Canvas
            frameloop="demand"
            shadows
            camera={{ position: [20, 3, 5], fov:25  }}
            gl={{preserveDrawingBuffer:true}}
         >

             <Suspense fallback={"hey"} >
                <OrbitControls 
                    enableZoom={false}
                    maxPolarAngle={Math.PI/2}
                    minPolarAngle={Math.PI/2}
                />
                <Computers/>
             </Suspense>
             <Preload all />

         </Canvas>
     )
}
export default ComputerCanvas