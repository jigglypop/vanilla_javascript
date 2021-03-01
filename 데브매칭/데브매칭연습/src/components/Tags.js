export default class Tags {
  tags = [];

  constructor({ $target }) {
    const $outer = document.createElement("div");
    $outer.className = "tags";
    this.$outer = $outer;
    $target.appendChild(this.$outer);
    this.render();
  }

  setTags(tags) {
    this.tags.push(tags);
    this.render();
  }

  render() {
    this.$outer.innerHTML = this.tags
      .map(
        (tag) => `
        <div class="tag-item">
          <h4>${tag}</h4>
        </div>
      `
      )
      .join("");
  }
}
