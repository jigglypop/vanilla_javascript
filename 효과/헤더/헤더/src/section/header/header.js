export default class Header {
  constructor({ $target }) {
    // 헤더 컨테이너
    this.headerContainer = document.createElement("header");
    this.headerContainer.className = "header-container";
    // 내비게이션
    this.navigaton = document.createElement("nav");
    this.navigaton.className = "nav";

    this.headerContainer.appendChild(this.navigaton);
    $target.appendChild(this.headerContainer);
    this.render();
  }

  // 렌더링
  render() {
    // 헤더 내용
    // 로고
    const logo = document.createElement("p");
    logo.className = "logo";
    logo.innerText = "카카오 커머스";
    // 아이템
    const item = document.createElement("div");
    item.className = "header-item";
    // 아이템 내용
    const itemValues = ["로그인", "회원가입", "자세히"];
    for (let _value of itemValues) {
      const value = document.createElement("p");
      value.className = "item-value";
      value.innerText = `${_value}`;
      item.appendChild(value);
    }

    // 스타일 시트 경로 삽입(스타일 컴포넌트처럼 각각의 컴포넌트에만 맞는 스타일 시트를 분리하기 위함)
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.type = "text/css";
    stylesheet.href = "src/section/header/style.css";
    this.headerContainer.appendChild(stylesheet);
    // 헤더 내용 삽입
    this.navigaton.appendChild(logo);
    this.navigaton.appendChild(item);
  }
}
