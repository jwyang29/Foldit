document.addEventListener('DOMContentLoaded', () => {
    runLandingSequence();
});

async function runLandingSequence() {
    const fold = document.getElementById('fold-text');
    const i = document.getElementById('i-text');
    const t = document.getElementById('t-text');
    const typingBox = document.getElementById('typing-container');
    const typingTxt = document.getElementById('typing-text');
    const scene = document.getElementById('logo-scene');
    const landing = document.getElementById('landing');
    const main = document.getElementById('main-page');

    const delay = (ms) => new Promise(res => setTimeout(res, ms));

    await delay(1000);

    // 1단계: 확장 및 타이핑
    fold.classList.add('orange');
    i.classList.add('orange');
    t.classList.add('orange');
    typingBox.classList.add('active');
    
    const slogan = "Fold what you want, make it yours";
    for(let char of slogan) {
        typingTxt.textContent += char;
        await delay(45);
    }
    
    await delay(1500);

    // 2단계: 수축
    typingBox.classList.remove('active');
    fold.classList.remove('orange');
    i.classList.remove('orange');
    t.classList.remove('orange');
    await delay(800);

    // 3단계: 3D t 변신 (80% 크기)
    t.style.visibility = 'hidden';
    scene.classList.add('visible');
    await delay(100);
    scene.classList.add('active-t');
    
    await delay(1200);

    // 4단계: 발사 및 페이지 전환
    scene.classList.add('launch');
    await delay(1000);

    landing.style.opacity = '0';
    landing.style.transition = 'opacity 0.6s ease';
    setTimeout(() => {
        landing.style.display = 'none';
        main.style.display = 'block';
    }, 600);
}

function showTab(n) {
    document.querySelectorAll('.tab-btn, .tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn')[n-1].classList.add('active');
    document.querySelectorAll('.tab-content')[n-1].classList.add('active');
}
