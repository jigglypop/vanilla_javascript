export const debouncing = () => {
  let timer;
  return {
    debounce(callback) {
      return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          callback(...arguments);
        }, 200);
      };
    },
  };
};
