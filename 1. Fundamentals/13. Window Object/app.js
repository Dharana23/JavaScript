// alert
window.alert('Hello World');
alert('Hello World');

// prompt
const input = prompt();
alert(input);

// confirm
if (confirm('Are you sure?')) {
    console.log('YES');
} else {
    console.log('NO');
}

let val;

// outer height and width
val = window.outerHeight;
val = window.outerWidth;

// inner height and width
val = window.innerHeight;
val = window.innerWidth;

// location object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// redirect
window.location.href = 'http://google.com';

//reload
window.location.reload();

// history object
window.history.go();

val = window.history.length;

// navigator object
val = window.navigator;
val = window.navigator.appName;

console.log(val);