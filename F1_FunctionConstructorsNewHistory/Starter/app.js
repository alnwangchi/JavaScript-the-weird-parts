function MakePerson(name, age) {
  console.log(this);
  this.name = name || 'Apple'
  this.age = age || 0
  console.log(this);
}

let nobody = new MakePerson()
// console.log(nobody);

let allen = new MakePerson('allen', 33)
console.log(allen);
// 當我這樣建立物件時 JS 會自動幫我建立 prototype


// 我在對原本的建構函式添加原型的方法
MakePerson.prototype.getAge = function() {
  return this.age
}

// 可以取用
console.log(allen.getAge());