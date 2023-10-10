export const printLanguages = (obj: Object) => {
  let values = Object.values(obj);
  let result = "";
  for (let i = 0; i < values.length; i++) {
    result += values[i];
    if (i !== values.length - 1) {
      result += ", ";
    }
  }
  return result;
};
