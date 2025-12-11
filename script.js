const subTheme = document.getElementsByClassName("sub_theme");
const toggleWindow = document.getElementsByClassName("toggle_window");
const contentsWrapper = document.getElementById("contents_wrapper");

// subThemeList 만들기
let subThemeList = []
for (let i=0;i<subTheme.length;i++){
    subThemeList.push(subTheme[i].innerText)
}
console.log(subThemeList)
console.log(subThemeList.indexOf("엄수진")) // 인덱스 없으면 -1출력

contentsWrapper.addEventListener("click",(event)=>{
    if (event.target.id !== "contents_wrapper"){
        let subTitle = event.target.innerText;
        let subTitleIndex = subThemeList.indexOf(subTitle);
        console.log(subTitle);//subTitle 내용 파악
        console.log(subTitleIndex);//몇번째 subTitle인지 파악
        console.log(toggleWindow[subTitleIndex].style.display)
        console.log(toggleWindow[subTitleIndex].style.display == 'block');
        console.log(toggleWindow[subTitleIndex].style.display !== 'block');

        if (toggleWindow[subTitleIndex].style.display == 'block') {
            toggleWindow[subTitleIndex].style.display = 'none';//팝업 없애기
        } else {
            toggleWindow[subTitleIndex].style.display = 'block';//팝업 띄우기
        };
    };
});
