import re

# string = '''<convention>
#     1.변수명:변수,함수이름은 소문자로 작성하고 이후나오는 단어는 대문자(camelCase)
#         getNickName
#     2.주석 적절히 잘 사용
#     3.문장 끝날 때마다 세미콜론 추가
#     4.적절한 들여쓰기

# <변수>
#     변수선언 규칙
#         1.변수명 문자,밑줄,달러기호로 시작
#         2.자바스크립트 예약어 변수화 금지
#         3.대소문자 구분함
#     let:변수 재할당 가능
#     const:변수 재할당 불가
#     var:미친놈임,hoisting함

# <자료형>
#     1.number,string,boolean,null,undefined,object,array
#     2.typeof():자료형 반환
#     3.number+string가능!
#     4.템플릿 리터럴:f string같은거임
#         `오늘 사과값은 ${price}원 입니다`
#     5.null:변수값이 선언되지 않음
#     6.undefined:변수값 선언되었지만 할당되진 않음

#     <객체>
#     object:여러정보 하나에 묶어서 저장 - 딕셔너리임
#         let apple{
#             color:"red",
#             weight:150,
#             price:2000
#         }
#     객체 값 불러오기
#         console.log(apple.color)
#         console.log(apple["weight"])
#     객체 값 추가
#         apple.origin = "충주"; //값 추가
#     객체 값 수정
#         apple.price = 2800; //값 수정
#     객체 값 삭제
#         delete apple.price;
    
#     <배열>
#     배열 선언
#         let products = ['고등어','삼치','김치']
#     배열 추가
#         product.push("딸기")
#     배열 맨 뒤 삭제
#         product.pop()
#     배열 맨 앞 추가
#         product.unshift("고구마")
#     배열 맨 앞 삭제
#         product.shift()

# <비교 연산자>
#     1. == : 값이 같으면 참 
#         5 == '5' -> true
#     2. === : 값과 자료형이 같으면 참 ***
#         5 === '5' -> false
#     3. != : 값이 다르면 참
#         5 != '5' -> false
#     4. !== : 값이나 자료형이 다르면 참 ***
#         5 !== '5' -> true

# <논리 연산자>
#     1. && : and
#     2. || : or
#     3. ! : not

# <삼항 연산자>
#     let period = (조건) ? 'true 값':'false 값';

# <반복문>
#     1.for(let num of num_list){}
#         let lst = [1,23,4,5,6,78]
#         for (let i of lst){
#             console.log(i)
#         }
#     2.do{반복할 코드} while(조건);

# <화살표 함수>
#     const 함수이름 = (매개변수1,매개변수2...) => {실행할 코드}

# <요소 접근>
#     document.getElementById:아이디로 요소 접근
#     document.getElementByClassName: 요소의 클래스명(배열)
#     document.getElementByTagName: 요소의 태그명(시멘틱 태그)
#     document.querySelector("선택자") - 첫번쨰 요소 반환
#     document.querySelectorAll("선택자") - 모든 요소 반환

# <HTML요소 속성 변경>
#     getAttribute("속성 이름"):속성 조회
#     setAttribute("속성 이름","새로운 속성값"):속성 수정
#     setAttribute("disabled",true):
#         disabled:button,input,textarea,select등의 폼 요소들 비활성화
#     removeAttribute("속성 이름"):속성 삭제


# <CSS접근하기>:html태그에 직접 적용된 인라인 스타일에 접근 가능
#     element.style.속성이름 = 속성값
#         ##하이픈은 대문자로 대체됨
#     element.classList.add("클래스명"),remove("클래스명"),toggle("클래스명") : 클래스 추가,제거,변경

# <이벤트>
#     [마우스]
#         click
#         dblclick
#         mouseover
#         mouseout
#     [키보드]
#         keydown:키 누를 때
#         keyup:키 뗄 때
#     [폼]
#         submit:폼 제출
#         change:입력요소의 값이 변경될 때
#         input:사용자가 입력하는 동안 실시간으로 발생
#     [윈도우 이벤트]
#         load:페이지나 이소스가 완전히 로드 된 후 발생
#         resize:브라우저나 창 크기가 변경될 때
#         scroll:사용자가 스크롤 시

# <이벤트 리스너>
#     addEventListener("이벤트 종류",함수) - 함수 익명함수로 써도 됨

# <이벤트 속성>
#     type:이벤트의 유형
#     target:이벤트가 발생한 요소(button)
#     preventDefault:기본동작(폼 제출, 링크 이동 등)을 취소
#     key:눌린 키의 값
#     clientX,clientY:뷰포트 기준 XY좌표
#     pageX, PageY:문서기준으로 마우스의 X,Y좌표

# <이벤트 객체>
#     addEventListener("이벤트 종류",함수(event)) - 에서 자동으로 콜백함수의 프로퍼티에 입력됨

# <폼 요소 속성>
#     type:text,checkbox,email
#     value:입력필드나 버튼의 현재값 가져오거나 설정
#     placeholder:입력필드 힌트값
#     checked:체크박스나 라디오 버튼 선택 됐는 지
#     disabled:요소 비활성화
#     required:필수 입력 필드 여부 지정
#     maxlength:입력필드의 최대 문자 길이(10,255...등)
#     readonly:입력필드를 읽기 전용 설정
#     selected:<option>요소가 기본 선택되었는 지 여부 지정

# <form 태그>
#     submit:form 태그에서만 사용가능'''

# newline_char = '<'
# string = string.split(newline_char)
# for i in range(len(string)-1):
#     string_chunck = newline_char + string[i+1]
#     print(f'{string_chunck}')


string = '''<이벤트>
    [마우스]
        click
            클릭클릭
        dblclick
        mouseover
        mouseout
    [키보드]
        keydown:키 누를 때
        keyup:키 뗄 때
    [폼]
        submit:폼 제출
        change:입력요소의 값이 변경될 때
        input:사용자가 입력하는 동안 실시간으로 발생
    [윈도우 이벤트]
        load:페이지나 이소스가 완전히 로드 된 후 발생
        resize:브라우저나 창 크기가 변경될 때
        scroll:사용자가 스크롤 시
        '''

tab = '    '
enter = '\n'