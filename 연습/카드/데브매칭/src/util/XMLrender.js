export default class XMLrender {
  // 렌더링 준비
  init($target, URL) {
    // 바깥 render-container
    const renderContainer = document.createElement("div");

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
  }

  // 엘리먼트 쉽게 만들기
  Make($target, name, text) {
    const el = document.createElement(name);
    if (text) el.innerText = text;
    $target.appendChild(el);
  }
}
