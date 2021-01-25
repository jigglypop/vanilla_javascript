const nav = document.querySelector(".nav");
const fixNav = () => {
  // scrollHeight : 스크롤바 높이를 뺀 내용 전체의 높이
  // clientHeight : 스크롤바 높이를 뺀 가시적인 높이
  // offsetHeight : 스크롤바 높이를 포함한 가시적인 높이
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
};
window.addEventListener("scroll", fixNav);
