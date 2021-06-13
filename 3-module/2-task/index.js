let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  return arr
    .filter((item) => {
      if (item >= a && item <= b)
        return true;
      else
        return false;
    })
}
