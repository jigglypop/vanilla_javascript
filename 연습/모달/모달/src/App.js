import BlueButton from "./bluebutton/bluebutton.js";
import Modal from "./modal/modal.js";

export default class App {
  $target = null;
  dashboard = null;
  constructor($target) {
    this.$target = $target;
    // 인스턴스
    const btn = new BlueButton({
      $target,
      text: "모달",
      onAction: () => {
        const modal = document.querySelector(".modal-container");
        modal.classList.toggle("hidden");
      },
    });

    const modal = new Modal({
      $target,
    });

    // 자식컴포넌트 달기

    this.dashboard = $target;
  }
}
