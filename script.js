// 1. 랜딩 페이지 애니메이션 컨트롤
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('expand-box').classList.add('active');
        setTimeout(() => {
            document.getElementById('yours').classList.add('blink');
        }, 800);
    }, 500);
});

// 2. 메인 페이지로 이동
function goToMain() {
    const landing = document.getElementById('landing');
    const mainPage = document.getElementById('main-page');
    
    landing.style.transform = 'translateY(-100%)';
    setTimeout(() => {
        landing.style.display = 'none';
        mainPage.style.display = 'block';
    }, 800);
}

// 3. 메인 탭 전환 로직
function showTab(tabIndex) {
    // 모든 버튼과 컨텐츠 비활성화
    const buttons = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));
    
    // 선택된 탭 활성화 (이벤트 타겟을 이용)
    event.currentTarget.classList.add('active');
    document.getElementById('tab' + tabIndex).classList.add('active');
}

// 4. AI LAB 하위 탭 전환 (임시)
function showSubTab(subId) {
    const buttons = document.querySelectorAll('.sub-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    if(subId === '3-2') {
        alert("Sam3D 기능은 추후 업데이트 예정입니다.");
    }
}
