import BlueButton from "../bluebutton/bluebutton.js";

export default class Modal {
  constructor({ $target }) {
    // 모달 컨테이너
    this.modalContainer = document.createElement("div");
    this.modalContainer.className = "modal-container";

    $target.appendChild(this.modalContainer);
    this.render();
  }

  // 렌더링
  render() {
    // 오버레이
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    // 컨텐츠
    const modalContents = document.createElement("div");
    modalContents.className = "modal-contents";

    // 버튼
    const cancel = new BlueButton({
      $target: modalContents,
      text: "취소",
      onAction: () => {
        const modal = document.querySelector(".modal-container");
        modal.classList.toggle("hidden");
      },
    });
    this.modalContainer.appendChild(overlay);
    this.modalContainer.appendChild(modalContents);

    // 스타일 시트 경로 삽입(스타일 컴포넌트처럼 각각의 컴포넌트에만 맞는 스타일 시트를 분리하기 위함)
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.type = "text/css";
    stylesheet.href = "src/modal/style.css";
    this.modalContainer.appendChild(stylesheet);
  }
}
