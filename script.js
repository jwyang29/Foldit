document.addEventListener('DOMContentLoaded', () => {
    initLanding();
});

async function initLanding() {
    const container = document.getElementById('animation-container');
    const typingTxt = document.getElementById('typing-text');
    const landing = document.getElementById('landing');
    const mainPage = document.getElementById('main-page');
    const wrapper = document.getElementById('typing-wrapper');

    const delay = (ms) => new Promise(res => setTimeout(res, ms));

    // 1. 초기 대기
    await delay(1000);

    // 2. 사이 벌리기
    container.classList.add('expanded');
    await delay(800);

    // 3. 타이핑 효과
    const slogan = "Fold what you want, make it yours";
    for (let char of slogan) {
        typingTxt.textContent += char;
        await delay(50);
    }
    await delay(1500);

    // 4. 슬로건 숨기기 및 다시 합치기
    wrapper.style.opacity = '0';
    await delay(300);
    container.classList.remove('expanded');
    
    // 5. 주황색으로 변신
    await delay(700);
    container.classList.add('orange-mode');
    
    // 6. 메인 페이지로 페이드인 전환
    await delay(1200);
    landing.style.opacity = '0';
    
    setTimeout(() => {
        landing.style.display = 'none';
        mainPage.style.display = 'block';
        document.body.style.overflow = 'auto'; // 스크롤 허용
    }, 800);
}

// 탭 전환 함수
function showTab(tabNum) {
    // 모든 버튼과 콘텐츠에서 active 제거
    const buttons = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    buttons.forEach(btn => btn.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));

    // 선택된 탭 활성화
    buttons[tabNum - 1].classList.add('active');
    contents[tabNum - 1].classList.add('active');
}
