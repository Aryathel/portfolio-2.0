import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function loadGLTFModel(
    scene, glbPath, options = { receiveShadow: true, castShadow: true}
) {
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader();

        loader.load(
            glbPath,
            gltf => {
                console.log(gltf);
                const obj = gltf.scene;
                obj.name = 'spinny_logo';
                obj.position.y = 0;
                obj.position.x = 0;
                obj.receiveShadow = options.receiveShadow;
                obj.castShadow = options.castShadow;
                scene.add(obj);

                obj.traverse( function (child) {
                    if ((child as Mesh).isMesh) {
                        child.castShadow = options.castShadow;
                        child.receiveShadow = options.receiveShadow;
                    }
                });

                resolve(gltf);
            },
            undefined,
            function (error) {
                reject(error);
            }
        );
    })
}