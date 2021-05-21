function checkSpam(str) {
  str = str.toLowercase();
  if (str.includes('1xbet') || str.includes('xxx')) {
    return true;
  }
  else {
    return false;
  }
}
