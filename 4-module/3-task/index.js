function highlight(table) {
  table.querySelectorAll('tbody tr').forEach(function (tableRow) {
    let tableLast = tableRow.querySelector('td:last-child');
    let available = tableLast.getAttribute('data-available');
    if (available == 'true') {
      tableRow.classList.add('available');
    }
    else if (available == 'false') {
      tableRow.classList.add('unavailable');
    }
    else {
      tableRow.setAttribute('hidden', '');
    }

    let gender = tableRow.querySelector('td:nth-child(3)');
    let genderValue = gender.textContent.trim();
    if (genderValue == 'f') {
      tableRow.classList.add('female');
    }
    else if (genderValue == 'm') {
      tableRow.classList.add('male');
    }

    let age = tableRow.querySelector('td:nth-child(2)');
    let ageValue = parseInt(age.textContent);
    if (ageValue < 18) {
      tableRow.style.textDecoration = 'line-through';
    }

  })
}
