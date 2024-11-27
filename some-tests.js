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