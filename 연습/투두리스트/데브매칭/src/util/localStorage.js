const GetLocal = (key) => {
  const value = localStorage.getItem(key);
  if (key === "data") return value === null ? null : JSON.parse(value);
  else return value === null ? [] : JSON.parse(value);
};

const SetLocal = (key, value) => {
  if (value === null || value === undefined) return;
  localStorage.setItem(key, JSON.stringify(value));
};

export { GetLocal, SetLocal };
