import React from "react"
import ReactDOM from "react-dom/client"

// const parent = React.createElement('div', { id: "parent" },
//     [React.createElement('div', { id: "child1" },
//         [React.createElement('h2', { id: "h2tag" }, " This is a h2 tag in child1"),
//         React.createElement('h1', { id: "h1tag" }, " This is a h1 tag in child1")]
//     ), React.createElement('div', { id: "child2" },
//         [React.createElement('h2', { id: "h2tag" }, " This is a h2 tag in child2"),
//         React.createElement('h1', { id: "h1tag" }, " This is a h1 tag in child2")]
//     )]
// )

// React.createElement => React element(JS Object) => render() makes this object into HTML element
const heading = React.createElement('h3', { id: "heading" }, "Namaste React 🚀")
console.log(heading)

// JSX - HTML/XML like syntax
// Pure Vanilla Javascript understands only Ecmascript (ES6) but doesn't understand jsx
// Babel behind the scenes transpiles the JSX into code understands by the JS engine
// JSX => Bable transpiles it to React.createElement => React element(JS Object) => render() makes this object into HTML element
const jsxHeading = <h3 id="heading">Namaste React using JSX 🚀</h3>
console.log(jsxHeading)

const Title = () => {
    return (<h3 id="heading" >Namaste React from Title component !!!</h3>)
}

const normalJS = (<h3 id="heading" >Plain JSX can be inserted in components using curly braces since its a a variable!!!</h3>)

// Functional Component - A JS function which returns some piece of JSX code
const HeadingComponent = () => {
    return (
        <div>
            {Title()}
            <Title />
            <Title></Title>
            <h3 id="heading" className="headerComponent">Namaste React from functional component 🚀</h3>
            {normalJS}
        </div>
    )
}

const HeadingComponent2 = () => <h3 id="heading" className="headerComponent">Namaste React from functional component 🚀</h3>
const rootelement = ReactDOM.createRoot(document.getElementById('root'))
rootelement.render(<HeadingComponent />)