const debouncing = () => {
  let timer;
  return {
    debounce(callback) {
      if (!timer) clearTimeout(timer);
      timer = setTimeout(() => {
        callback(...arguments);
      }, 500);
    },
  };
};

export default debouncing;
