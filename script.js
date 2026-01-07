document.addEventListener('DOMContentLoaded', () => {
    runLandingAnimation();
});

async function runLandingAnimation() {
    const container = document.getElementById('animation-container');
    const typingTxt = document.getElementById('typing-text');
    const landing = document.getElementById('landing');
    const mainPage = document.getElementById('main-page');
    const wrapper = document.getElementById('typing-wrapper');

    const delay = (ms) => new Promise(res => setTimeout(res, ms));

    // 1. 검정 FOLDIT 등장 후 대기
    await delay(1000);

    // 2. 확장 시작
    container.classList.add('expanded');
    await delay(800);

    // 3. 타이핑 효과
    const slogan = "Fold what you want, make it yours";
    for (let char of slogan) {
        typingTxt.textContent += char;
        await delay(50);
    }
    await delay(1500);

    // 4. 슬로건 퇴장 및 수축
    wrapper.style.opacity = '0';
    await delay(300);
    container.classList.remove('expanded');
    
    // 5. 다시 합쳐진 후 주황색 변신
    await delay(700);
    container.classList.add('orange-mode');
    
    // 6. 메인 페이지로의 페이드인 전환
    await delay(1200);
    landing.style.opacity = '0';
    
    setTimeout(() => {
        landing.style.display = 'none';
        mainPage.style.display = 'block';
        setTimeout(() => {
            mainPage.style.opacity = '1';
            document.body.style.overflowY = 'auto'; // 스크롤 허용
        }, 50);
    }, 800);
}

// 탭 관리 함수
function showTab(tabNum) {
    const buttons = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    // 모든 비활성화
    buttons.forEach(btn => btn.classList.remove('active'));
    contents.forEach(content => {
        content.classList.remove('active');
        content.style.display = 'none';
    });

    // 선택된 탭 활성화
    buttons[tabNum - 1].classList.add('active');
    contents[tabNum - 1].style.display = 'block';
    
    // 부드러운 전환을 위한 클래스 추가
    setTimeout(() => {
        contents[tabNum - 1].classList.add('active');
    }, 10);

    // 탭 이동 시 상단으로 스크롤
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
