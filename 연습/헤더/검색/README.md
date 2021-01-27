그래서 flex란 언제 어떤식으로 사용하는 것일까?
레이아웃을 구성하거나 요소들의 위치를 변경하려고 할 때 등등 아주 편리하게 사용할 수 있다.

중요! 부모와 자식요소가 꼭 있어야한다.
위치를 변형하고 싶은 요소의 부모요소에 display:flex;를 사용해주어야 하기 때문.



속성	의미
display	flex container를 정의한다
justify-content	가로 축의 정렬 방법을 설정한다
align-content	2줄 이상의 세로 축 정렬 방법을 설정한다
align-items	1줄의 세로축 items의 정렬 방법을 설정한다
(위의 그림과 표에서 나열되지않았지만 flex를 사용할 수 있는 수많은 속성들이 있다.)

justify-content //가로 축의 정렬 방법
flex-start: 요소들을 컨테이너의 왼쪽으로 정렬한다.
flex-end: 요소들을 컨테이너의 오른쪽으로 정렬한다.
center: 요소들을 컨테이너의 가운데로 정렬한다.
space-between: 요소들 사이에 동일한 간격을 둔다.
space-around: 요소들 주위에 동일한 간격을 둔다.

align-items //세로 축의 정렬 방법
flex-start: 요소들을 컨테이너의 가장 위로 정렬한다.
flex-end: 요소들을 컨테이너의 가장 아래로 정렬한다.
center: 요소들을 컨테이너의 세로 축 상의 가운데로 정렬한다.
baseline: 요소들을 컨테이너의 시작 위치에 정렬한다.
stretch: 요소들을 컨테이너에 맞도록 늘린다.

flex-direction //item을 정방향,역방향으로 정렬하는 방법
row: 요소들을 가로 축 정방향으로 정렬한다.
row-reverse: 요소들을 가로 축 역방향으로 정렬한다.
column: 요소들을 위에서 아래로 정방향 정렬한다.
column-reverse: 요소들을 아래에서 위로 역방향 정렬한다.

ps. order,align-self, flex-wrap 은 좀 더 공부가 필요하다. 좀 더 공부 후 추가 게시 예정!
pps. 각 속성의 예시 이미지도 천천히 만들어 차차 게시 예정!

