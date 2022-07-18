const firstName = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';
let html;

// without template literals (es5)
html = '<ul><li>Name: ' + firstName + '</li><li>Age: ' + age + '<li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';
document.body.innerHTML = html;

// with template literals
html = `
    <ul>
        <li>Name: ${firstName}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
    </ul>
`;