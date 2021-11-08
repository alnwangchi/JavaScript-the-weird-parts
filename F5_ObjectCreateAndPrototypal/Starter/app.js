let dog = {
  name: 'unset',
  leg: 4,
  sounds: 'wan wan',
  getSounds: function() {
    return this.sounds
  }
}

let black = Object.create(dog)
black.leg = 3
console.log(black);

class Cat {

  constructor(name, sex) {
    this.name = name
    this.sex = sex
  }

  getName = function() {
    return this.name
  }
}

let zz = new Cat('zz','male')
console.log(zz);