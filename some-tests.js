/*
var a = 10;
let b = 5;
function teste() {
    console.log(a);
    a = 11;
    console.log(b);
    b = 12;
}
teste();
console.log(a);
console.log(b);
*/

values = [1, 2, 3];

values.forEach(value => {
    console.log(value);
})

doubles = values.map((value) => {
    return value * 2;
});
console.log(doubles);