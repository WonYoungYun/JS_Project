var fs = require('fs');

//동기적
/*
console.log('A');
var result = fs.readFileSync('/Users/Yun/SecondEra/nodeJs/sample.txt', 'utf8');
console.log(result);
console.log(C);
*/


//비동기적
console.log('A');
var result = fs.readFile('/Users/Yun/SecondEra/nodeJs/sample.txt', 'utf8', function(err, result) {
    console.log(result);
});
console.log('C');




//callback
var a = function() {
    console.log('A');
}
a();

function slowfunc(callback){
    console.log('B');
    callback();
    console.log('C');
}

slowfunc(a);