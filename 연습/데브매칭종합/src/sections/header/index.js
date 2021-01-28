import NgComponent from "../../util/NgComponent.js";

export default class HeaderSection extends NgComponent {
  constructor({ $target, onChange }) {
    super();
    // 준비
    this.$target = $target;
    this.onChange = onChange;
    this.render();
  }
  // 렌더링
  render() {
    this.outer = this.init(this.$target, "src/sections/header", "nav");
    // 인풋 리스너
    const ul = document.querySelector("#header-right");
    const searchInput = this.MakeInput(
      ul,
      this.onChange,
      "고양이를 입력하세요",
      "header-input"
    );
    searchInput.focus();
    // 버튼 리스너
    const onDarkToggle = () => {
      const App = document.querySelector("#App");
      App.classList.toggle("dark-mode");
    };
    const darkBtn = document.querySelector(".dark-btn");
    darkBtn.addEventListener("click", onDarkToggle);

    // 로고 리스너
    const onLogo = () => {
      window.location.reload();
    };
    const logo = document.querySelector(".logo");
    logo.addEventListener("click", onLogo);
  }
}
