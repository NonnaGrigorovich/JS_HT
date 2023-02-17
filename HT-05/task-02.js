import users from "./users.js";


function getUsersWithEyeColor(users, color) {
  return users.filter(({eyeColor}) => eyeColor === color);
};

console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]