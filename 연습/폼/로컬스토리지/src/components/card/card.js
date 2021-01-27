import StyleSheets from "../stylesheets/stylesheets.js";

export default class Card {
  constructor({ $target, item }) {
    // 카드 컨테이너
    this.cardContainer = document.createElement("article");
    this.cardContainer.className = "card-container";
    this.item = item;
    $target.appendChild(this.cardContainer);
    this.render();
  }

  // 렌더링
  render() {
    for (let key of Object.keys(this.item)) {
      const value = this.item[key];
      if (key === "url") {
        const cardImage = document.createElement("img");
        cardImage.className = `card-image`;
        cardImage.src = value;
        this.cardContainer.appendChild(cardImage);
      } else if (key === "breeds" || key === "id" || key === "categories") {
        continue;
      } else {
        const itemDiv = document.createElement("div");
        itemDiv.className = `${key}`;
        itemDiv.innerText = value;
        this.cardContainer.appendChild(itemDiv);
      }
    }
    // 스타일 시트 경로 삽입
    new StyleSheets({
      $target: this.cardContainer,
      Name: "components/card",
    });
  }
}
