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

