document.addEventListener('DOMContentLoaded', () => {
    runLandingAnimation();
});

async function runLandingAnimation() {
    const fold = document.getElementById('fold-text');
    const i = document.getElementById('i-text');
    const t = document.getElementById('t-text');
    const typingBox = document.getElementById('typing-container');
    const typingTxt = document.getElementById('typing-text');
    const scene = document.getElementById('logo-scene');
    const landing = document.getElementById('landing');
    const main = document.getElementById('main-page');

    await delay(1000);

    // 1단계: FOLD IT 사이 벌어짐 & 색상 변화 & 타이핑
    fold.classList.add('orange');
    i.classList.add('orange');
    t.classList.add('orange');
    typingBox.classList.add('active');
    await typeEffect("Fold what you want, make it yours", typingTxt);
    
    await delay(1500);

    // 2단계: 다시 좁혀짐 (검정색 복귀)
    typingBox.classList.remove('active');
    fold.classList.remove('orange');
    i.classList.remove('orange');
    t.classList.remove('orange');
    await delay(800);

    // 3단계: 텍스트 T를 숨기고 3D 로고 등장 (대문자 T 형태)
    t.style.visibility = 'hidden';
    scene.classList.add('visible');
    await delay(200);

    // 4단계: 소문자 t로 펼쳐짐
    scene.classList.add('active-t');
    await delay(1200);

    // 5단계: 발사 및 화면 전환
    scene.classList.add('launch');
    await delay(1000);

    landing.style.opacity = '0';
    landing.style.transition = 'opacity 0.6s ease';
    setTimeout(() => {
        landing.style.display = 'none';
        main.style.display = 'block';
    }, 600);
}

function typeEffect(text, el) {
    return new Promise(res => {
        let idx = 0;
        const timer = setInterval(() => {
            el.textContent += text[idx];
            idx++;
            if (idx >= text.length) { clearInterval(timer); res(); }
        }, 45);
    });
}

function delay(ms) { return new Promise(res => setTimeout(res, ms)); }

function showTab(n) {
    document.querySelectorAll('.tab-btn, .tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn')[n-1].classList.add('active');
    const tabs = ['tab1', 'tab2', 'tab3'];
    document.getElementById(tabs[n-1]).classList.add('active');
}
