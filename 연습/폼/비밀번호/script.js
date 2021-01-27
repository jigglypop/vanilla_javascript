const codes = document.querySelectorAll(".code");
codes[0].focus();
codes.forEach((code, i) => {
  code.addEventListener("keydown", (e) => {
    if (0 <= e.key && e.key <= 9) {
      codes[i].value = "";
      setTimeout(() => codes[i + 1].focus(), 10);
    } else if (e.key === "Backspace") {
      setTimeout(() => codes[i - 1].focus(), 10);
    }
  });
});
