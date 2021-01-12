const sampleList = [
    'one',
    'two',
    'three',
    'four'
];

const renderList = () => (
    {
        render: `<ul>${sampleList.map(element => `<li>${element}</li>`).join('')}</ul>`,
        style: 'color: blue;font-family: Arial'
    }
)

module.exports = renderList;