*This repository is used to store all about closures taught by Jonas Schmedtmann and Paul Binns.*

# Closure

- Closure occurs where a function is defined and the function definition accesses variables outside of it's function scope.

- The fuction maintains a link to those variables throughout its lifetime.

- When a function is defined within another function, the inner function will maintain a link to the external variables that were in existance at the time the function was defined, even after the outer function has completed and been garbage collected = An inner function has always access to the variables and parameters of its outer function, even after the outer function has returned.

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

## Function Scope
```javascript
function logFunctionScope() {
    let functionScope="I am in the function scope"
    console.log(functionScope);
}
logFunctionScope();
```

## Function Scope Unavailable Outside the Function
```javascript
function logFunctionScope() {
    let functionScope="I am in the function scope"
    console.log(functionScope);
}
logFunctionScope();
console.log(functionScope);
```

## Access Global Scope Within a Function
```javascript
var global="I am in the global scope";
function logGlobal(){
    console.log(global);
}
logGlobal();
```

## Assignment of Parameters
```javascript
function addVariable(value) {
    console.log(value);
}
addVariable("I am a variable");
```
## Creating Variables Inside a Function
```javascript
function internalVariable(value) {
    var internalVariable = 2;
    console.log(internalVariable * value)
}

internalVariable(3)
```

## Creating variables 
```javascript
function usefulInternalVariable(value) {
    var internalVarliable = 2;
    return internalVariable * value;
}

var newValue = usefulInternalVariable(3);
console.log(newValue)
```
## Useful Internal Variable Function 1)
```javascript
var returnProcessedVariable;

function internalVariableAsClosure(value) {
    var internalVariable = 2;

    function multiplyInternalVariable(){
        return internalVariable * value;
    }
    returnProcessedVariable = multiplyInternalVariable;
}
internal VariableAsClosure(4);
returnProcessedVariable();
```
## Useful Internal Variable Function 2) 
```javascript
var later;

function internalVariableClosure(value){
    function multiplyInternalVariable(internalVariable){
        return internalVariable * value;
    }
    later = multiplyInternalVariable;
}
internalVariableAsClosure(5);
later(10);
```
## Useful Internal Variable Function 3)
```javascript
function internalVariableAsClosure(value){
    return function(internalVariable){
        return internalVariable * value;
    }
} 

var timesByTwo = internalVariableAsClosure(2);
var later = timesByTwo(3);
console.log(later);

// or 

var twoTimesThree = internalVariableAsClosure(2)(3);
console.log(twoTimesThree);

// or 

var twoTimesThree = (function(x) {
    return function(y
    ) {
        return console.log(x * y);
    }
})(2)(3);
```
## Global Scope Compared To Function (Closure Based) Scope

- Global Scope:
```javascript
var count = 0;

function increment() {
    count += 1;
    console.log('count', count);
}

increment();
```

- Closure:
```javascript
function incrementWrapper() {
    
    let count = 0;

    return function increment() {
        count += 1;
        console.log(count);
    }
}

var triggerIncrementWrapper = incrementWrapper();
triggerIncrementWrapper();
``` 
## Module Pattern
```javascript
function counter() {
    let count = 0;
    function getCount(){
        return count;
    }
    function increment() {
        count += 1;
    }
    return {
        getCount: getCount,
        increment: increment
    }
}

var counter1 = counter();
console.log(counter1.getCount());
counter1.increment();
console.log(counter1.getCount());
```
## Module Pattern the oop way

```javascript
function Counter() {
    this.count = 0;
    this.getCount = function() {
        return this.count;
    }
    this.increment = function() {
        this.count += 1;
    }
}

var newCounter = new Counter();
```
## Closure Examples

1)

```javascript
function retirement(retirementAge) {
    let a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);

retirement(66)(1990)
```
2.

// Before

```javascript
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John')
```

// After (in Closure)

```javascript
function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John')
```
