const EventEmitter = require('events');
const os = require('os');
const fs = require('fs');

const listElement = require('./listElement');
const buttonElement = require('./buttonElement');

const sampleValue = 'server? client?';

const sampleEmitter = new EventEmitter();
sampleEmitter.on('event', () => console.log(sampleValue));

const operationSystem = os.platform();
const fileText = fs.readFileSync((__dirname, 'new_file.txt'), { encoding: 'utf-8' });

const sampleList = [
    'one',
    'two',
    'three',
    'four',
    'five'
];

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
    const userApiLink = 'https://jsonplaceholder.typicode.com/users';
    const operationSystem = "${operationSystem}";
    const fileText = "${fileText}";
    const logText = () => {console.log(123)}
    const showSelectedUsername = () => {
        console.log("${sampleValue}");
        console.log("${fileText}");
        console.log(operationSystem);
        const userNumberInput = document.getElementById('userNumber').value;
        fetch(userApiLink)
            .then(response => response.json())
            .then(result => {
                document.querySelector('.user').innerHTML = result.filter(user => user.id == userNumberInput)[0].name;
            });
    }
`
const selectUserButton = buttonElement('showSelectedUsername()', 'Choose');
const consoleLogButton = buttonElement('logText()', 'Log');

const testInputForm = () => {
    return {
        render: `
            <div>Choose which user (1 - 10) to select from <a target="_blank" href="https://jsonplaceholder.typicode.com/users">HERE</a></div>
            <input id="userNumber" />
            ${selectUserButton}
            ${consoleLogButton}
        `
    }
};

const setStyle = (color, fontFamily, fontSize) => (
    `color: ${color};font-family: ${fontFamily}; font-size: ${fontSize}`
);

const renderArray = [
    {
        render: selectUser(),
        style: setStyle('red', 'Arial', 18),
        class: 'user'
    },
    {
        render: sayBye('Misza'),
        style: setStyle('blue', 'Arial', 10),
        class: 'bye'
    },
    listElement(sampleList),
    testInputForm()
];

const renderFunction = (renderArray) => {
    return `
        ${renderArray.map(element => `<div class="${element.class}" style="${element.style}">${
            element.render}</div>`)
                .join('')
                .toString()
        }
        <script>${fullScript}</script>
    `
}

module.exports = renderFunction(renderArray);