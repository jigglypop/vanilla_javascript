import { debouncing } from "./debouncing.js";
import Api from "../api/Api.js";
import Loading from "../components/loading/loading.js";
import Card from "../components/card/card.js";
import { GetLocal, SetLocal } from "./localStorage.js";
import { observer } from "./observer.js";

export default class Scroll {
  constructor({ $target, items }) {
    // 아이템
    this.items = items;
    // 스크롤 컨테이너
    this.cardsContainer = document.createElement("section");
    this.cardsContainer.className = "cards-container";
    // 로딩
    const loading = new Loading({
      $target,
    });
    this.loading = loading;

    $target.appendChild(this.cardsContainer);
    // 아이템이 비었을 때
    if (this.items.length === 0) {
      this.getData();
    } else {
      // 로컬스토리지에서
      this.render();
    }
    // 스크롤 효과
    this.scrolling();
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
    });

    window.addEventListener(
      "scroll",
      () => {
        debounceFunc();
      },
      false
    );
  }
  // 데이터 가져오기 + 렌더링
  async getData() {
    await this.loading.toggleLoading();
    // 자식컴포넌트 달기
    const req = await new Api({
      api: "https://api.thecatapi.com/v1",
    });
    const result = await req.Random();
    // 로컬 스토리지 저장
    let cats = GetLocal("cats");
    cats = cats.concat(result.data);
    SetLocal("cats", cats);
    // 데이터 세팅
    this.items = cats;
    this.render();
    await this.loading.toggleLoading();
  }

  // 렌더링
  render() {
    this.items.map((item) => {
      new Card({
        $target: this.cardsContainer,
        item: item,
      });
    });

    const cards = document.querySelectorAll(".card-container");
    cards.forEach((entry) => observer.observe(entry));
  }
}
