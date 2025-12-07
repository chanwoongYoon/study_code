result_dict = {'font-family: 폰트지정': ['&emsp;font-family:"궁서체","돋움",sans-serif;'], 
            'font-size: 글자 크기 지정': ['&emsp;font-size:절대단위(px,pt)/상대단위(em,rem);', '&emsp;&emsp;백분율: 부모요소의 폰트크기에 상대적인 단위', '&emsp;&emsp;em:부모 요소의 폰트크기에 상대적 단위', '&emsp;&emsp;rem:최고 부모 요소의 폰트크기에 상대적 단위'], 
            'font-style: 스타일 정의': ['&emsp;font-style: normal/italic(이탤릭체)/oblique(폰트 그냥 기울임 처리)'], 
            'font-weight: 폰트의 두께 설정': ['&emsp;font-weight: 키워드(normal{400},bold{700})/숫자(100,200...900)'], 
            '색상:': ['&emsp;color:색상명/hex코드/rgb/rgba']}

space = '        '

for i in result_dict:
    print(space+'<li class="descriptions">')
    print(space+'    ',end='')
    print(i)
    contents = result_dict[i]
    for q in contents:
        print(space+'    ',end='')
        print(q)
    print(space+'</li>')