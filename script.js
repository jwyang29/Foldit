document.addEventListener('DOMContentLoaded', () => {
    // 1. 랜딩 페이지 로드 시 애니메이션 시작
    startLandingAnimation();
});

/**
 * 랜딩 페이지 글자 확장 애니메이션
 */
function startLandingAnimation() {
    const expandBox = document.getElementById('expand-box');
    const yoursText = document.getElementById('yours');

    // 0.5초 뒤 중앙 문구 확장 시작
    setTimeout(() => {
        if (expandBox) {
            expandBox.classList.add('active');
        }

        // 문구 확장이 끝날 즈음(약 1초 뒤) YOURS 나타나며 깜빡임
        setTimeout(() => {
            if (yoursText) {
                yoursText.classList.add('blink');
            }
        }, 1000);
    }, 500);
}

/**
 * 랜딩 페이지 클릭 시 메인으로 전환
 */
function goToMain() {
    const landing = document.getElementById('landing');
    const mainPage = document.getElementById('main-page');
    
    // 위로 슬라이드하며 사라짐
    landing.style.transform = 'translateY(-100%)';
    
    setTimeout(() => {
        landing.style.display = 'none';
        mainPage.style.display = 'block';
        // 메인 페이지가 나타날 때 첫 번째 탭 애니메이션을 위해 강제 리플로우 유도 가능
    }, 800);
}

/**
 * 메인 상단 탭 전환 로직
 * @param {number} tabIndex - 활성화할 탭 번호
 */
function showTab(tabIndex) {
    const buttons = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');
    
    // 모든 버튼과 컨텐츠 초기화
    buttons.forEach(btn => btn.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));
    
    // 클릭된 버튼 활성화
    // event.currentTarget을 사용하여 클릭된 요소를 정확히 지칭
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
    
    // 해당 컨텐츠 표시
    const targetContent = document.getElementById('tab' + tabIndex);
    if (targetContent) {
        targetContent.classList.add('active');
    }
}

/**
 * AI LAB 하위 탭 전환 로직
 * @param {string} subId - 하위 탭 ID
 */
function showSubTab(subId) {
    const buttons = document.querySelectorAll('.sub-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    if (subId === '3-2') {
        alert("Sam3D (3D 가상 종이접기 시뮬레이터) 기능은 개발 중입니다.");
    }
}
