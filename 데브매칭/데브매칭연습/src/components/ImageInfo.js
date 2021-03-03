import api from "../api/api.js";
import spinnerToggle from "../utils/spinnerToggle.js";

export default class ImageInfo {
  $imageInfo = null;
  data = null;
  catdata = null;
  caterror = null;

  constructor({ $target, data }) {
    const $imageInfo = document.createElement("div");
    $imageInfo.className = "ImageInfo";
    $imageInfo.id = "image-info";
    this.$imageInfo = $imageInfo;
    $target.appendChild($imageInfo);
    this.data = data;
    this.render();
  }

  async onCatById(id) {
    const res = await api.fetchCatById(id);
    if (!res.isError) {
      this.catdata = res.data;
    } else {
      this.caterror = res.data;
    }
  }

  async setState(nextData) {
    spinnerToggle();
    this.data = nextData;
    await this.onCatById(this.data.image.id);
    spinnerToggle();
    this.render();
  }

  onClose() {
    this.data.visible = false;
    this.fadeOut();
    this.render();
  }

  fadeIn() {
    this.$imageInfo.classList.add("fade-in");
    this.$imageInfo.classList.remove("fade-out");
  }

  fadeOut() {
    this.$imageInfo.classList.add("fade-out");
    this.$imageInfo.classList.remove("fade-in");
  }

  render() {
    if (this.data.visible) {
      this.fadeIn();
      const { name, url } = this.data.image;
      this.$imageInfo.innerHTML = `
        <div class="content-wrapper">
          <div class="title">
            <span>${name}</span>
            <div class="close">x</div>
          </div>
          <img src="${url}" alt="${name}"/>        
          <div class="description">
            <div>성격: ${this.catdata.temperament}</div>
            <div>태생: ${this.catdata.origin}</div>
          </div>
        </div>`;

      this.$imageInfo.addEventListener("click", (e) => {
        if (e.target.id === "image-info" || e.target.className === "close") {
          this.onClose();
        }
      });
      window.addEventListener("keyup", (e) => {
        if (this.data.visible && e.key === "Escape") {
          this.onClose();
        }
      });
    } else {
      this.fadeOut();
    }
  }
}
