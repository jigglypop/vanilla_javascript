const throttling = () => {
  let timer;
  return {
    throttle(callback) {
      if (!timer) {
        timer = setTimeout(() => {
          callback(...arguments);
          timer = false;
        }, 500);
      }
    },
  };
};

export default throttling;
