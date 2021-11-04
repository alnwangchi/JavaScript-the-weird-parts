function factory(lookLike) {

  return function(name) {
    if(lookLike === 'handsome') {
      console.log(name + ' is a cool boy.');
    }
    if(lookLike === 'ugly') {
      console.log(name + ' is shit.');
    }
  }
}

const good = factory('handsome')
const bad = factory('ugly')

good('Allen')
bad('Bob')