function internalVariableAsClosure(value){
    return function(internalVariable) {
        return internalVariable * value;
    }
} 

var timesByTwo = internalVariableAsClosure(2);
var later = timesByTwo(3);
console.log(later);

var twoTimesThree = internalVariableAsClosure(2)(3);
console.log(twoTimesThree);

var twoTimesThree = (function(x) {
    return function(y
    ) {
        return console.log(x * y);
    }
})(2)(3);

///

function incrementWrapper() {
    
    let count = 0;

    return function increment() {
        count += 1;
        console.log(count);
    }
}

var triggerIncrementWrapper = incrementWrapper();
triggerIncrementWrapper();

///

var count = 0;

function increment() {
    count += 1;
    console.log('count', count);
}

increment();

///

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

///

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

///

// Before

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

// After 

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
