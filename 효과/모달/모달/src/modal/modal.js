import BlueButton from "../bluebutton/bluebutton.js";

export default class Modal {
  constructor({ $target }) {
    // 모달 컨테이너
    this.modalContainer = document.createElement("div");
    this.modalContainer.className = "modal-container";
    const modal = document.createElement("div");
    modal.className = "modal";
    const bluebutton1 = new BlueButton({
      $target,
      text: "끄기",
      onAction: () => {
        console.log("헬로우");
      },
    });
    const bluebutton2 = new BlueButton({
      $target,
      text: "켜기",
      onAction: () => {
        console.log("헬로우");
      },
    });
    this.modalContainer.appendChild(modal);
    // this.modalContainer.appendChild(bluebutton1);
    // this.modalContainer.appendChild(bluebutton2);
    $target.appendChild(this.modalContainer);

    this.render();
  }

  // 렌더링
  render() {
    // 버튼

    // 스타일 시트 경로 삽입(스타일 컴포넌트처럼 각각의 컴포넌트에만 맞는 스타일 시트를 분리하기 위함)
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.type = "text/css";
    stylesheet.href = "src/modal/style.css";
    this.modalContainer.appendChild(stylesheet);
  }
}
