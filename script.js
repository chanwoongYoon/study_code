const subTheme = document.getElementsByClassName("sub_theme");
const toggleWindow = document.getElementsByClassName("toggle_window");
const contentsWrapper = document.getElementById("contents_wrapper");

// subThemeList 만들기
let subThemeList = []
for (let i=0;i<subTheme.length;i++){
    subThemeList.push(subTheme[i].innerText)
}

//클릭하면 display 속성 변경
if(contentsWrapper !== null){
    contentsWrapper.addEventListener("click",(event)=>{
        if (event.target.id !== "contents_wrapper"){
            let subTitle = event.target.innerText;//subTitle 내용 파악
            let subTitleIndex = subThemeList.indexOf(subTitle);//몇번째 subTitle인지 파악

            if (toggleWindow[subTitleIndex].style.display == 'block') {
                toggleWindow[subTitleIndex].style.display = 'none';//팝업 없애기
            } else {
                toggleWindow[subTitleIndex].style.display = 'block';//팝업 띄우기
            };
        };
    });
};




// 1. 삽입할 대상 요소 (placeholder)를 찾습니다.
const placeholder = document.getElementById('header');

// 2. fetch API를 사용하여 header.html 파일을 불러옵니다.
fetch('header.html') // 파일 경로가 다르면 '../header.html' 등으로 수정해야 합니다.
    .then(response => {
        // 응답이 성공적인지 확인
        if (!response.ok) {
            throw new Error('Header file not found or failed to load.');
        }
        return response.text(); // 응답 본문을 HTML 텍스트로 읽습니다.
    })
    .then(htmlText => {
        // 3. 가져온 HTML 텍스트를 placeholder의 innerHTML에 삽입합니다.
        placeholder.innerHTML = htmlText;
        console.log("Header master code successfully loaded.");
    })
    .catch(error => {
        console.error("Error loading header:", error);
    });
