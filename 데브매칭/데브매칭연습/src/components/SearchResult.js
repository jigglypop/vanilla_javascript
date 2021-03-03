export default class SearchResult {
  $searchResult = null;
  $dummy = null;
  data = null;
  searchData = null;
  error = null;
  onClick = null;
  onScroll = null;

  constructor({ $target, initialData, onClick, onScroll }) {
    this.$searchResult = document.createElement("div");
    this.$searchResult.className = "SearchResult";

    this.$dummy = document.createElement("div");
    this.$dummy.classList.add("isvisible");
    this.$dummy.id = "dummy";
    $target.appendChild(this.$searchResult);
    $target.appendChild(this.$dummy);

    this.data = initialData;
    this.onClick = onClick;
    this.onScroll = onScroll;
    this.onScroll();
    this.render();
  }

  setState(nextData) {
    this.searchData = null;
    this.data = nextData;
    this.error = null;
    this.render();
  }

  setError(errorData) {
    this.data = null;
    this.error = errorData.message;
    this.render();
  }

  setSearchData(data) {
    this.data = null;
    this.searchData = data;
    this.error = null;
    this.render();
  }

  dummyToggle() {
    const dummy = document.querySelector("#dummy");
    dummy.classList.toggle("isvisible");
  }

  render() {
    if (this.data) {
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

        // const makeCat = (cat) => {
        //   const text = `
        //     <div class="item">
        //       <div class="img-outer">
        //         <img lazy=${cat.url} alt=${cat.name} />
        //       </div>
        //       <h6 class="tooltip">${cat.name}</h6>
        //     </div>
        //   `;
        //   return text;
        // };

        // this.$searchResult.innerHTML = this.data
        //   .map((cat) => makeCat(cat))
        //   .join("");
        const makeCat = (cat, index) => {
          const item = document.createElement("div");
          item.innerHTML = `
              <div class="img-outer">
                <img lazy=${cat.url} alt=${cat.name} />
              </div>
              <h6 class="tooltip">${cat.name}</h6>
          `;
          const tooltip = item.querySelector(".tooltip");
          item.addEventListener("mouseover", () => {
            tooltip.classList.add("fade-in");
            tooltip.classList.remove("fade-out");
          });
          item.addEventListener("mouseout", () => {
            tooltip.classList.add("fade-out");
            tooltip.classList.remove("fade-in");
          });
          item.addEventListener("click", () => {
            this.onClick(this.data[index]);
          });
          lazyimage.observe(item);
          this.$searchResult.appendChild(item);
        };
        this.data.forEach((cat, index) => makeCat(cat, index));

        // this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
        //   $item.addEventListener("click", () => {
        //     this.onClick(this.data[index]);
        //   });
        //   lazyimage.observe($item);
        // });
      }
    } else if (this.error) {
      this.$searchResult.innerHTML = `
        <h1>${this.error}</h1>
      `;
    }
  }
}
