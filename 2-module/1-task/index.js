function sumSalary(salaries) {
  let numbersInCicle = 0;
  for (let numbers in salaries) {
    if (isFinite(salaries[numbers])) { numbersInCicle = numbersInCicle + salaries[numbers] }
  }
  return numbersInCicle;
}
