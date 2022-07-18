// for loop
for (let i=0; i<5; i++) {
    console.log(i);
}

// continue
for (let i=0; i<5; i++) {
    if (i === 2) {
        console.log('This is 2');
        continue;
    }
    console.log(i);
}

//break
for (let i=0; i<5; i++) {
    if (i === 2) {
        console.log('This is 2');
        break;
    }
    console.log(i);
}

//while loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// do-while loop
i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);

// LOOPS FOR ARRAYS
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
for (i=0; i<cars.length; i++) {
    console.log(cars[i]);
}

// forEach
cars.forEach (function(car) {
    console.log(car);
});

//map
const users = [
    {id:1, name:'John'},
    {id:2, name: 'Sarah'},
    {id:3, name:'Karen'}
];
const ids = users.map(function(user) {
    return user.id;
});

console.log(ids);

// for in 
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
};

for (let x in user) {
    console.log(`${x}: ${user[x]}`);
}