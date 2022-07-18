let val;
const today = new Date();
val = today;

// show birthday using date
let birthday = new Date('1-23-2001');
birthday = new Date('1-23-2001 10:11:00');
birthday = new Date('January 23 2001');
birthday = new Date('1/23/2001');

// get the month
val = today.getMonth(); //index start from 0

// get the date
val = today.getDate();

// get the day
val = today.getDay(); //starts from sunday

// get the year
val = today.getFullYear();

// get the hour
val = today.getHours();

// get the minutes
val = today.getMinutes();

// get the seconds
val = today.getSeconds();

// get milliseconds
val = today.getMilliseconds();

// get timestamp
val = today.getTime();

// set month
birthday.setMonth(2);

// set date
birthday.setDate(12);

// set year
birthday.setFullYear(1985);

// set time
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);
console.log(val);