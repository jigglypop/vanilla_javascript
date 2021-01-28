import Api from "../../api/Api.js";
import { debouncing } from "../../util/debouncing.js";
import NgComponent from "../../util/NgComponent.js";
import Spinner from "../spinner/index.js";
import { SetLocal } from "../../util/localStorage.js";
import Card from "../card/index.js";
import { observer } from "../../util/observer.js";

export default class Scroll extends NgComponent {
  constructor({ $target, data }) {
    super();
    this.data = data;
    this.$target = $target;
    this.outer = this.init(this.$target, "src/components/scroll", "div");
    // 로딩
    const spinner = new Spinner({
      $target: this.$target,
    });
    this.spinner = spinner;
    // 아이템이 비었을 때
    if (this.data.length === 0) {
      this.getData();
    } else {
      this.render();
    }
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
    await this.spinner.toggleLoading();
    // 자식컴포넌트 달기
    const req = await new Api({
      api: "https://api.thecatapi.com/v1",
    });
    const result = await req.Random();
    // 로컬 스토리지 저장
    this.data = await this.data.concat(result.data);
    await SetLocal("cats", this.data);
    // 데이터 세팅
    this.render();
    await this.spinner.toggleLoading();
  }
  // 렌더링
  render() {
    this.clear(this.outer, "src/components/scroll");
    // 시작
    this.data.map((item) => {
      new Card({
        $target: this.outer,
        item: item,
      });
    });
    const cards = document.querySelectorAll(".card-container");
    console.log(cards.length);
    cards.forEach((entry) => observer.observe(entry));
  }
}
