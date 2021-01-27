export default class Api {
  constructor({ api }) {
    this.api = api;
  }
  // 요청
  async request(url) {
    try {
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        return data;
      } else {
        const err = await res.json();
        throw err;
      }
    } catch (e) {
      throw {
        message: e.message,
        status: e.status,
      };
    }
  }

  // 랜덤
  async Random() {
    try {
      const result = await this.request(`${this.api}/images/search?limit=20`);
      return {
        isError: false,
        data: result,
      };
    } catch (e) {
      return {
        isError: true,
        data: e,
      };
    }
  }
}
