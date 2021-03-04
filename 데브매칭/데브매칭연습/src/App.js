import SearchInput from "./components/SearchInput.js";
import SearchResult from "./components/SearchResult.js";
import ImageInfo from "./components/ImageInfo.js";
import Spinner from "./components/Spinner.js";
import Tags from "./components/Tags.js";
import DarkButton from "./components/DarkButton.js";
import Banner from "./components/Banner.js";
import throttling from "./utils/throttle.js";
import spinnerToggle from "./utils/spinnerToggle.js";

import api from "./api/api.js";

export default class App {
  $target = null;
  data = [];
  tags = [];

  constructor($target) {
    this.$target = $target;
    // 스피너
    this.spinner = new Spinner({
      $target,
    });

    // 검색
    this.searchInput = new SearchInput({
      $target,
      onSearch: async (keyword) => {
        spinnerToggle();
        this.tags.setTags(keyword);
        const res = await api.fetchCats(keyword);
        if (!res.isError) {
          this.setSearchData(res.data);
        } else {
          this.setError(res.data);
        }
        spinnerToggle();
      },

      onRandom: async () => {
        spinnerToggle();
        const res = await api.fetchRandoms();
        if (!res.isError) {
          this.setState(res.data);
        } else {
          this.setError(res.data);
        }
        spinnerToggle();
      },
    });
    // 다크모드
    this.darkbutton = new DarkButton({
      $target,
    });
    // 태그
    this.tags = new Tags({
      $target,
      onClickTag: async (keyword) => {
        spinnerToggle();
        const res = await api.fetchCats(keyword);
        if (!res.isError) {
          this.setSearchData(res.data);
        } else {
          this.setError(res.data);
        }
        spinnerToggle();
      },
    });
    // 배너
    this.banner = new Banner({
      $target,
      onRandom: async () => {
        spinnerToggle();
        const res = await api.fetchRandoms();
        if (!res.isError) {
          this.setState(res.data);
        } else {
          this.setError(res.data);
        }
        spinnerToggle();
      },
    });
    // 결과리스트
    const throttle = throttling();
    const scroll = () => {
      const {
        scrollTop,
        scrollHeight,
        clientHeight,
      } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 500) {
        throttle.throttle(async () => {
          spinnerToggle();
          this.setDummy();
          const res = await api.fetchRandoms();
          if (!res.isError) {
            this.setScroll(res.data);
          } else {
            this.setError(res.data);
          }
          this.setDummy();
          spinnerToggle();
        });
      }
    };

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: (data) => {
        this.imageInfo.setState({
          visible: true,
          data,
        });
      },
      onScroll: async (isRandom) => {
        if (isRandom) {
          window.addEventListener("scroll", scroll);
        } else {
          window.removeEventListener("scroll", scroll);
        }
      },
    });
    // 모달
    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null,
      },
    });
  }

  setState(nextData) {
    this.data = nextData;
    this.banner.setState(nextData);
    this.searchResult.setState(nextData);
  }

  setSearchData(data) {
    this.banner.setState(data);
    this.searchResult.setSearchData(data);
  }

  setScroll(data) {
    this.data.push(...data);
    this.banner.setState(this.data);
    this.searchResult.setState(this.data);
  }

  setDummy() {
    this.searchResult.dummyToggle();
  }

  setError(errorData) {
    this.searchResult.setError(errorData);
  }
}
