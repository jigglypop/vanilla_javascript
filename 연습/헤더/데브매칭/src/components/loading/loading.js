import StyleSheets from "../stylesheets/stylesheets.js";

export default class Loading {
  constructor({ $target }) {
    // 스피너 컨테이너
    this.spinnerContainer = document.createElement("div");
    this.spinnerContainer.className = "spinner-container";
    this.spinnerContainer.classList.add("hidden");
    $target.appendChild(this.spinnerContainer);
    this.render();
  }
  // 로딩 토글
  toggleLoading() {
    const spinner = document.querySelector(".spinner-container");
    spinner.classList.toggle("hidden");
  }

  // 렌더링
  render() {
    const spinnerImage = document.createElement("img");
    spinnerImage.className = "spinner-image";
    spinnerImage.src = "src/img/loading.gif";
    this.spinnerContainer.appendChild(spinnerImage);

    // 스타일 시트 경로 삽입
    new StyleSheets({
      $target: this.spinnerContainer,
      Name: "components/loading",
    });
  }
}
