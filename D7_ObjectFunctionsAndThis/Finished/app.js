function a() {
    console.log(this);
    this.newvariable = 'hello';
}

var b = function() {
    console.log(this);   
}

a();

console.log(newvariable); // not good!

b();

var c = {
    name: 'The c object',
    log: function() {
        var self = this;
        
        self.name = 'Updated c object';
        console.log(self);
        
        var setname = function(newname) {
            // this.name = newname 這邊的 this 是指向全域，他就是這樣
            self.name = newname; // 所以在上一層先把 this 存起來   
        }
        setname('Updated again! The c object');
        console.log(self);
    }
}

c.log();







