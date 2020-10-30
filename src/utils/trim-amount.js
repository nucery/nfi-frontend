export const trimAmount = (inputAsString) => {
  const dot = inputAsString.indexOf('.');
  if (dot < 0 || inputAsString.length - dot <= 2) {
    return inputAsString;
  }
  return inputAsString.substring(0, dot + 3);
};
