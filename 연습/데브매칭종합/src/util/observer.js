export const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("lazy");
      } else {
        entry.target.classList.add("lazy");
      }
    });
  },
  {
    root: null,
    threshold: 0,
  }
);
