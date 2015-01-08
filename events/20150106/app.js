(function(){

    "use strict";
    
    var scene=new THREE.Scene(),
        light= new THREE.AmbientLight(0xffffff),
        camera,
        renderer = new THREE.WebGLRenderer(),
        box;

        function initScene(){
    
            renderer.setSize( window.innerWidth, window.innerHeight );
            document.getElementById("webgl-container").appendChild(renderer.domElement);

            scene.add(light);
                      
            camera = new THREE.PerspectiveCamera(
                    35,
                    window.innerWidth / window.innerHeight,
                    1,
                    1000
                );
            
            camera.position.set( 0, 0, 100 );

            // 02 look down
            // camera.lookAt(new THREE.Vector3(0, -100, -200));
            
            scene.add(camera);  

            box = new THREE.Mesh(
              new THREE.CubeGeometry(
                20,
                20,
                20),
              new THREE.MeshBasicMaterial({ color: 0x00FF00, wireframe: false }));

            // 03 rotate box
            // box.rotateY(45  * (Math.PI / 180));

            scene.add(box);

            requestAnimationFrame(render);

        }

        function render() {
                renderer.render(scene, camera);

                // 02 zoom in
                // camera.position.z--;

                // 03 rotate box
                // box.rotateY(1  * (Math.PI / 180));
                
                requestAnimationFrame(render);
        }
       
        window.onload = initScene;

})();
