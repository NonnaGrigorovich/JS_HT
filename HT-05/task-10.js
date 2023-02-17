import users from "./users.js";

const getSortedUniqueSkills = (users) => {
    return users
        .reduce((acc, { skills }) => {
            return [...acc, ...skills];
        }, [])
        .filter((skill, idx, arr) => {
            return idx === arr.indexOf(skill);
        })
        .sort();
};
  
  console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]