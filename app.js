const sayHello = (name) => {
    return `Hey there, ${name}.`
};

const sayBye = (name) => {
    return `Bye there, ${name}.`
};

const renderArray = [
    {
        render: sayHello('Bob'),
        style: 'color: red;font-family: Arial'
    },
    {
        render: sayBye('Misza'),
        style: 'color: blue;font-family: Arial'
    }
    
];

const renderFunction = (renderArray) => {
    return renderArray.map(element => `<div style="${element.style}">${element.render}</div>`).join('').toString();
}

module.exports = renderFunction(renderArray);