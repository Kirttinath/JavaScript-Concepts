{
    let a = 10;
    const b = 100;
    var c = 1000;

}
//console.log(a); //ReferenceError: a is not defined
//console.log(b); // ReferenceError: b is not defined 
console.log(c);

// Difference Between var and let
//1.  var is function scoped (ES5)
//    let is braces scoped   (ES6)
function diff()
{
    for(var i=1;i<=10;i++)
    {
        console.log(i);
    }
    console.log(i);
}
