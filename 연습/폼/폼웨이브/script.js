const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map((x, i) => `<span style="transition-delay:${i * 50}ms">${x}</span>`)
    .join("");
});
