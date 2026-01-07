document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

async function initApp() {
    const container = document.getElementById('animation-container');
    const typingTxt = document.getElementById('typing-text');
    const landing = document.getElementById('landing');
    const mainPage = document.getElementById('main-page');
    const wrapper = document.getElementById('typing-wrapper');

    const delay = (ms) => new Promise(res => setTimeout(res, ms));

    // 1. 초기 대기
    await delay(1000);

    // 2. 확장
    container.classList.add('expanded');
    await delay(800);

    // 3. 타이핑
    const slogan = "Fold what you want, make it yours";
    for (let char of slogan) {
        typingTxt.textContent += char;
        await delay(45);
    }
    await delay(1500);

    // 4. 수축
    wrapper.style.opacity = '0';
    await delay(300);
    container.classList.remove('expanded');
    
    // 5. 주황색 변신
    await delay(700);
    container.classList.add('orange-mode');
    
    // 6. 전환
    await delay(1200);
    landing.style.opacity = '0';
    
    setTimeout(() => {
        landing.style.display = 'none';
        mainPage.style.display = 'block';
        setTimeout(() => {
            mainPage.style.opacity = '1';
            document.body.style.overflowY = 'auto';
        }, 50);
    }, 800);
}

function showTab(num) {
    const btns = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    btns.forEach(b => b.classList.remove('active'));
    contents.forEach(c => {
        c.classList.remove('active');
        c.style.display = 'none';
    });

    btns[num - 1].classList.add('active');
    contents[num - 1].style.display = 'block';
    
    setTimeout(() => {
        contents[num - 1].classList.add('active');
    }, 10);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
