let obj = {
  name: 'Allen',
  age: 27
}

console.log(obj);

let jsonObj = JSON.stringify(obj)
console.log(jsonObj);

let parseJsonObj = JSON.parse(jsonObj)
console.log(parseJsonObj);