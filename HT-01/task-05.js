let country = prompt('Country').toUpperCase()
let price

switch (country) {
    case 'КИТАЙ':
        alert(`Доставка в ${country} буде коштувати 100 кредитів`)
        break;
    case 'ЧИЛІ':
        alert(`Доставка в ${country} буде коштувати 250 кредитів`)
        break;
    case 'АВСТРАЛІЯ':
        alert(`Доставка в ${country} буде коштувати 170 кредитів`)
        break;
    case 'ІНДІЯ':
        alert(`Доставка в ${country} буде коштувати 80 кредитів`)
        break;
    case 'ЯМАЙКА':
        alert(`Доставка в ${country} буде коштувати 120 кредитів`)
    default: {
        alert('У вашій країні доставка недоступна')
    }
        break;
}