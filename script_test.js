//변수 정의
const numbers = ['first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth','eleventh','twelfth','thirteenth','fourteenth','fifteenth','sixteenth','seventeenth','eighteenth','nineteenth','twentieth'];
const hue = document.getElementById('hue');
//함수 정의
function making_pallet(range, hueVal, saturation,className) {
        let code = ``;
        code += `<div class="pallet">\n`;
        for (let i = 0; i < range; i++) {
            const id = `${className}`+`${i}`;
            code += `   <div class="color" id="${id}"></div>\n`;
        }
        code += `</div>\n`;
        code += `<h1>HSL : (${hueVal},${saturation}%,N)</h1>`;
        return code;
    }

function making_pallet_css(range,hueVal,saturation,className){
    for (let i = 0; i < range; i++) {
        const el = document.getElementById(`${className}${i}`);
        if (el) {
            let mulVal = 100 / range
            el.style.backgroundColor = `hsl(${hueVal},${saturation}%,${i * mulVal}%)`;
        }
    }
}


// 기능부
if (!hue) {
    console.warn('Element with id "hue" not found. Aborting pallet rendering.');
} else {
    // 중첩 또는 중복 id를 피하기 위해 startIndex 사용
    let final_code = '';
    final_code += making_pallet(10, 240, 100, 'first');
    hue.innerHTML = final_code;

    making_pallet_css(10,240,100,'first')
}
