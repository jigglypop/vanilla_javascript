export default class Header {
  constructor({ $target }) {
    // 헤더 컨테이너
    // 내비게이션
    this.navigaton = document.createElement("nav");
    window.addEventListener("scroll", this.changeNav);

    $target.appendChild(this.navigaton);
    this.render();
  }
  // 내비게이션 없애기
  changeNav() {
    const nav = document.querySelector("nav");
    if (window.scrollY - nav.offsetHeight > 150) {
      nav.classList.add("active");
    } else {
      nav.classList.remove("active");
    }
  }

  // 렌더링
  render() {
    // 헤더 내용
    const headerContainer = document.createElement("div");
    headerContainer.className = "header-container";
    // 로고
    const logo = document.createElement("h1");
    logo.className = "logo";
    const a = document.createElement("a");
    a.href = "#";
    a.innerText = "카카오 커머스";
    logo.appendChild(a);
    // 아이템
    const ul = document.createElement("ul");
    // 아이템 내용
    const livalues = ["커머스", "서비스", "오시는길"];
    for (let livalue of livalues) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "#";
      a.innerText = `${livalue}`;
      li.appendChild(a);
      ul.appendChild(li);
    }

    // 스타일 시트 경로 삽입(스타일 컴포넌트처럼 각각의 컴포넌트에만 맞는 스타일 시트를 분리하기 위함)
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.type = "text/css";
    stylesheet.href = "src/section/header/style.css";
    this.navigaton.appendChild(stylesheet);
    // 헤더 내용 삽입
    headerContainer.appendChild(logo);
    headerContainer.appendChild(ul);
    this.navigaton.appendChild(headerContainer);
  }
}
