/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  
  /*
   * Кожна транзакція - це об'єкт з властивостями: id, type і amount
   */
  
  const account = {
    // Поточний баланс рахунку
    balance: 0,
  
    // Історія транзакцій
    transactions: [],
  
    /*
     * Метод створює і повертає об'єкт транзакції.
     * Приймає суму і тип транзакції.
     */
    createTransaction(amount, type) {
      const create = {
        id: this.transactions.length + 1,
        amount,
        type
      }
      return create
    },
  
    /*
     * Метод відповідає за додавання суми до балансу.
     * Приймає суму танзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його в історію транзакцій
     */
    deposit(amount) {
      this.balance += amount
      this.createTransaction(amount, Transaction.DEPOSIT)
      this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT))
      
      return this.transactions
    },
  
    /*
     * Метод відповідає за зняття суми з балансу.
     * Приймає суму танзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його в історію транзакцій.
     *
     * Якщо amount більше, ніж поточний баланс, виводь повідомлення
     * про те, що зняття такої суми не можливо, недостатньо коштів.
     */
    withdraw(amount) {
      this.createTransaction(amount, 
        Transaction.WITHDRAW)
      this.transactions.push(this.createTransaction(amount, 
        Transaction.WITHDRAW))
      if (amount > this.balance) {
        return `Withdrawal of such amount is impossible`
      }
      return (this.balance -= amount)
    },
  
    /*
     * Метод повертає поточний баланс
     */
    getBalance() {
      return this.balance
    },
  
    /*
     * Метод шукає і повертає об'єкт транзакції по id
     */
    getTransactionDetails(id) {
      for (let i = 0; i < this.transactions.length; i++) {
        if (this.transactions[i].id === id){
          return this.transactions[i]
        }
      }
      return `This ID does not exist`
    },
  
    /*
     * Метод повертає кількість коштів
     * певного типу транзакції з усієї історії транзакцій
     */
    getTransactionTotal(type) {
      let total = 0
      for ( let i = 0; i < this.transactions.length; i++ ) {
        if (this.transactions[i].type === type) {
          total += this.transactions[i].amount;
        }
      }
      return total;
    }
  }

  console.log(account.createTransaction(10000, Transaction.DEPOSIT)),

  console.log(account.deposit(1000)),
  console.log(account.deposit(50000)),
  console.log(account.deposit(7000)),

  console.log(account.withdraw(4000)),
  console.log(account.withdraw(500)),

  console.log(account.getBalance()),

  console.log(account.getTransactionDetails(2)),
  console.log(account.getTransactionDetails(7)),
  
  console.log(account.getTransactionTotal(Transaction.WITHDRAW))