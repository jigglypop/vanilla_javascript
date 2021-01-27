const GetLocal = (key) => {
  const value = localStorage.getItem(key);
  return value === null ? [] : JSON.parse(value);
};

const SetLocal = (key, value) => {
  if (value === null || value === undefined) return;
  localStorage.setItem(key, JSON.stringify(value));
};

export { GetLocal, SetLocal };
