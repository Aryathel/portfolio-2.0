import { useState, useEffect, useRef, useCallback, MutableRefObject, SetStateAction } from "react";
import { Box, Spinner } from "@chakra-ui/react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Dispatch } from "react";
import { loadGLTFModel } from "../libs/model";
import { Mesh, Material, Scene, AnimationClip } from "three";
import { render } from "react-dom";

function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x-1, 4));
}

const Logo3D = () => {
    const refContainer: MutableRefObject<HTMLDivElement | null> = useRef();
    const [loading, setLoading] = useState(true);
    const [renderer, setRenderer]: [THREE.WebGLRenderer, Dispatch<SetStateAction<THREE.WebGLRenderer>>] = useState();
    const [_camera, setCamera]: [THREE.OrthographicCamera, Dispatch<SetStateAction<THREE.OrthographicCamera>>] = useState();
    const [target] = useState(new THREE.Vector3(0, 0, 0));
    const [scene] = useState(new THREE.Scene());
    const [_controls, setControls]: [OrbitControls, Dispatch<SetStateAction<OrbitControls>>] = useState();

    const handleWindowResize = useCallback(() => {
        const { current: container } = refContainer;
        if (container && renderer) {
            const scW = container.clientWidth;
            const scH = container.clientHeight;

            renderer.setSize(scW, scH);
        }
    }, [renderer]);

    useEffect(() => {
        const initialCameraPosition = new THREE.Vector3(0, -100, -100);
        const { current: container } = refContainer;
        if (container && !renderer) {
            const scW = container.clientWidth;
            const scH = container.clientHeight;
            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true
            });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(scW, scH);
            renderer.outputEncoding = THREE.sRGBEncoding;
            renderer.domElement.style.zIndex = "1";
            if (container.childElementCount <= 1) container.appendChild(renderer.domElement);
            setRenderer(renderer);

            const scale = scH * 0.001 + 1.2;
            const camera = new THREE.OrthographicCamera(
                -scale,
                scale,
                scale,
                -scale,
                0.01,
                50000
            );
            camera.position.copy(initialCameraPosition);
            camera.lookAt(target);
            setCamera(camera);

            const light = new THREE.DirectionalLight( 'white', 2 ); // soft white light
            light.position.set(10, 10, 10);
            scene.add( light );

            const centerLight = new THREE.PointLight( 0x8566d9, 1, 100, 2 );
            centerLight.position.set( 0, 0, 0 );
            scene.add( centerLight );

            const topLight = new THREE.PointLight( 0x8566d9, 1, 100, 2 );
            topLight.position.set( 0, 0.8, 0 );
            scene.add( topLight );

            const bottomLight = new THREE.PointLight( 0x8566d9, 1, 100, 2 );
            bottomLight.position.set( 0, -0.8, 0 );
            scene.add( bottomLight );

            const tipTopLight = new THREE.PointLight(0x8566d9, 1, 100, 2);
            tipTopLight.position.set(0, 1.1, 0);
            scene.add(tipTopLight);

            const controls = new OrbitControls(camera, renderer.domElement);
            controls.autoRotate = true;
            controls.autoRotateSpeed = 0.3;
            controls.target = target;
            setControls(controls);

            const loader = new GLTFLoader();
            const clock = new THREE.Clock();
            var mixer: THREE.AnimationMixer;

            loadGLTFModel(scene, '/3d/LogoSpinnyThingy.glb', {
                receiveShadow: false,
                castShadow: false
              }).then((obj: GLTF) => {
                mixer = new THREE.AnimationMixer(obj.scene);
                obj.animations.forEach((clip: AnimationClip) => {
                    mixer.clipAction(clip).play();
                });
              }).then(() => {
                animate();
                setLoading(false);
              })

            let req = null;
            let frame = 0;
            const animate = () => { 
                req = requestAnimationFrame(animate);
                frame = frame <= 100 ? frame + 1 : frame;

                var delta = clock.getDelta();
                if (mixer) mixer.update(delta);

                if (frame <= 100) {
                    const p = initialCameraPosition;
                    const rotSpeed = -easeOutCirc(frame/120) * Math.PI * 20;

                    camera.position.y = 10;
                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
                    camera.lookAt(target);
                } else {
                    controls.update();
                }

                renderer.render(scene, camera);
            }

            return () => {
                cancelAnimationFrame(req);
                renderer.dispose();
            }
        }
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize, false);
        return () => {
            window.removeEventListener('resize', handleWindowResize, false);
        }
    }, [renderer, handleWindowResize])

    return (
        <Box
          ref={refContainer}
          className="logo-3d"
          m="auto"
          mb={-20}
          w={[40, 280]}
          h={[40, 280]}
          position="relative"
        >
            {loading && (
                <Spinner size="xl" position="absolute" left="50%" top="50%" ml="calc(0px - var(--spinner-size)) / 2" mt="calc(0px - var(--spinner-size))" />
            )}
        </Box>
    )
}

export default Logo3D;