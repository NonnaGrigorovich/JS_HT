let input = prompt("Enter number");
const numbers = [];
let total = 0;

for( input; typeof input == 'string'; input){
    if (!isNaN(Number(input)) &&
    input.trim().length !== 0)   {
       numbers.push(Number(input))
       total += Number(input)
    }  else{
        alert('The wrong number was entered, pleas try again')
    }
    input = prompt("Enter number")

}

alert(`Total sum = ${total}`)