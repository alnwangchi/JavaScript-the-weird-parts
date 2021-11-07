let person = {
  name: 'Defalut',
  age: 'Default',
  showInfo: function() {
    return this.name + ' is ' + this.age 
  }
}


let amy = {
  name: 'Amy',
  age: 25,
}

amy.__proto__ = person
// console.log(amy.name);
// console.log(amy.showInfo());




let ary = []
let func = function() {}
let obj = {}

console.log(ary.__proto__);