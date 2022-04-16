// var foo = {},
//     F = function(){};
// Object.prototype.a = 'value a';
// Function.prototype.b = 'value b';

// console.log(foo.a);
// console.log(foo.b);

// console.log(F.a);
// console.log(F.b);

function A() {}
function B(a) {
    this.a = a;
}
function C(a) {
    if (a) {
        this.a = a;
    }
}
A.prototype.a = 1;
B.prototype.a = 1;
C.prototype.a = 1;

console.log(new A().a); 
console.log(new B().a);
console.log(new C(2).a);
