
function makeDiagonalRed(table) {
  let tbody = table.querySelector('tbody');                  // tbody

  let rows = tbody.children;
  console.log(rows);// all tr

  for (let i = 0; i < rows.length; i++) {
    rows[i].children[i].style.background = 'red'
  }
}

