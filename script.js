document.addEventListener('DOMContentLoaded', () => {
    startLandingAnimation();
});

async function startLandingAnimation() {
    const foldText = document.getElementById('fold-text');
    const itText = document.getElementById('it-text');
    const typingContainer = document.getElementById('typing-container');
    const typingText = document.getElementById('typing-text');
    const tWrapper = document.getElementById('t-wrapper');
    const logoReplacement = document.getElementById('logo-t-replacement');
    const landing = document.getElementById('landing');
    const mainPage = document.getElementById('main-page');

    // 1. 초기 대기
    await delay(1000);

    // 2. FOLD IT 사이 벌어지며 주황색으로 변경 + 타이핑 시작
    foldText.classList.add('orange');
    itText.classList.add('orange');
    typingContainer.classList.add('active');
    await typeWriter("Fold what you want, make it yours", typingText);
    
    await delay(1500);

    // 3. 타이핑 글씨 없어지고 다시 좁혀짐
    typingContainer.classList.remove('active');
    foldText.classList.remove('orange');
    itText.classList.remove('orange');
    await delay(1000);

    // 4. IT의 'T'를 로고로 교체
    tWrapper.classList.add('hidden');
    logoReplacement.classList.add('visible');
    await delay(500);

    // 5. 로고 3D 애니메이션 실행 (상단으로 쭉 나감)
    logoReplacement.classList.add('active');
    
    // 6. 애니메이션 종료 시점에 메인페이지로 이동
    await delay(2000);
    landing.style.opacity = '0';
    landing.style.transition = 'opacity 0.8s ease';
    
    setTimeout(() => {
        landing.style.display = 'none';
        mainPage.style.display = 'block';
        document.body.style.overflow = 'auto';
    }, 800);
}

function typeWriter(text, element) {
    return new Promise((resolve) => {
        let i = 0;
        element.innerHTML = '';
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, 50);
            } else {
                resolve();
            }
        }
        type();
    });
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function showTab(tabIndex) {
    const buttons = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');
    buttons.forEach(btn => btn.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));
    
    event.currentTarget.classList.add('active');
    document.getElementById('tab' + tabIndex).classList.add('active');
}
