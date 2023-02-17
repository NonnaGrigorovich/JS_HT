// ==================================================
// ES5 

// function StringBuilder(value){
//         this.value = value;
//     }

//     StringBuilder.prototype.getvalue = function() {
//         return this.value;
//     }

//     StringBuilder.prototype.append = function(str) {
//         this.value += String(str);
//     }

//     StringBuilder.prototype.prepend = function(str) {
//         this.value = String(str) + this.value;
//     }

//     StringBuilder.prototype.pad = function(str) {
//         this.value = String(str) + this.value + String(str);
//     }


// ==================================================
// ES6

// class StringBuilder {
//     constructor(_value){
//         this._value = _value;
//     }

//     get value() {
//         return this._value;
//     }

//     append(str) {
//         this._value += String(str);
//     }

//     prepend(str) {
//         this._value = String(str) + this.value;
//     }

//     pad(str) {
//         this._value = String(str) + this.value + String(str);
//     }
// }

// ==================================================

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='