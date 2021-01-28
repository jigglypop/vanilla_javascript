// 앵귤러처럼 컴포넌트화하기
export default class NgComponent {
  // 렌더링 준비
  init($target, URL, SEMENTIC) {
    // 바깥 render-container
    let renderContainer;
    // 시멘틱 태그가 있으면 시멘틱 태그 만들고 없으면 자동으로 div형으로 만들기
    if (SEMENTIC) {
      renderContainer = document.createElement(SEMENTIC);
    } else {
      renderContainer = document.createElement("div");
    }
    // 컨테이너 클래스명 붙이기
    const containerName = URL.split("/");
    renderContainer.className = `${
      containerName[containerName.length - 1]
    }-container`;

    // xml으로 index.html 받아와서 innerHTML에 붙이기
    let ajax = new XMLHttpRequest();
    ajax.open("GET", `${URL}/index.html`, false);
    ajax.send();
    renderContainer.innerHTML = ajax.responseText;

    // 스타일 태그 삽입
    const stylelink = document.createElement("link");
    stylelink.rel = "stylesheet";
    stylelink.href = `${URL}/style.css`;
    renderContainer.appendChild(stylelink);
    // $target에 삽입
    $target.appendChild(renderContainer);
    // 렌더 컨테이너 리턴
    return renderContainer;
  }

  // 아우터 클리어
  clear(outer, URL) {
    outer.innerHTML = "";
    // xml으로 index.html 받아와서 innerHTML에 붙이기
    let ajax = new XMLHttpRequest();
    ajax.open("GET", `${URL}/index.html`, false);
    ajax.send();
    outer.innerHTML = ajax.responseText;

    // 스타일 태그 삽입
    const stylelink = document.createElement("link");
    stylelink.rel = "stylesheet";
    stylelink.href = `${URL}/style.css`;
    outer.appendChild(stylelink);
  }

  // 엘리먼트 만들기
  Make($target, elname, text, className) {
    const el = document.createElement(elname);
    if (text) el.innerText = text;
    if (className) el.className = className;
    $target.appendChild(el);
    // 엘리먼트 리턴
    return el;
  }

  // 이미지 만들기
  MakeImg($target, src, className) {
    const el = document.createElement("img");
    if (src) el.src = src;
    if (className) el.className = className;
    $target.appendChild(el);
    // 이미지 리턴
    return el;
  }

  // 버튼 만들기
  MakeBtn($target, onClick, text, className) {
    const el = document.createElement("button");
    // 클릭이벤트 달기
    el.addEventListener("click", onClick);
    if (text) el.innerText = text;
    if (className) el.className = className;
    $target.appendChild(el);
    // 버튼 엘리먼트 리턴
    return el;
  }

  // 인풋 만들기
  MakeInput($target, onChange, text, className) {
    const el = document.createElement("input");
    // 바꾸기 이벤트 달기
    el.addEventListener("change", onChange);
    if (text) el.innerText = text;
    if (className) el.className = className;
    $target.appendChild(el);
    // 버튼 엘리먼트 리턴
    return el;
  }
}
