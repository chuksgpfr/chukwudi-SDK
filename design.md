
# Design Pattern

A brief description of the pattern used to design this SDK.

The Prototype Pattern creates new objects, but rather than creating non-initialized objects it returns objects that are initialized with values it copied from a prototype - or example - object

Javascript has 2 types, the primitive types: 
- Boolean type, 
- Null type
- Undefined type
- Number type
- BigInt type
- String type
- Symbol type
and Objects (collections of properties). Functions are also objects.

So what we'll be looking at here is more of function chaining, what is function chaining ?

```bash
Function chaining is a pattern in JavaScript where multiple functions are called on the same object consecutively. 
Using the same object reference, multiple functions can be invoked. 
It increases the readability of the code and means less redundancy.
```

If you have ever worked with JQuery or vanilla javascript on the frontend, it's more dominant there.
Most libraries use it, knex, objection, mongoose etc.

Example of functional chaining: 

```javascript
const Calculator = {
  result: 0,
  add(a, b) {
    this.result = a + b;
    return this;
  },

  mul(a) {
    this.result = this.result * a;
    return this;
  },
 
  div(a) {
    this.result = this.result / a;
    return this;
  }
}
```

"Prototype is basically a property of a JavaScript function. 
At each time we create a function in JavaScript, JavaScript engine adds an extra property called prototype to the created function. This prototype property is an object (called as prototype object) has a constructor property by default. This constructor property points back(i.e blue arrow) to the function object on which the prototype object is a property. Following diagram illustrates what I described above" -- Chamika Kasun

