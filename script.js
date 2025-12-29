// 문장이 확장되었는지 확인하는 변수
let isExpanded = false;

document.addEventListener('DOMContentLoaded', () => {
    console.log("Foldit Ready. Click the text to see the magic!");
});

/**
 * 랜딩 페이지 클릭 핸들러
 * 첫 클릭: 문장 확장 / 두 번째 클릭: 메인 진입
 */
function goToMain() {
    const expandBox = document.getElementById('expand-box');
    const yoursText = document.getElementById('yours');
    const landing = document.getElementById('landing');
    const mainPage = document.getElementById('main-page');

    if (!isExpanded) {
        // [첫 번째 클릭] 문장 확장 애니메이션 실행
        expandBox.classList.add('active');
        
        // 문장이 어느 정도 확장된 후(1초 뒤) YOURS 나타나며 깜빡임
        setTimeout(() => {
            if (yoursText) {
                yoursText.classList.add('blink');
            }
        }, 1000);
        
        // 상태를 확장됨(true)으로 변경
        isExpanded = true;
        console.log("Text Expanded!");
    } else {
        // [두 번째 클릭] 이미 확장된 상태라면 메인 페이지로 이동
        landing.style.transform = 'translateY(-100%)';
        
        setTimeout(() => {
            landing.style.display = 'none';
            mainPage.style.display = 'block';
        }, 800);
        console.log("Moving to Main Page...");
    }
}

/**
 * 메인 상단 탭 전환 로직
 */
function showTab(tabIndex) {
    const buttons = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));
    
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
    
    const targetContent = document.getElementById('tab' + tabIndex);
    if (targetContent) {
        targetContent.classList.add('active');
    }
}

/**
 * AI LAB 하위 탭 전환 로직
 */
function showSubTab(subId) {
    const buttons = document.querySelectorAll('.sub-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    if (subId === '3-2') {
        alert("Sam3D 기능은 현재 준비 중입니다.");
    }
}
