/**
 * <div id="parent">
 *  <div id="child">
 *      <h1></h1>
 *  </div>
 * </div>
 * 
 */

const parent = React.createElement('div', { id: "parent" },
    React.createElement('div', { id: "child" }, [
        React.createElement('h1', {}, "I'm heading 1"),
        React.createElement('h2', {}, "I'm heading 2")
    ]

    )
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)

/*
// under the hood, this creates a React element (Javascript object)
const heading = React.createElement('h1', { id: "heading" }, 'Hello World from React')

// Tell React the root - using react-dom API
const root = ReactDOM.createRoot(document.getElementById('root'))

// Take the object and put it into the DOM
root.render(heading)
*/