# fpbk
to @princevasconcelos

### What is a Functional Programming?
- Its a programming paradigm
- Its a style of coding
- Treats computation as evaluation of mathematical functions
- Avoids side-effects
- Based on imutability principle (just have constraint variables === safer code)(dont have loops, it uses recursion)
to change a variable value, a new variable is created(copy) with the value changed(using a tree as data structuring)
- Uses function composition g(h(s(r(t(x))))) === f x = (g << h << s << r << t) x (ELM language code)

Point free-notation
- don’t have to specify redundant parameters
- 
```
mult5AfterAdd10 value =
    (mult5 << add10) value
-- This is a function that expects 1 parameter
mult5AfterAdd10 =
    (mult5 << add10)
-- This is also a function that expects 1 parameter
```

`A Curried Function is a function that only takes a single parameter at a time.`

### Why should i use functional programing?
FP give us more confiability about our code. We need to trust that our code should do what it is designed to do.

More trust -> more undestand

### Quotes
- The best code is the best readability (another team or future yourself should quickly understand the code)
- We should know what the code will do before running our code

### Functional languages
- LIST
- Pyton
- Erlang
- Haskell
- Clojure

### Imperative vs Declarative
Imperative(low level): how to do something (if, for, temporary variables) ex: c, c++, java

Declarative(high level): what should be the outcome (use high level API, functions) ex: sql, html

can be hybrid: javascript, python, c#

### What is a function?
A function is a block of code that optionally receives a input and return a output. Thinking in algebra: we have a equation: `f(x): 2xˆ2 + 3`, this function can receive a x (input) and return a output. We can map a set of [input, output] from this function: [0,3], [1,5], [2.11], etc..

### Arguments vs Parameters
function sum(parameter1 = 0, parameter2) {
  ...
}

`Arity is the number of parameters a function is expected to receive. In the example is equal to 1 or unary, because default param does not count`
`Arity 1: unary, Arity 2: binary, Arity 3: n-ary`
`Arity === sum.length`

sum(argument1, argument2);

You can remember this concept thinking about Default Params(ES6) and destructuring ...args

### Input vs Output
- Every function return something, if its not explicid, it return `undefined` implicited
- Side effect is a output

### Closure

Closure is when a function remembers and accesses variables from outside of its own scope, even when that function is executed in a different scope.

You can save a variable value using closure when a inner function use the variable defined on the outter function
``` 
function makeAdder(x) {
    return function sum(y){
        return x + y;
    };
}

// we already know `10` and `37` as first inputs, respectively
var addTo10 = makeAdder( 10 );
var addTo37 = makeAdder( 37 );

// later, we specify the second inputs
addTo10( 3 );           // 13
addTo10( 90 );          // 100

addTo37( 13 );          // 50
```

### Anonymous Function
Always use named function instead of anonymous funciton

### This
- This is a implicity parameter input for a function
- This should not be used in FP
