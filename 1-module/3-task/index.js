function ucFirst(str) {
  if (!str) {
    return "";
  }
  else {
    let firstChar = str[0].toUpperCase;
    return firstChar + str.slice(1);
  }
}
