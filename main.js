var Cat = {
    name: 'mew',
    canRun: function () {
        console.log(this)
        var foo = () => { console.log(this) }
        foo();
    }
};

var foo = (name, age) => { name = name, age = age };
var f1 = new foo("cat", 6); 

var foo = (name, age) => { name = name, age = age };
console.log(foo.prototype);