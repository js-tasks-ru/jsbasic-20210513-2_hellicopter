let friends = [
  {
    firstName: 'Artsiom',
    lastName: 'Mezin'
  },
  {
    firstName: 'Ilia',
    lastName: 'Kantor'
  },
  {
    firstName: 'Christopher',
    lastName: 'Michael'
  }
];

function makeFriendsList(friends) {
  let ul = document.createElement('ul')
  let friendsList = friends.map(value => `<li>${value.firstName} ${value.lastName}</li>`);
  ul.innerHTML = friendsList.join('');
  return ul
}