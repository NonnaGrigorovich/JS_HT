let credits = 23580
let pricePerDroid = 3000
let amount = prompt('Кількість')

if (amount == null) {
    console.log('Скасовано користувачем!')
} else {
    let totalPrice = amount * pricePerDroid

    if (totalPrice > credits) {
        console.log('Недостатньо коштів на рахунку!')
    } else {
        let balance = credits - totalPrice
        console.log(`Ви купили ${amount} дроїдів, на рахунку залишилося ${balance} кредитів.`)
    }
}