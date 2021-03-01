import SearchInput from "./components/SearchInput.js";
import SearchResult from "./components/SearchResult.js";
import ImageInfo from "./components/ImageInfo.js";
import Spinner from "./components/Spinner.js";
import Tags from "./components/Tags.js";
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
        this.spinner.toggle();
        this.tags.setTags(keyword);
        const res = await api.fetchCats(keyword);
        if (!res.isError) {
          this.setState(res.data);
        } else {
          this.setError(res.data);
        }
        this.spinner.toggle();
      },
    });
    // 태그
    this.tags = new Tags({
      $target,
    });
    // 결과리스트
    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: (image) => {
        this.imageInfo.setState({
          visible: true,
          image,
        });
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
    this.searchResult.setState(nextData);
  }

  setError(errorData) {
    this.searchResult.setError(errorData);
  }
}
