import Api from "./api/Api.js";
import Card from "./card/card.js";

export default class App {
  $target = null;
  dashboard = null;
  data = [];
  constructor($target) {
    this.$target = $target;
    const h1 = document.createElement("h1");
    h1.className = "h1";
    h1.innerText = "실행중";
    this.$target.appendChild(h1);
    this.render();
    this.dashboard = $target;
  }

  async render() {
    // 자식컴포넌트 달기
    const req = new Api({
      api: "https://api.thecatapi.com/v1",
    });
    const getData = async () => {
      const result = await req.Random();
      await this.data.push(...result.data);
    };
    await getData();
    await getData();
    const cardsContainer = document.createElement("div");
    cardsContainer.className = "cards-container";
    console.log(this.data);
    this.data.map(
      (item) =>
        new Card({
          $target: cardsContainer,
          item: item,
        })
    );
    this.$target.appendChild(cardsContainer);
  }
}
