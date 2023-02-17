import users from "./users.js";

const calculateTotalBalance = users.reduce((total, item) => {
    return total + item.balance;
  }, 0);
  
  console.log(calculateTotalBalance); // 20916