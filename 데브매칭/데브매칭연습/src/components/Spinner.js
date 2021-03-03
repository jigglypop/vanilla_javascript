export default class Spinner {
  $spinner = null;

  constructor({ $target }) {
    this.$spinner = document.createElement("div");
    this.$spinner.className = "spinner-wrapper";
    $target.appendChild(this.$spinner);
    this.render();
  }
  render() {
    this.$spinner.classList.add("isvisible");
    this.$spinner.innerHTML = `
      <span>
        <h1>잠시만 기다려주세요</h1>
      </span>`;
  }
}
