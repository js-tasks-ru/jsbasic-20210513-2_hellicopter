function truncate(str, maxlength) {
  if (str.length <= maxLength) {
    return str;
  }
  else {
    return str.slice(0, maxlength - 3) + '...';
  }
}

