const inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';

function getMinMax(str) {
  let stringWithoutSpaces = str.split(' ').join();
  let itemsDividedByComma = stringWithoutSpaces.split(',');
  let numbersOnly = itemsDividedByComma.filter((item) => item !== '' && isFinite(item));
  let numbersInOrder = numbersOnly.map((value) => +value);
  numbersInOrder.sort(function (a, b) {
    return a - b
  });
  console.log(numbersInOrder)
  return {
    min: numbersInOrder[0],
    max: numbersInOrder[numbersInOrder.length - 1]
  }
}