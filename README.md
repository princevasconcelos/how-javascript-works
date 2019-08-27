# JAVASCRIPT

- https://github.com/princevasconcelos/33-js-concepts
- https://github.com/princevasconcelos/javascript-questions
- https://tcorral.github.io/javascript-challenges-book/
- https://www.youtube.com/watch?v=HN1UjzRSdBk&feature=youtu.be
- https://www.youtube.com/watch?v=2nXsLpUCO20
- https://createapp.dev/parcel
- https://tcorral.github.io/javascript-challenges-book/
- https://github.com/princevasconcelos/33-js-concepts
- https://eloquentjavascript.net/ (Book)
- https://github.com/javascript-society/javascript-path (Link to books)
- https://devdocs.io/javascript-webassembly/

## Historiy

Created by Brendan Eich on May 1965.
Javascript is based on: Self(Object Oriented) and Schema(Functional)

## Caracteristicas

- Week types
- Pure functions: functions that dont have side effects, functions deterministic
- First class functions: functions that can receive other functions and return functions. Functions are objects,
so can be assigned to a variable

## Links

- https://javascriptweblog.wordpress.com/ (by Angus Croll)
- http://fitzgeraldnick.com/ (by Nick Fitzgerald)
- http://www.adequatelygood.com/ (by Ben Cherry)

## Function Declaration

```js
function foo() {
  return 3;
}

foo() //3
foo //function
```

- full hoisted
- must have a name
- function name is avaliable inside the function and the parent scope

## Function Expression

```js
const foo = function bar() {
  return 4;
}
```
- partial hoisted
- can be anonymous or named
- function name is not visible outsite function scope

Extra:
- Look like more an object than a expression
- Function Expressions and Functional Programming are inseparable
- Best practive: always use named function expression (NFE) to avoid debugging problems

## A expression produces a value

If you can print it, or assign it to a variable, it’s an expression

```js
2 + 2
3 * 7
1 + 2 + 3 * (8 ** 9) - sqrt(4.0)
min(2, 22)
max(3, 94)
round(81.5)
"foo"
"bar"
"foo" + "bar"
None
True
False
2
3
4.0
```

## A statement perform an action

They are syntactic elements that serve a purpose, but do not themselves have any intrinsic “value”

```js
if CONDITION:
elif CONDITION:
else:
for VARIABLE in SEQUENCE:
while CONDITION:
try:
except EXCEPTION as e:
class MYCLASS:
def MYFUNCTION():
return SOMETHING
raise SOMETHING
with SOMETHING:
```

DOEST WORK
```js
x = if CONDITION:
y = while CONDITION:
z = return 42
foo = for i in range(10):
```

## Hoist

Function declarations and function variables are always moved (‘hoisted’) to the top of their JavaScript scope by the JavaScript interpreter (http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)


#### 1. var vs let vs const

<details><summary><b>Resposta</b></summary>
  
<p>
var scope scapes outside for, while, if
</p>
</details>

---

#### 2. Scope vs Context

<details><summary><b>Resposta</b></summary>
  
<p>
scope === variable access
contexT === This
  
 Everytime when call a function, when are creating a new scope
</p>
</details>

---

#### 3. First-Class Functions

<details><summary><b>Resposta</b></summary>
  
<p>
example: callbacks can be passed as a function argument
</p>
</details>

---

#### 4. Event-Driven Enviroment

<details><summary><b>Resposta</b></summary>
  
<p>
It runs part of the code and keep in-memory another part to fire it when an event occur
```
document.addEventListener('DOMContentLoaded', callback)
```
</p>
</details>

---

#### 5. Closure

<details><summary><b>Resposta</b></summary>
  
<p>
retains state and scope after executes
</p>
</details>


#### This

1) If a function is instantiated with `new` keyword. `this` is a brand new object

2) If `call`, `apply` or `bind` is used. `this` is the object passed in as the first argument

3) When a dot is to the left of a function invocation, `this` is the object to the left of the dot

4) If a function is invoked on global scope, `this` is the window

5) If a function is an ES5 arrow function, `this` receives the value of the surrounding scope. Just check the value of `this` outside the arrow function, its the same.
Note: Arrow function dont provide their own `this`
