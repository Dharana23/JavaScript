// if(something) {
//     do something
// } else {
//     do something else
// }

const id = 100;

// equal to
if (id == 100) {
    console.log('correct');
} else {
    console.log('incorrect');
}

// not equal to
if (id != 100) {
    console.log('correct');
} else {
    console.log('incorrect');
}

// to check type and value both
if (id === 100) {
    console.log('correct');
} else {
    console.log('incorrect');
}

// when the variable is not defined
if (typeof id !== 'undefined') {
    console.log(`The ID is ${id}`);
} else {
    console.log('No ID');
}

// greater than or less than
if (id > 200) {
    console.log('correct');
} else {
    console.log('incorrect');
}

// else if
const color = 'red';

if (color === 'red') {
    console.log('color is red');
} else if (color === 'blue') {
    console.log('color is blue');
} else {
    console.log('color is not red or blue');
}

// Logical operators
if (id === 100 && color === 'red') {
    console.log('ID is 100 and red');
} else {
    console.log('ID is not 100 and red');
}

// ternary operator
console.log(id === 100 ? 'correct' : 'incorrect');