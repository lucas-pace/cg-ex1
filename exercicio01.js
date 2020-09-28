function main()
{
  var stats = initStats();          // To show FPS information
  var scene = new THREE.Scene();    // Create main scene
  var renderer = initRenderer();    // View function in util/utils
  var camera = initCamera(new THREE.Vector3(0, -30, 15)); // Init camera in this position

  // Enable mouse rotation, pan, zoom etc.
  var trackballControls = new THREE.TrackballControls( camera, renderer.domElement );

  // Show axes (parameter is size of each axis)
  var axesHelper = new THREE.AxesHelper( 12 );
  scene.add( axesHelper );

  // create the ground plane
  var planeGeometry = new THREE.PlaneGeometry(20, 20);
  planeGeometry.translate(0.0, 0.0, -0.02); // To avoid conflict with the axeshelper
  var planeMaterial = new THREE.MeshBasicMaterial({
      color: "rgba(150, 150, 150)",
      side: THREE.DoubleSide,
  });
  var plane = new THREE.Mesh(planeGeometry, planeMaterial);
  // add the plane to the scene
  scene.add(plane);

  // create a cube
  var cubeGeometry = new THREE.BoxGeometry(6, 6, 6);
  var cubeGeometry1 = new THREE.BoxGeometry(3, 3, 3);
  var cubeGeometry2 = new THREE.BoxGeometry(1, 1, 1);
  var cubeMaterial = new THREE.MeshNormalMaterial();

  var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  var cube1 = new THREE.Mesh(cubeGeometry1, cubeMaterial);
  var cube2 = new THREE.Mesh(cubeGeometry2, cubeMaterial);
  // position the cube
  cube.position.set(0.0, 0.0, 3.0);
  cube1.position.set(-6, 0.0, 1.5);
  cube2.position.set(6.0, 0.0, 0.5);
  // add the cube to the scene
  scene.add(cube);
  scene.add(cube1);
  scene.add(cube2);

  // Use this to show information onscreen
  controls = new InfoBox();
    controls.add("Basic Scene");
    controls.addParagraph();
    controls.add("Use mouse to interact:");
    controls.add("* Left button to rotate");
    controls.add("* Right button to translate (pan)");
    controls.add("* Scroll to zoom in/out.");
    controls.show();

  // Listen window size changes
  window.addEventListener( 'resize', function(){onWindowResize(camera, renderer)}, false );

  render();
  function render()
  {
    stats.update(); // Update FPS
    trackballControls.update(); // Enable mouse movements
    requestAnimationFrame(render);
    renderer.render(scene, camera) // Render scene
  }
}
