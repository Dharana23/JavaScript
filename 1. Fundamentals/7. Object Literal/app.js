const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@aol.com',
    hobbies: ['movies', 'sports'],
    address: {city: 'Miami', state: 'FL'},
    getBirthYear: function() {
        return 2022 - this.age;
    }
}

// get specific value
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

// object as array
const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 23}
];

for(let i=0; i<people.length; i++) {
    console.log(people[i].name);
}

console.log(val);