function practice() {
  let ary = []

  for(var i = 0; i < 5; i++) {
    ary.push(
      (function(j) {
        return function() {
          console.log(j);
        }
      })(i)
    )
  }

  return ary
}

let rs = practice()
// console.log(rs);
rs[0]()
rs[1]()
rs[2]()
rs[3]()
rs[4]()