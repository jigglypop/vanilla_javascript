export default class Loading {
  constructor({ $target }) {
    // 스피너 컨테이너
    this.spinnerWrapper = document.createElement("div");
    this.spinnerWrapper.className = "spinner-wrapper";
    this.spinnerWrapper.classList.add("hidden");
    $target.appendChild(this.spinnerWrapper);
    this.render();
  }

  toggleLoading() {
    console.log("토글 로딩");
    const spinner = document.querySelector(".spinner-wrapper");
    spinner.classList.toggle("hidden");
  }

  // 렌더링
  render() {
    const spinnerImage = document.createElement("img");
    spinnerImage.className = "spinner-image";
    spinnerImage.src = "src/img/loading.gif";
    this.spinnerWrapper.appendChild(spinnerImage);

    // 스타일 시트 경로 삽입(스타일 컴포넌트처럼 각각의 컴포넌트에만 맞는 스타일 시트를 분리하기 위함)
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.type = "text/css";
    stylesheet.href = "src/loading/style.css";
    this.spinnerWrapper.appendChild(stylesheet);
  }
}
