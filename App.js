import React from 'react'
import ReactDOM from 'react-dom/client'

const parent = React.createElement("h1",{},"This is core react heading!");

const element = <h1>This is JSX heading</h1>

const Title = () => <span>This is title component!</span>

const HeadingComponent = () => {
  return <div>
  <h1>This is component heading</h1>
  {/*Component composition */}
  <Title></Title>
  <Title/>
  {Title()}
  {5+10}
  </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>); // rendering component

// root.render(parent); rendering react element