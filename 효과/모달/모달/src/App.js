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
      text: "반갑습니다 버튼",
      onAction: () => {
        console.log("헬로우");
      },
    });

    const modal = new Modal({
      $target,
    });

    // 자식컴포넌트 달기

    this.dashboard = $target;
  }
}
