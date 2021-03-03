export default class DarkButton {
  constructor({ $target }) {
    const $outer = document.createElement("div");
    $outer.className = "darkmode";
    this.$outer = $outer;
    $target.appendChild(this.$outer);
    this.render();
  }

  render() {
    let originTheme = document.body.dataset.theme;
    if (!originTheme) {
      originTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      document.body.setAttribute("data-theme", originTheme);
    }

    const btn = document.createElement("button");
    btn.id = "darkmode-btn";
    btn.innerText = "다크모드";
    btn.addEventListener("click", () => {
      if (originTheme === "dark") {
        originTheme = "light";
        document.body.setAttribute("data-theme", "light");
      } else {
        originTheme = "dark";
        document.body.setAttribute("data-theme", "dark");
      }
    });
    this.$outer.appendChild(btn);
  }
}
