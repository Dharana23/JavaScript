const firstName = 'William';
const lastName = 'Johnson';
let val;

// simple concatenation
val = firstName + lastName;
val = firstName + ' ' + lastName;

// append
val = 'Hello';
val += ' World';

// escaping
val = 'That\'s awesome, I can\'t wait';

// concat
val = firstName.concat(' ', lastName);

// uppercase & lowercase
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt()
val = firstName.charAt(2);

// get last character
val = firstName.charAt(firstName.length - 1);

// substring
val = firstName.substring(0, 4);

// slice
val = firstName.slice(0, 4);

// split
const str = 'Hello there';
val = str.split(' ');

// replace()
val = str.replace('Hello', 'Bye');

// includes()
val = str.includes('there');

console.log(val);