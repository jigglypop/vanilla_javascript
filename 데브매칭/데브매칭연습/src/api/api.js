const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const statusError = {
  300: "리다이렉트 에러",
  400: "클라이언트 에러",
  500: "서버 에러",
};

const getErrMsg = (res) => {
  const status = Math.floor(res.status / 100) * 100;
  return {
    message: statusError[status],
    status: res.status,
  };
};

const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      const error = getErrMsg(res);
      throw error;
    }
  } catch (e) {
    throw {
      message: e.message,
      status: e.status,
    };
  }
};

const api = {
  fetchCats: async (keyword) => {
    try {
      const res = await fetchData(
        `${API_ENDPOINT}/api/cats/search?q=${keyword}`
      );
      return {
        isError: false,
        data: res.data,
      };
    } catch (e) {
      return {
        isError: true,
        data: e,
      };
    }
  },
};
export default api;
