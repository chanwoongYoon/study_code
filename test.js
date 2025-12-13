// 1. 다운로드 버튼 요소 가져오기
const downloadButton = document.getElementById('downloadButton');
const messageDiv = document.getElementById('message');

// 버튼 클릭 이벤트 리스너 설정
downloadButton.addEventListener('click', downloadJsonFile);

function downloadJsonFile() {
    // A. 저장할 JavaScript 객체 정의
    const userData = {
        id: 101,
        username: "johndoe",
        email: "john@example.com",
        settings: {
            theme: "dark",
            notifications: true
        },
        timestamp: new Date().toISOString()
    };

    // B. 객체를 JSON 문자열로 변환 (보기 좋게 2칸 들여쓰기 적용)
    const jsonString = JSON.stringify(userData, null, 2);

    // C. Blob 객체 생성
    // Blob은 원시 데이터를 나타내는 객체로, 파일로 저장할 수 있게 준비합니다.
    const blob = new Blob([jsonString], { type: "application/json" });

    // D. 다운로드용 URL 생성
    // 브라우저 내부에서 이 Blob을 가리키는 임시 URL을 만듭니다.
    const url = URL.createObjectURL(blob);

    // E. 임시 <a> 태그를 만들어 다운로드 실행
    const a = document.createElement('a');
    
    // <a> 태그의 href에 임시 URL을 설정
    a.href = url;
    
    // a.download 속성으로 파일 이름을 지정 (사용자에게 저장될 파일 이름)
    a.download = 'user_data_' + new Date().toLocaleDateString('ko-KR').replace(/\./g, '').trim() + '.json';
    
    // <a> 태그를 DOM에 추가 (필수 단계는 아니지만, 일부 브라우저 호환성을 위해 권장)
    document.body.appendChild(a);
    
    // 프로그램적으로 클릭 이벤트를 발생시켜 다운로드를 시작
    a.click();
    
    // F. 정리 작업
    // 1. DOM에서 임시 <a> 태그 제거
    document.body.removeChild(a);
    
    // 2. 생성했던 임시 URL 해제 (메모리 누수 방지)
    URL.revokeObjectURL(url);
    
    messageDiv.textContent = '파일 다운로드를 시작했습니다: ' + a.download;
    setTimeout(() => { messageDiv.textContent = ''; }, 3000);
}