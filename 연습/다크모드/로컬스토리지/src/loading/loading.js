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

    // 스타일 시트 경로 삽입(스타일 컴포넌트처럼 각각의 컴포넌트에만 맞는 스타일 시트를 분리하기 위함)
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.type = "text/css";
    stylesheet.href = "src/loading/style.css";
    this.spinnerContainer.appendChild(stylesheet);
  }
}
