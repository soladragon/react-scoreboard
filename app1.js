
//create a react element as an object
const title = 'My first react element';
const desc = 'I learned how to create a react node and render it into the DOM';
const myTitleID = 'main-title';

const header = (
    <header>
    <h1 id={myTitleID}>{ title }</h1>
    <p>{ desc }</p>
    </header>
)

//render information to the dom using this
ReactDOM.render(
    //1st choose what you want to attach to the DOM and then
    header,
    //select what element you want to attach to.
    document.getElementById('root')
);