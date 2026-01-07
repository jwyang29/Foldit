document.addEventListener('DOMContentLoaded', () => {
    const sequence = async () => {
        const elements = {
            fold: document.getElementById('fold-text'),
            i: document.getElementById('i-text'),
            t: document.getElementById('t-text'),
            typingBox: document.getElementById('typing-container'),
            typingTxt: document.getElementById('typing-text'),
            logo: document.getElementById('logo-t-replacement'),
            landing: document.getElementById('landing'),
            main: document.getElementById('main-page')
        };

        await delay(800);

        // 1. 확장 및 타이핑 (색상 변경)
        elements.fold.classList.add('orange');
        elements.i.classList.add('orange');
        elements.t.classList.add('orange');
        elements.typingBox.classList.add('active');
        await typeEffect("Fold what you want, make it yours", elements.typingTxt);
        
        await delay(1200);

        // 2. 수축 및 원래대로
        elements.typingBox.classList.remove('active');
        elements.fold.classList.remove('orange');
        elements.i.classList.remove('orange');
        elements.t.classList.remove('orange');
        await delay(700);

        // 3. T 교체 및 t 변신
        elements.t.style.visibility = 'hidden';
        elements.logo.classList.add('visible');
        await delay(100);
        elements.logo.classList.add('active-t');
        
        await delay(1000);

        // 4. 발사 및 페이지 이동
        elements.logo.classList.add('launch');
        await delay(800);

        elements.landing.style.opacity = '0';
        elements.landing.style.transition = 'opacity 0.5s';
        
        setTimeout(() => {
            elements.landing.style.display = 'none';
            elements.main.style.display = 'block';
        }, 500);
    };

    sequence();
});

function typeEffect(text, el) {
    return new Promise(res => {
        let i = 0;
        const timer = setInterval(() => {
            el.textContent += text[i];
            i++;
            if (i >= text.length) { clearInterval(timer); res(); }
        }, 40);
    });
}

function delay(ms) { return new Promise(res => setTimeout(res, ms)); }

function showTab(n) {
    document.querySelectorAll('.tab-btn, .tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn')[n-1].classList.add('active');
    document.getElementById('tab'+n).classList.add('active');
}
