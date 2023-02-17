import users from "./users.js";

function getUsersWithAge(users, min, max) {
  return users.filter((elem) => {
    return elem.age >= min && elem.age <= max;
  })
};

console.log(getUsersWithAge(users, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
  // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]