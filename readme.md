# Closure

- Closure occurs where a function is defined and the function definition accesses variables outside of it's function scope.

- The fuction maintains a link to those variables throughout its lifetime.

- When a function is defined within another function, the inner function will maintain a link to the external variables that were in existance at the time the function was defined, even after the outer function has completed and been garbage collected

# Closure...What is it Good for?

- Maintaining private variables

- Building more succint and powerful javascript code

- Maintaining state within a function that can be accessed and updated if necessary

- Used a lot in javascript libraries

- Used extensively in functional programming - example memoisation 

- Used for protection from colliding variables from js libraries - IIFE

## Global Scope
```javascript
var global="I am in the global scope";
console.log(global);
```
