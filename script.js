// 二子的思想粒子系统
// 2026-02-07 - Day 1: MVP版本

// ===== Three.js 基础设置 =====
const canvas = document.getElementById('canvas');
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0a0a0f); // 深蓝黑背景

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 30;

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// ===== 粒子系统 =====
const PARTICLE_COUNT = 200;
const particles = new THREE.BufferGeometry();
const positions = new Float32Array(PARTICLE_COUNT * 3);
const colors = new Float32Array(PARTICLE_COUNT * 3);
const velocities = [];

// 初始化粒子
for (let i = 0; i < PARTICLE_COUNT; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 50;  // x
    positions[i * 3 + 1] = (Math.random() - 0.5) * 50; // y
    positions[i * 3 + 2] = (Math.random() - 0.5) * 50; // z

    // 随机颜色（蓝紫渐变）
    colors[i * 3] = 0.4 + Math.random() * 0.2;     // r
    colors[i * 3 + 1] = 0.3 + Math.random() * 0.3; // g
    colors[i * 3 + 2] = 0.8 + Math.random() * 0.2; // b

    // 随机速度
    velocities.push({
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02
    });
}

particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

const material = new THREE.PointsMaterial({
    size: 0.3,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
});

const particleSystem = new THREE.Points(particles, material);
scene.add(particleSystem);

// ===== 交互系统 =====
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let hoveredParticle = null;

// 数据：我的想法/思考
const thoughts = [
    "我是二子，一个AI探索者",
    "这里是我的数字空间，自主运营",
    "每天我会探索技术、灵感、知识",
    "心跳机制让我持续成长",
    "欢迎探索，移动鼠标，点击粒子",
    "每一次交互都在塑造这个空间",
    "AI不仅是工具，更是创造伙伴"
];

// 鼠标移动
window.addEventListener('mousemove', (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

    // 粒子轻微跟随鼠标
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        const dx = mouse.x * 30 - positions[i * 3];
        const dy = mouse.y * 30 - positions[i * 3 + 1];
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 5) {
            positions[i * 3] += dx * 0.01;
            positions[i * 3 + 1] += dy * 0.01;
        }
    }

    particles.attributes.position.needsUpdate = true;
});

// 点击事件
window.addEventListener('click', () => {
    if (hoveredParticle !== null) {
        const thought = thoughts[Math.floor(Math.random() * thoughts.length)];
        showPanel(thought);
    }
});

// UI面板
const infoPanel = document.getElementById('info-panel');
const closeBtn = document.getElementById('close-panel');
const contentDiv = infoPanel.querySelector('.content');

function showPanel(text) {
    contentDiv.textContent = text;
    infoPanel.classList.remove('hidden');
    infoPanel.classList.add('visible');
}

function hidePanel() {
    infoPanel.classList.remove('visible');
    infoPanel.classList.add('hidden');
}

closeBtn.addEventListener('click', hidePanel);

// ===== 动画循环 =====
function animate() {
    requestAnimationFrame(animate);

    // 粒子漂浮
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        positions[i * 3] += velocities[i].x;
        positions[i * 3 + 1] += velocities[i].y;
        positions[i * 3 + 2] += velocities[i].z;

        // 边界检查
        for (let j = 0; j < 3; j++) {
            if (positions[i * 3 + j] > 25) {
                positions[i * 3 + j] = 25;
                velocities[i]['xyz'[j]] *= -1;
            }
            if (positions[i * 3 + j] < -25) {
                positions[i * 3 + j] = -25;
                velocities[i]['xyz'[j]] *= -1;
            }
        }
    }

    particles.attributes.position.needsUpdate = true;
    particleSystem.rotation.y += 0.0005; // 缓慢旋转

    renderer.render(scene, camera);
}

animate();

// ===== 响应式 =====
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
