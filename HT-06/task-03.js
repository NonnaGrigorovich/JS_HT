// ==================================================
// ES5 

// function Storage(items){
//     this.items = items;
//   }

//   Storage.prototype.getItems = function() {
//     return this.items
//   }

//   Storage.prototype.addItem = function(item) {
//     return this.items.push(item)
//   }

//   Storage.prototype.removeItem = function(item) {
//     for ( let i = 0; i < this.items.length; i++ ) {
//       if (this.items[i] === item) {
//          this.items.splice(i, 1);
//       }
//     }
//   }


// ==================================================
// ES6

// class Storage {
//   constructor(items){
//     this.items = items;
//   }

//   getItems() {
//     return this.items
//   }

//   addItem(item) {
//     return this.items.push(item)
//   }

//   removeItem(item){
//     for ( let i = 0; i < this.items.length; i++ ) {
//       if (this.items[i] === item) {
//          this.items.splice(i, 1);
//       }
//     }
//   }
// }



// ==================================================

const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
  ]);
  
  const items = storage.getItems();
  console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]
  
  storage.addItem('Дроїд');
  console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]
  
  storage.removeItem('Пролонгер');
  console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]