export default class StyleSheets {
  constructor({ $target, Name }) {
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.type = "text/css";
    stylesheet.href = `src/${Name}/style.css`;
    $target.appendChild(stylesheet);
  }
}
