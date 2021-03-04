export default class SearchResult {
  $searchResult = null;
  $dummy = null;
  data = null;
  isRandom = true;
  error = null;
  onClick = null;
  onScroll = null;

  constructor({ $target, initialData, onClick, onScroll }) {
    this.$searchResult = document.createElement("div");
    this.$searchResult.className = "SearchResult";

    this.$searchResult.addEventListener("click", (e) => {
      this.onClick(e.target.id);
    });

    this.$dummy = document.createElement("div");
    this.$dummy.classList.add("isvisible");
    this.$dummy.id = "dummy";
    $target.appendChild(this.$searchResult);
    $target.appendChild(this.$dummy);

    this.data = initialData;
    this.onClick = onClick;
    this.onScroll = onScroll;
    this.render();
  }

  setState(nextData) {
    this.isRandom = true;
    this.data = nextData;
    this.error = null;
    this.render();
  }

  setError(errorData) {
    this.data = null;
    this.error = errorData.message;
    this.render();
  }

  setSearchData(nextData) {
    this.isRandom = false;
    this.data = nextData;
    this.error = null;
    this.render();
  }

  dummyToggle() {
    const dummy = document.querySelector("#dummy");
    dummy.classList.toggle("isvisible");
  }

  render() {
    if (this.data) {
      this.onScroll(this.isRandom);
      if (!this.isRandom && this.data.length === 0) {
        this.$searchResult.innerHTML = `<h1>검색 결과가 없습니다</h1>`;
        return;
      } else {
        if ("IntersectionObserver" in window) {
          const lazyimage = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const outer = entry.target;
                const img = outer.querySelector("img");
                const src = img.getAttribute("lazy");
                img.setAttribute("src", src);
                lazyimage.unobserve(outer);
              }
            });
          });

          const makeCat = (cat) => {
            const text = `
              <div class="item">
                <div class="img-outer">
                  <img lazy=${cat.url} alt=${cat.name} id=${cat.id} />
                </div>
                <h6 class="tooltip">${cat.name}</h6>
              </div>
            `;
            return text;
          };

          this.$searchResult.innerHTML = this.data
            .map((cat) => makeCat(cat))
            .join("");

          this.$searchResult.querySelectorAll(".item").forEach(($item) => {
            const tooltip = $item.querySelector(".tooltip");

            $item.addEventListener("mouseover", () => {
              tooltip.classList.add("fade-in");
              tooltip.classList.remove("fade-out");
            });
            $item.addEventListener("mouseout", () => {
              tooltip.classList.add("fade-out");
              tooltip.classList.remove("fade-in");
            });
            lazyimage.observe($item);
          });
        }
      }
    } else if (this.error) {
      this.$searchResult.innerHTML = `
        <h1>${this.error}</h1>
      `;
    }
  }
}
