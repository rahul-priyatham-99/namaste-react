const parent = React.createElement('div', { id: "parent" },
    [React.createElement('div', { id: "child1" },
        [React.createElement('h2', { id: "h2tag" }, " This is a h2 tag in child1"),
        React.createElement('h1', { id: "h1tag" }, " This is a h1 tag in child1")]
    ), React.createElement('div', { id: "child2" },
        [React.createElement('h2', { id: "h2tag" }, " This is a h2 tag in child2"),
        React.createElement('h1', { id: "h1tag" }, " This is a h1 tag in child2")]
    )]
)
// const heading = React.createElement('h3', { id: "heading" }, "Hello world from React JS")
console.log(parent)
const rootelement = ReactDOM.createRoot(document.getElementById('root'))
rootelement.render(parent)