import { createStore } from "../../redux/redux.js";
import StyleSheets from "../../util/stylesheets.js";

export default class MainSection {
  constructor({ $target, items }) {
    // 메인
    this.items = items;
    this.mainContainer = document.createElement("section");

    // 스토어
    const store = createStore();

    // 버튼
    const btn = document.createElement("button");
    btn.innerText = "+1";
    btn.addEventListener("click", () => {
      store.dispatch({ type: "next" });
    });

    this.mainContainer.appendChild(btn);
    $target.appendChild(this.mainContainer);

    // 렌더링 보일러플레이트
    this.renderContainer = document.createElement("div");
    this.mainContainer.appendChild(this.renderContainer);
    const rendering = () => {
      this.state = store.getState();
      this.render();
    };

    rendering();
    store.subscribe(() => {
      rendering();
    });
  }

  setState(items) {
    this.items = items;
    this.render();
  }

  // 렌더링
  render() {
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
