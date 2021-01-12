const EventEmitter = require('events');

const sampleList = require('./listElement');

class SampleEmitter extends EventEmitter { };
const sampleEmitter = new SampleEmitter();
sampleEmitter.on('event', () => console.log(12300));
// sampleEmitter.emit('event')

const selectUser = () => {
    return 'Selected user will display here.'
};

const sayBye = (name) => {
    sampleEmitter.emit('event');
    return `
        Bye there, ${name}.
    `
};

const fullScript = `
    const showSelectedUsername = () => {
        const userNumberInput = document.getElementById('userNumber').value
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(result => {
                document.querySelector('div').innerHTML = result.filter(user => user.id == userNumberInput)[0].name;
            });
    }
`

const testInputForm = () => {
    return {
        render: `
            <div>Choose which user (1 - 10) to select from <a target="_blank" href="https://jsonplaceholder.typicode.com/users">HERE</a></div>
            <input id="userNumber" />
            <button onclick="showSelectedUsername()">Choose</button>
        `
    }
};

const renderArray = [
    {
        render: selectUser(),
        style: 'color: red;font-family: Arial'
    },
    {
        render: sayBye('Misza'),
        style: 'color: blue;font-family: Arial'
    },
    sampleList(),
    testInputForm()
];

const renderFunction = (renderArray) => {
    return `
        ${renderArray.map(element => `<div style="${element.style}">${
            element.render}</div>`)
                .join('')
                .toString()
        }
        <script>${fullScript}</script>
    `
}

module.exports = renderFunction(renderArray);