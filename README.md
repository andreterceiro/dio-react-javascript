# General

You can use `console.clear()` in the browser.

Like with the Python function `print()`, you can pass more than 1 argument to `console.log()`, like:

```
console.log('Hello', 'world');
```

A space between the words will autoomatically be added.


# forEach x map

In a map, we return a value to a variable. In forEach (captilalized 'E'), we don't return anything... See:

```
values = [1, 2, 3];

values.forEach(value => {
    console.log(value);
})

doubles = values.map((value) => {
    return value * 2;
});
console.log(doubles);
```


# console.table()

You can use `console.table()` to print an array of objects in a table format.


# filter

Example:

```
values = [1,2,3,4];
console.table(values.filter((value) => value > 2));
```


# find

The way to use is similar as ".filter()". But "find()" **only returns the first value that matches the condition**.


# findIndex

Similar to find(), but returns only the index related to the match.


# reduce

See the example. Strange Syntax, but ok, it prints 16. The initial value of the accumulator is 10.

```
let values = [1, 2, 3];

console.log(
    values.reduce((accumulator, item) => {
        return accumulator + item;
    }, 10)
);
```

# some() and every()

**some()** is like using an "**or**" opperator in all of the items and every () is like using an "**and**" operator in all of the items.

```
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
```

