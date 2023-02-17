import users from "./users.js";

function getUsersWithFriend (users, friendName)  {
    return users.filter(({friends}) => {
      return friends.includes(friendName)
    } );
  };
  
  console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
  console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]