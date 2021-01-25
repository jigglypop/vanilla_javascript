export default class BlueButton {
  constructor({ $target, text, onAction }) {
    // 버튼 컨테이너
    this.btnContainer = document.createElement("div");
    this.btnContainer.className = "btn-container";

    this.onAction = onAction;
    this.text = text;
    $target.appendChild(this.btnContainer);
    this.render();
  }

  // 렌더링
  render() {
    // 버튼
    const btn = document.createElement("button");
    // 버튼 텍스트
    btn.className = "btn";
    if (this.text !== null) {
      btn.innerText = this.text;
    } else {
      // 디폴트
      btn.innerText = "클릭";
    }
    btn.addEventListener("click", this.onAction);

    // 스타일 시트 경로 삽입(스타일 컴포넌트처럼 각각의 컴포넌트에만 맞는 스타일 시트를 분리하기 위함)
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.type = "text/css";
    stylesheet.href = "src/bluebutton/style.css";
    this.btnContainer.appendChild(btn);
    this.btnContainer.appendChild(stylesheet);
  }
}
