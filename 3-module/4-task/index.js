function showSalary(users, age) {
  return users
    .filter((user) => {
      if (user.age <= age)
        return true;
      else
        return false;
    })
    .map((user) => {
      return user.name + ", " + user.balance;
    })

    .join("\n")
}
