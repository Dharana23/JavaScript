// function declaration
function greet() {
    console.log('hello');
}

function greet() {
    return 'Hello';
}

// defining default parameter's value
function greet(firstName='John', lastName='Doe') {
    return `Hello ${firstName} ${lastName}`;
}

// function expression
const square = function(x) {
    return x*x;
};
console.log(square(8));

// Immediately Invokable Function Expressions - IIFEs
(function() {
    console.log('IIFE Ran...');
})();

// property methods
const todo = {
    add: function() {
        console.log('Add todo...');
    }
}
todo.add();
todo.delete = function() {
    console.log('Delete todo...');
}
todo.delete();