// React Hook = Special function that allows functional components 
//              to use React features without writing class components
//              (useState, useEffect, useContext, useReducer, useCallback and more..)

// useState() = A React hook that allows the creation of a stateful variable
//              AND a setter function to update its value in the Virtual DOM.
//              [name, setName]



import Counter from "./Counter.jsx"
import MyComponent from "./MyComponent.jsx"

function App() {
  return (
    <>
        <MyComponent />
        <Counter />
    </>
  )
}

export default App
