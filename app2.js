
//create a react element as an object
const title = React.createElement(
    //first what type of element you want div, h1
    'h1',
    ///then what classes, ids it gets
    { id: 'main-title', title: 'this is a title' },
//then the information that gets rendered inside of it
    'My first react element'
);

const desc = React.createElement(
    'p',
    { id: 'desc' },
    'I learned how to create a react node and render it into the DOM'
);

const header = React.createElement(
    'header',
    null,
    title, desc

)
//render information to the dom using this
ReactDOM.render(
    //1st choose what you want to attach to the DOM and then
    header,
    //select what element you want to attach to.
    document.getElementById('root')
);