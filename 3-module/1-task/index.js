let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let users = [vasya, petya, masha];

function namify(users) {
  let namesArr = [];
  for (let names of users) {
    namesArr.push(names.name);
  }
  return namesArr;
}
