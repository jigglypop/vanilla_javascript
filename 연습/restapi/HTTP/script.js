const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

// promise 형
// const getJoke = () => {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   fetch("https://icanhazdadjoke.com", config)
//     .then((res) => res.json())
//     .then((res) => (jokeEl.innerText = res.joke));
// };

// async 형
const getJoke = async () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com", config);
  const json = await res.json();
  jokeEl.innerText = json.joke;
};

getJoke();
jokeBtn.addEventListener("click", () => {
  getJoke();
});
