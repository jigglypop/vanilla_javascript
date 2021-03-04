import cache from "../utils/cache.js";

const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const errorMsg = (res) => {
  if (res.status < 300) return false;
  if (res.status < 400) {
    return `리다이렉트 에러: ${res.status}`;
  }
  if (res.status < 500) {
    return `클라이언트 에러: ${res.status}`;
  }
  if (res.status < 600) {
    return `서버 에러: ${res.status}`;
  }
};

const api = {
  fetchCats: async (keyword) => {
    try {
      const cachedata = cache.get(keyword);
      if (cachedata) {
        return {
          isError: false,
          data: cachedata,
        };
      }
      const res = await fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
      if (res.ok) {
        const data = await res.json();
        cache.set(keyword, data.data);
        return {
          isError: false,
          data: data.data,
        };
      } else {
        const error = errorMsg(res);
        throw error;
      }
    } catch (e) {
      return {
        isError: true,
        data: e,
      };
    }
  },

  fetchRandoms: async () => {
    try {
      const res = await fetch(`${API_ENDPOINT}/api/cats/random50`);
      if (res.ok) {
        const data = await res.json();
        return {
          isError: false,
          data: data.data,
        };
      } else {
        const error = errorMsg(res);
        throw error;
      }
    } catch (e) {
      return {
        isError: true,
        data: {
          message: e.message,
          status: e.status,
        },
      };
    }
  },

  fetchCatById: async (id) => {
    try {
      const res = await fetch(`${API_ENDPOINT}/api/cats/${id}`);
      if (res.ok) {
        const data = await res.json();
        return {
          isError: false,
          data: data.data,
        };
      } else {
        const error = errorMsg(res);
        throw error;
      }
    } catch (e) {
      return {
        isError: true,
        data: {
          message: e.message,
          status: e.status,
        },
      };
    }
  },
};
export default api;
