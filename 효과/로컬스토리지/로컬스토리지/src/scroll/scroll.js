import Loading from "../loading/loading.js";
import { debouncing } from "../util/debouncing.js";
import Api from "../api/Api.js";
import Card from "../card/card.js";

export default class Scroll {
  constructor({ $target }) {
    // 스크롤 컨테이너
    this.cardsContainer = document.createElement("section");
    this.cardsContainer.className = "cards-container";

    // 로딩
    const loading = new Loading({
      $target,
    });
    this.loading = loading;

    $target.appendChild(this.cardsContainer);
    this.scrolling();
    this.render();
  }

  // 스크롤 처리
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
  // 데이터 가져오기
  async getData(cardsContainer) {
    await this.loading.toggleLoading();
    // 자식컴포넌트 달기
    const req = await new Api({
      api: "https://api.thecatapi.com/v1",
    });
    const result = await req.Random();
    // 로컬 스토리지 저장
    // 저장된 것 불러오기
    let cats = localStorage.getItem("cats")
      ? JSON.parse(localStorage.getItem("cats"))
      : [];
    cats = cats.concat(result.data);
    localStorage.setItem("cats", JSON.stringify(cats));

    cats.map((item) => {
      new Card({
        $target: cardsContainer,
        item: item,
      });
    });
    await this.loading.toggleLoading();
  }
  // 렌더링
  render() {
    this.getData(this.cardsContainer);
    // 스타일 시트 경로 삽입(스타일 컴포넌트처럼 각각의 컴포넌트에만 맞는 스타일 시트를 분리하기 위함)
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.type = "text/css";
    stylesheet.href = "src/scroll/style.css";
    this.cardsContainer.appendChild(stylesheet);
  }
}
