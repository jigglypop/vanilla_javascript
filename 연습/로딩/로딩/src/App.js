import Api from "./api/Api.js";
import Card from "./card/card.js";
import Loading from "./loading/loading.js";
import { debouncing } from "./util/debouncing.js";

export default class App {
  $target = null;
  dashboard = null;
  data = null;

  constructor($target) {
    this.$target = $target;
    const h1 = document.createElement("h1");
    h1.className = "h1";
    h1.innerText = "실행중";
    // 로딩
    const loading = new Loading({
      $target,
    });
    this.loading = loading;

    // 데이터
    this.$target.appendChild(h1);
    this.cardsContainer = document.createElement("section");
    this.cardsContainer.className = "cards-container";
    this.scrolling();
    this.render();
    this.dashboard = $target;
  }

  scrolling() {
    const debounceFunc = debouncing().debounce(async () => {
      const {
        scrollTop,
        scrollHeight,
        clientHeight,
      } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 300) {
        this.getData(this.cardsContainer);
      }
    }, 300);

    window.addEventListener(
      "scroll",
      () => {
        debounceFunc();
      },
      false
    );
  }

  async getData(cardsContainer) {
    this.loading.toggleLoading();
    // 자식컴포넌트 달기
    const req = new Api({
      api: "https://api.thecatapi.com/v1",
    });
    const result = await req.Random();
    result.data.map((item) => {
      new Card({
        $target: cardsContainer,
        item: item,
      });
    });
    this.loading.toggleLoading();
  }

  render() {
    this.getData(this.cardsContainer);
    this.$target.appendChild(this.cardsContainer);
  }
}
