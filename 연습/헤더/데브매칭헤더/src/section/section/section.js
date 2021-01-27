export default class Section {
  constructor({ $target }) {
    // 섹션 컨테이너
    this.sectionContainer = document.createElement("section");
    this.sectionContainer.className = "section-container content";
    $target.appendChild(this.sectionContainer);
    this.render();
  }

  // 렌더링
  render() {
    // 섹션 내용
    const item = document.createElement("h2");
    item.innerText = "컨텐츠1";
    const item1 = document.createElement("p");
    item1.innerText =
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem voluptates eveniet tempora ut cupiditate magnam, sapiente, hic quo in ipsum iste soluta eaque perferendis nihil recusandae dolore officia aperiam corporis similique. Facilis quos tempore labore totam! Consectetur molestiae iusto ducimus error reiciendis aspernatur dolor, modi dolorem sit architecto, voluptate magni sunt unde est quas? Voluptates a dolorum voluptatum quo perferendis aut sit. Aspernatur libero laboriosam ab eligendi omnis delectus earum labore, placeat officiis sint illum rem voluptas ipsum repellendus iste eius recusandae quae excepturi facere, iure rerum sequi? Illum velit delectus dicta et iste dolorum obcaecati minus odio eligendi!";
    const item2 = document.createElement("h2");
    item2.innerText = "컨텐츠2";
    const item3 = document.createElement("p");
    item3.innerText =
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem voluptates eveniet tempora ut cupiditate magnam, sapiente, hic quo in ipsum iste soluta eaque perferendis nihil recusandae dolore officia aperiam corporis similique. Facilis quos tempore labore totam! Consectetur molestiae iusto ducimus error reiciendis aspernatur dolor, modi dolorem sit architecto, voluptate magni sunt unde est quas? Voluptates a dolorum voluptatum quo perferendis aut sit. Aspernatur libero laboriosam ab eligendi omnis delectus earum labore, placeat officiis sint illum rem voluptas ipsum repellendus iste eius recusandae quae excepturi facere, iure rerum sequi? Illum velit delectus dicta et iste dolorum obcaecati minus odio eligendi!";

    // 스타일 시트 경로 삽입(스타일 컴포넌트처럼 각각의 컴포넌트에만 맞는 스타일 시트를 분리하기 위함)
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.type = "text/css";
    stylesheet.href = "src/section/section/style.css";
    this.sectionContainer.appendChild(stylesheet);

    // 연결
    this.sectionContainer.appendChild(item);
    this.sectionContainer.appendChild(item1);
    this.sectionContainer.appendChild(item2);
    this.sectionContainer.appendChild(item3);
  }
}
