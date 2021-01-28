import { createStore } from "../../ngrx/store.js";
import StyleSheets from "../../util/stylesheets.js";

export default class MainSection {
  constructor({ $target, items }) {
    // 메인
    this.items = items;
    this.mainContainer = document.createElement("section");

    // 스토어
    const store = createStore();

    // 플러스 버튼
    const Plus = document.createElement("button");
    Plus.innerText = "+1";
    Plus.addEventListener("click", () => {
      store.dispatch({ type: "plus" });
    });
    this.mainContainer.appendChild(Plus);

    // 마이너스 버튼
    const Minus = document.createElement("button");
    Minus.innerText = "-1";
    Minus.addEventListener("click", () => {
      store.dispatch({ type: "minus" });
    });
    this.mainContainer.appendChild(Minus);

    $target.appendChild(this.mainContainer);
    // 렌더링 보일러플레이트
    this.renderContainer = document.createElement("div");
    this.mainContainer.appendChild(this.renderContainer);

    store.subscribe(() => {
      this.state = store.getState();
      this.render();
    });
  }

  setState(items) {
    this.items = items;
    this.render();
  }

  // 렌더링
  render() {
    console.log(this.state);
    this.renderContainer.innerHTML = "";
    const h1 = document.createElement("h1");
    h1.innerText = `${this.state.age}`;
    this.renderContainer.appendChild(h1);

    // 스타일 시트 경로 삽입
    new StyleSheets({
      $target: this.mainContainer,
      Name: "sections/main",
    });
  }
}
