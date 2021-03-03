// const API_ENDPOINT =
//   "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

// const errorMsg = (res) => {
//   if (res.status < 300) return false;
//   if (res.status < 400) {
//     return `리다이렉트 에러: ${res.status}`;
//   }
//   if (res.status < 500) {
//     return `클라이언트 에러: ${res.status}`;
//   }
//   if (res.status < 600) {
//     return `서버 에러: ${res.status}`;
//   }
// };

// const fetchData = async (url) => {
//   try {
//     const res = await fetch(url);
//     if (res.ok) {
//       const data = await res.json();
//       return data;
//     } else {
//       const error = errorMsg(res);
//       throw error;
//     }
//   } catch (e) {
//     throw {
//       message: e.message,
//       status: e.status,
//     };
//   }
// };

// const api = {
//   fetchCats: async (keyword) => {
//     try {
//       const res = await fetchData(
//         `${API_ENDPOINT}/api/cats/search?q=${keyword}`
//       );
//       return {
//         isError: false,
//         data: res.data,
//       };
//     } catch (e) {
//       return {
//         isError: true,
//         data: e,
//       };
//     }
//   },

//   fetchRandoms: async () => {
//     try {
//       const res = await fetchData(`${API_ENDPOINT}/api/cats/random50`);
//       return {
//         isError: false,
//         data: res.data,
//       };
//     } catch (e) {
//       return {
//         isError: true,
//         data: e,
//       };
//     }
//   },
// };
// export default api;
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
      const res = await fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
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
