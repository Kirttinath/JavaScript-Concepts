console.log(b);

let a = 10;
var b = 20;
a = 40;
console.log(a);
const c = 30;
console.log(`${a} ${b} ${c}`);

//* let and var are function scoped, const is block scoped

{
  var k = 20;
}
console.log(k);
