import Api from "./api/Api.js";
import HeaderSection from "./sections/header/index.js";
import MainSection from "./sections/main/index.js";
import { GetLocal } from "./util/localStorage.js";
import NgComponent from "./util/NgComponent.js";

export default class App extends NgComponent {
  $target = null;
  dashboard = null;
  data = null;

  constructor($target) {
    super();
    this.$target = $target;
    this.data = GetLocal("cats");

    // 메인
    const main = new MainSection({
      $target,
      data: this.data,
    });

    // 체인지 함수
    const onChange = async (e) => {
      const req = await new Api({
        api: "https://api.thecatapi.com/v1",
      });
      const result = await req.getCats(e.target.value);
      if (result.isError === true) {
        await main.setState(false);
      } else {
        await main.setState(result.data);
      }
      console.log(result.isError);
    };
    // 헤더
    new HeaderSection({
      $target,
      onChange: onChange,
    });

    this.dashboard = $target;
  }
}
