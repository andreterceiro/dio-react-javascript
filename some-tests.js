function test1() {
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
}

function test2() {
    let values = [1, 2, 3];

    values.forEach(value => {
        console.log(value);
    })

    doubles = values.map((value) => {
        return value * 2;
    });
    console.log(doubles);
}

function test3() {
    values = [1,2,3,4];
    console.table(values.filter((value) => value > 2));
}

function test4() {
    let values = [1, 2, 3];

    console.log(
        values.reduce((accumulator, item) => {
            return accumulator + item;
        }, 10)
    );
}

function test5() {
    values = [1, 2, 3];
    console.log(
        values.some((item) => {
            return item > 1;
        })
    );
        
    console.log(
        values.every((item) => {
            return item > 1;
        })
    );
}

// test1();
// test2();
// test3();
// test4();
test5();