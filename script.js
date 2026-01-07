document.addEventListener('DOMContentLoaded', () => {
    runLandingSequence();
});

async function runLandingSequence() {
    const foldText = document.getElementById('fold-text');
    const iText = document.getElementById('i-text');
    const tText = document.getElementById('t-text');
    const typingContainer = document.getElementById('typing-container');
    const typingText = document.getElementById('typing-text');
    const logoScene = document.getElementById('logo-t-replacement');
    const landing = document.getElementById('landing');
    const mainPage = document.getElementById('main-page');

    await delay(1000);

    // 1단계: FOLD IT 사이가 벌어지며 주황색으로 변화 + 타이핑
    foldText.classList.add('orange');
    iText.classList.add('orange');
    tText.classList.add('orange');
    typingContainer.classList.add('active');
    await typeWriter("Fold what you want, make it yours", typingText);
    
    await delay(1500);

    // 2단계: 다시 좁혀지며 색상 복귀
    typingContainer.classList.remove('active');
    foldText.classList.remove('orange');
    iText.classList.remove('orange');
    tText.classList.remove('orange');
    await delay(800);

    // 3단계: 텍스트 T를 3D 로고 T로 교체
    tText.style.visibility = 'hidden';
    logoScene.classList.add('visible');
    await delay(300);

    // 4단계: 소문자 t로 펼쳐지기
    logoScene.classList.add('active-t');
    await delay(1000);

    // 5단계: 하늘로 발사 및 페이지 전환
    logoScene.classList.add('launch');
    await delay(1200);

    landing.style.opacity = '0';
    landing.style.transition = 'opacity 0.6s ease';
    
    setTimeout(() => {
        landing.style.display = 'none';
        mainPage.style.display = 'block';
    }, 600);
}

function typeWriter(text, element) {
    return new Promise((resolve) => {
        let i = 0;
        element.innerHTML = '';
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, 45);
            } else {
                resolve();
            }
        }
        type();
    });
}

function delay(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

function showTab(tabIndex) {
    const buttons = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');
    buttons.forEach(btn => btn.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));
    event.currentTarget.classList.add('active');
    document.getElementById('tab' + tabIndex).classList.add('active');
}
