import users from "./users.js";

const getNamesSortedByFriendsCount = users => {
    return users
    .sort (({friends: fr1}, {friends: fr2}) => {
      return fr1.length - fr2.length
    })
    .map(({name}) => name);
  };
  
  console.log(getNamesSortedByFriendsCount(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]