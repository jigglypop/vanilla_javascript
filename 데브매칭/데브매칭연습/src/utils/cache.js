const cache = {
  get(key) {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
  },
  set(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  },
};

export default cache;
