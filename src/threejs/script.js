import * as THREE from "three";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";
import gsap from "gsap";
/**
 * Base
 */
// Debug

// Portfolio song hurah
const bgMusic = document.getElementById("bgMusic");

// Canvas
const canvas = document.querySelector(".webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Objects distance
const objectsDistance = 8;

// model
let mixer = null;
let mixer2 = null;
let mixer3 = null;

let avatar = null;
let avatarPushups = null;
let avatarPhone = null;

const loadingElement = document.querySelector(".loading-container");
const toggleMusic = document.querySelector(".toggle-music");

toggleMusic.addEventListener("click", () => {
  if (bgMusic.currentTime) {
    bgMusic.pause();
    bgMusic.currentTime = 0;
  } else {
    bgMusic.play();
  }
  // To stop and reset the music
});
const loadingManager = new THREE.LoadingManager(() => {
  init();
  setTimeout(() => {
    loadingElement.style.display = "none";
  }, 1000);
});

const fbxLoader = new FBXLoader(loadingManager);

fbxLoader.load("avatar.fbx", (object) => {
  mixer = new THREE.AnimationMixer(object);
  const action = mixer.clipAction(object.animations[0]);
  action.play();

  object.traverse(function (child) {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  object.scale.set(0.01, 0.01, 0.01);

  avatar = object;

  scene.add(object);

  // No object distance here
  avatar.position.y = -1.5;
});

fbxLoader.load("avatar2.fbx", (object) => {
  mixer2 = new THREE.AnimationMixer(object);
  const action = mixer2.clipAction(object.animations[0]);
  action.play();

  object.traverse(function (child) {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  object.scale.set(0.01, 0.01, 0.01);

  avatarPushups = object;

  scene.add(object);

  if (sizes.height < 1000) {
    avatarPushups.position.y = objectsDistance * -1 - 3.2;
    avatarPushups.position.x = 2.5;
  } else {
    avatarPushups.position.y = objectsDistance * -1 - 2.5;
    avatarPushups.position.x = 3;
  }
});
fbxLoader.load("avatar3.fbx", (object) => {
  mixer3 = new THREE.AnimationMixer(object);
  const action = mixer3.clipAction(object.animations[0]);
  action.play();

  object.traverse(function (child) {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  object.scale.set(0.01, 0.01, 0.01);

  avatarPhone = object;

  scene.add(object);

  if (sizes.height < 1000) {
    avatarPhone.position.y = objectsDistance * -3.4;
  } else {
    avatarPhone.position.y = objectsDistance * -3;
  }
  avatarPhone.position.x = 2;
});

function init() {
  /**
   * Section 1
   */
  const sphereMain = new THREE.Mesh(
    new THREE.SphereGeometry(2.5, 100, 100),
    new THREE.MeshStandardMaterial({
      color: "#dda60e",
      side: THREE.DoubleSide,
      wireframe: true,
    })
  );

  sphereMain.position.x = -4;
  sphereMain.position.y = -2.5;
  scene.add(sphereMain);

  const sphereMainSecond = new THREE.Mesh(
    new THREE.SphereGeometry(1.5, 100, 100),
    new THREE.MeshStandardMaterial({
      color: "#dda60e",
      side: THREE.DoubleSide,
      wireframe: true,
    })
  );

  const directionalLight = new THREE.DirectionalLight("#ffffff", 3);
  directionalLight.position.set(1, 1, 0);
  scene.add(directionalLight);

  const directionalLightLast = new THREE.DirectionalLight("#dda60e", 15);
  directionalLightLast.position.set(1, -4, 0);
  scene.add(directionalLightLast);

  sphereMainSecond.position.x = 4;
  sphereMainSecond.position.y = 2.5;
  scene.add(sphereMainSecond);

  const particlesCount = 1000;
  const positions = new Float32Array(particlesCount * 3);

  const particlesGeometry = new THREE.BufferGeometry();

  for (let i = 0; i < particlesCount; i++) {
    positions[i * 3 + 0] = (Math.random() - 0.5) * 23;
    positions[i * 3 + 1] =
      objectsDistance * 0.5 - Math.random() * objectsDistance * 4;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }
  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3)
  );

  // Material
  const particlesMaterial = new THREE.PointsMaterial({
    color: "#dda60e",
    sizeAttenuation: true,
    size: 0.01,
  });

  // Points
  const particles = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particles);

  const cubeParticles = new THREE.Points(
    new THREE.BoxGeometry(1.5, 1.5, 1.5, 20, 20, 20, 20),
    particlesMaterial
  );
  cubeParticles.position.y = objectsDistance * -1.3;
  scene.add(cubeParticles);

  const pointLight = new THREE.PointLight("#dda60e", 15, 10, 1);
  scene.add(pointLight);

  const pointLightBlue = new THREE.PointLight("#3deae1", 15, 10, 1);
  pointLightBlue.position.y = -10;
  pointLightBlue.position.x = 1.2;
  scene.add(pointLightBlue);

  const ambientLight = new THREE.AmbientLight("#dda60e", 2);
  scene.add(ambientLight);

  window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  const cursor = { x: 0, y: 0 };

  window.addEventListener("mousemove", (event) => {
    cursor.x = event.clientX / sizes.width - 0.5;
    cursor.y = event.clientY / sizes.height - 0.5;
  });

  let scrollY = window.scrollY;

  let currentSection = 1;
  window.addEventListener("scroll", (event) => {
    scrollY = window.scrollY;

    const newSection = Math.round(scrollY / sizes.height) + 1;

    if (newSection != currentSection) {
      currentSection = newSection;
      gsap.to(particles.rotation, {
        duration: 1.5,
        ease: "power1.inOut",
        y: "+= 1",
      });
    }
  });
  /**
   * Camera
   */
  // Base camera
  const cameraGroup = new THREE.Group();
  scene.add(cameraGroup);
  // Base camera
  const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    10
  );
  camera.position.z = 3;
  cameraGroup.add(camera);

  /**
   * Renderer
   */
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  let previousTime = 0;
  /**
   * Animate
   */
  const clock = new THREE.Clock();

  const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    const deltaTime = elapsedTime - previousTime;
    previousTime = elapsedTime;

    if (mixer) {
      mixer.update(deltaTime);
    }
    if (mixer2) {
      mixer2.update(deltaTime);
    }
    if (mixer3) {
      mixer3.update(deltaTime);
    }

    // Move the camera
    camera.position.y = (-scrollY / sizes.height) * objectsDistance;

    const paralaxX = cursor.x;
    const paralaxY = cursor.y;

    cameraGroup.position.x += (paralaxX - cameraGroup.position.x) * 0.005;
    cameraGroup.position.y += (paralaxY - cameraGroup.position.y) * 0.005;

    // Update controls
    // controls.update();

    sphereMain.rotation.y = elapsedTime * 0.1;
    sphereMain.rotation.x = elapsedTime * 0.05;

    sphereMainSecond.rotation.y = elapsedTime * 0.1;
    sphereMainSecond.rotation.x = elapsedTime * 0.05;

    cubeParticles.rotation.y = elapsedTime * 0.1;
    cubeParticles.rotation.x = elapsedTime * 0.05;

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
  };

  tick();
}
