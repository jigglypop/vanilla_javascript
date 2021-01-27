export default class Image {
  constructor({ $target }) {
    // 섹션 컨테이너
    this.imageContainer = document.createElement("div");
    this.imageContainer.className = "image-container";

    $target.appendChild(this.imageContainer);
    this.render();
  }

  // 렌더링
  render() {
    // 섹션 내용
    const container = document.createElement("div");
    container.className = "container";

    const itemh1 = document.createElement("h1");
    itemh1.innerText = "저의 웹사이트에 오신 것을 환영합니다.";

    const itemp = document.createElement("p");
    itemp.innerText =
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem voluptates eveniet tempora ut cupiditate magnam, sapiente, hic quo in ipsum iste soluta eaque perferendis nihil recusandae dolore officia aperiam corporis similique. Facilis quos tempore labore totam! Consectetur molestiae iusto ducimus error reiciendis aspernatur dolor, modi dolorem sit architecto, voluptate magni sunt unde est quas? Voluptates a dolorum voluptatum quo perferendis aut sit. Aspernatur libero laboriosam ab eligendi omnis delectus earum labore, placeat officiis sint illum rem voluptas ipsum repellendus iste eius recusandae quae excepturi facere, iure rerum sequi? Illum velit delectus dicta et iste dolorum obcaecati minus odio eligendi!";

    container.appendChild(itemh1);
    container.appendChild(itemp);

    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.type = "text/css";
    stylesheet.href = "src/section/image/style.css";
    this.imageContainer.appendChild(stylesheet);

    // 연결
    this.imageContainer.appendChild(stylesheet);
    this.imageContainer.appendChild(container);
  }
}
