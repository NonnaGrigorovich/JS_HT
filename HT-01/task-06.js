let input = prompt('Введіть число')
let total = 0

for( input; typeof input == 'string'; input){
    if (!isNaN(Number(input)) &&
    input.trim().length !== 0) {
       total += Number(input)
    } else {
        alert('Було написано не число, спробуйте ще раз')
    }
    input = prompt('Введіть число')
}

alert(`Загальна сума чисел дорівнює ${total}`)