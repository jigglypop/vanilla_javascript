const TEMPLATE = '<input type="text">';

export default class SearchInput {
  constructor({ $target, onSearch, onRandom }) {
    const $searchInput = document.createElement("section");
    this.$searchInput = $searchInput;
    this.onRandom = onRandom;
    this.onSearch = onSearch;
    $target.appendChild($searchInput);
    this.render();
  }

  render() {
    this.$searchInput.innerHTML = `
    <div class="search-wrapper">
      <span>
        <button class="random-button">고양이</button>
      </span>
      <input class="SearchInput" placeholder="고양이를 검색해보세요.|" />
    </div>`;
    const searchinput = document.querySelector(".SearchInput");
    searchinput.focus();
    this.$searchInput.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        this.onSearch(e.target.value);
      }
    });

    const randombutton = document.querySelector(".random-button");
    randombutton.addEventListener("click", () => {
      this.onRandom();
    });
  }
}
