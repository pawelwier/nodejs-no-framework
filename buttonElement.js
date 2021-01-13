const renderButton = (onClickFunction, buttonText) => (
    `
        <button onclick="${onClickFunction}">${buttonText}</button>
    `
)

module.exports = renderButton;