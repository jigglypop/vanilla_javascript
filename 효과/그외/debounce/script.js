const debouncing = () => {
  // 디바운스를 체크하기 위한 변수를 만들어줍니다.
  let debounceCheck;
  return {
    debounce(callback, milliseconds) {
      return function () {
        // clearTimeout을 이용하여 이벤트 발생을 무시해주고,
        // 마지막 호출 이후, 일정 시간이 지난 후에 단 한 번만, 이벤트가 호출되도록 하였습니다.
        clearTimeout(debounceCheck);
        debounceCheck = setTimeout(() => {
          callback(...arguments);
        }, milliseconds);
      };
    },
  };
};
(function () {
  const debounceScroll = document.querySelector(".debounce-scroll");
  let debounceCount = 0;

  const debounceFunc = debouncing().debounce(() => {
    debounceCount += 1;
    debounceScroll.innerHTML = `debounceScroll: ${debounceCount}`;
  }, 300);

  window.addEventListener(
    "scroll",
    () => {
      debounceFunc();
    },
    false
  );
})();
