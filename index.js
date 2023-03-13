var a, b

function beforeEach() {
  a = Math.floor(Math.random() * 1000);
  b = Math.floor(Math.random() * 1000);
}

function add(a,b) {
    beforeEach();
    return a+b;
}

function subtract(a,b) {
    beforeEach();
    return a-b;
}
function multiply(a,b) {
    beforeEach();
    return a*b;
}

function divide(a,b) {
    beforeEach();
    return a/b;
}

function increment(a) {
    a++;
    return(a);
}

function decrement(a) {
    a--;
    return(a);
}

function makeInt(n,base) {
    return makeInt;
}

function makeInt(n){
    parseInt(n,10)
}

function preserveDecimal(n) {
    return (parseFloat(n));
}

function makefloat(NaN) {
    return makefloat;
}

////////////////////////////////
// const n = 0 * 2328;
// function makeInt(n) {
//     return n;
// }


// function parseInt(makeInt) {
//     return (parseInt(n,10));
// }

// const NaN = sldkjflksjf;
// function makeInt(NaN) {
//     return makeInt;
// }





