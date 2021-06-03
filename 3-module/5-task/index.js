const inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';


function getMinMax(str) {
  let minMax = str.split(' ');
  minMax = minMax.map((number) => {
    if (parseFloat(number))
      return parseFloat(number);
  })
    .filter((number) => isFinite(number));


  return {
    min: minMax[0],
    max: minMax[minMax.length - 1]
  }
}
