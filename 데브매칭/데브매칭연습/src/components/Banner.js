export default class Banner {
  data = [];
  onRandom = null;

  constructor({ $target, onRandom }) {
    const $outer = document.createElement("div");
    $outer.className = "carousel";
    this.$outer = $outer;
    this.onRandom = onRandom;
    $target.appendChild(this.$outer);
    this.onRandom();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    const imgsContainer = document.createElement("div");
    imgsContainer.className = "imgs-container";
    imgsContainer.innerHTML = this.data
      .map(
        (img) => `
          <div class="banner-outer">
            <img src="${img.url}" class="banner-img"/>
          </div>
        `
      )
      .join("");

    // 넘기기
    const imgs = imgsContainer.getElementsByTagName("img");
    let idx = 0;
    const changeImg = () => {
      if (idx > imgs.length - 5) {
        idx = 0;
      } else if (idx < 0) {
        idx = imgs.length - 5;
      }
      imgsContainer.style.transform = `translateX(${-idx * 100}px)`;
    };

    const leftBtn = document.createElement("button");
    leftBtn.className = "left-btn";
    leftBtn.innerText = "이전";
    leftBtn.addEventListener("click", () => {
      idx--;
      changeImg();
    });

    const rightBtn = document.createElement("button");
    rightBtn.className = "right-btn";
    rightBtn.innerText = "다음";
    rightBtn.addEventListener("click", () => {
      idx++;
      changeImg();
    });
    this.$outer.appendChild(imgsContainer);
    this.$outer.appendChild(leftBtn);
    this.$outer.appendChild(rightBtn);
  }
}
