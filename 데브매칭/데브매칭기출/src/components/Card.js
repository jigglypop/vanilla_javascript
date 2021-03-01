export default class Card {
  constructor({ $target, data }) {
    this.data = data;
    this.card = document.createElement("article");
    this.card.className = "cat-card";
    this.card.dataset.id = data.id;
    $target.appendChild(this.card);
    this.render();
  }

  render() {
    const url = this.data.url;
    const { name, origin } =
      this.data.breeds.length > 0
        ? this.data.breeds[0]
        : { name: "정보없음", origin: "정보없음" };

    this.card.innerHTML = `
    <img class="card-image lazy" data-src=${url} src=${url} />
    <article class="card-info">
      <p class="cat-name">${name}</p>
      <p class="cat-origin">${origin}</p>
    </article>`;
  }
}
