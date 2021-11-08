let ff = 5
// console.log(ff.isBiggerThan(9));

Number.prototype.isBiggerThan = function(num) {
  return this > num
}

console.log(ff.isBiggerThan(9));
console.log(ff.isBiggerThan(3));

let ar = []
ar.length = 3
ar.fill(3)
let ar2= new Array(3).fill(3)


console.log(ar);
console.log(ar2);

