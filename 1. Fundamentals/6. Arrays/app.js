const numbers = [5, 3, 44, 56, 32];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruits = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];

let val;

// get array length
val = numbers.length;

// check if is Array
val = Array.isArray(numbers);

// get single value
val = numbers[3];

// insert into array
numbers[2] = 100;

// find index of value
val = numbers.indexOf(3);

// MUTATING ARRAYS
// add to end
numbers.push(250);
//add to start
numbers.unshift(120);
//delete from end
numbers.pop();
//delete from start
numbers.shift();
// delete from given position
numbers.splice(1, 1);
// reverse array
numbers.reverse();

// concatenate array
val = numbers.concat(numbers2);

//sorting arrrays
val = fruits.sort(); //sort by alphabetical order
val = numbers.sort(); //sort only by first digit
val = numbers.sort(function(x, y) {
    return x-y;
}); //sort whole array in ascending order
val = numbers.sort(function(x, y) {
    return y-x;
}); //sort whole array in descending order

// find
function under50(num) {
    return num < 50;
}
val = numbers.find(under50);

console.log(val);