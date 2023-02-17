import users from "./users.js";


  function getUsersWithGender(users, lookFor) {
    return users
    .filter(({gender}) => gender === lookFor)
    .map(({name}) => name);
  };
  
  console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]