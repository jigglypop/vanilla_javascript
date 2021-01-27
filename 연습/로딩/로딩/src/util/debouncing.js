const debouncing = () => {
  let debounceCheck;
  return {
    debounce(callback, milliseconds) {
      return () => {
        clearTimeout(debounceCheck);
        debounceCheck = setTimeout(() => {
          callback(...arguments);
        }, milliseconds);
      };
    },
  };
};
export { debouncing };
