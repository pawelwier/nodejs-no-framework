const renderList = (sampleList) => (
    {
        render: `
            <ul>
                ${sampleList.map(element => `<li>${element}</li>`)
                .join('')}
            </ul>
            <div>List length: ${sampleList.length}</div>
        `,
        style: 'color: blue;font-family: Arial'
    }
)

module.exports = renderList;