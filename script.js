document.addEventListener('DOMContentLoaded', () => {
    runFinalAnimation();
});

async function runFinalAnimation() {
    const foldText = document.getElementById('fold-text');
    const iText = document.getElementById('i-text');
    const typingContainer = document.getElementById('typing-container');
    const typingText = document.getElementById('typing-text');
    const logoScene = document.getElementById('logo-t-replacement');
    const landing = document.getElementById('landing');
    const mainPage = document.getElementById('main-page');

    await delay(1000);

    // 1. 벌어지며 주황색 변화 + 타이핑 (T 상태 유지)
    foldText.classList.add('orange');
    iText.classList.add('orange');
    typingContainer.classList.add('active');
    await typeWriter("Fold what you want, make it yours", typingText);
    
    await delay(1200);

    // 2. 타이핑 종료 후 다시 좁혀짐
    typingContainer.classList.remove('active');
    foldText.classList.remove('orange');
    iText.classList.remove('orange');
    await delay(800);

    // 3. T -> t 변신 (상단 막대 펼쳐짐 + 가로바 하강)
    logoScene.classList.add('active-t');
    await delay(1000);

    // 4. 하늘로 발사 (막대 길어짐)
    logoScene.classList.add('launch');
    await delay(1200);

    // 5. 메인 페이지로 전환
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
                setTimeout(type, 40);
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
