window.addEventListener("keydown", (e) => {
  const keyEl = document.getElementById("insert");
  keyEl.innerHTML = `
    <div class="key">
        ${e.key === "" ? "Space" : e.key}
        <small>이벤트.키</small>
    </div>
    <div class="key">
        ${e.keyCode}
        <small>이벤트.키코드</small>
    </div>
    <div class="key">
        ${e.code}
        <small>이벤트.코드</small>
    </div>

  `;
});
