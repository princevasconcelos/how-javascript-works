# JAVASCRIPT

- https://github.com/princevasconcelos/33-js-concepts
- https://github.com/princevasconcelos/javascript-questions
- https://tcorral.github.io/javascript-challenges-book/
- https://www.youtube.com/watch?v=HN1UjzRSdBk&feature=youtu.be
- https://www.youtube.com/watch?v=2nXsLpUCO20
- https://createapp.dev/parcel

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
