export default class Tags {
  tags = [];
  onClickTag = null;

  constructor({ $target, onClickTag }) {
    const $outer = document.createElement("div");
    $outer.className = "tags";
    this.$outer = $outer;
    this.onClickTag = onClickTag;
    $target.appendChild(this.$outer);
    this.render();
  }

  setTags(tag) {
    if (this.tags.indexOf(tag) === -1) {
      if (this.tags.length >= 5) {
        this.tags.shift();
      }
      this.tags.push(tag);
    }
    this.render();
  }

  render() {
    this.$outer.innerHTML = "";
    this.tags.forEach((keyword) => {
      const tag = document.createElement("div");
      tag.className = "tag-item";
      tag.innerHTML = `<h4>${keyword}</h4>`;
      tag.addEventListener("click", () => {
        this.onClickTag(keyword);
      });
      this.$outer.appendChild(tag);
    });
  }
}
