// conditional rendering = allows you to control what gets rendered 
//                         in our application based on certain conditions
//                          (show, hide, or change components)
import UserGreetings from "./UserGreeting.jsx"

function App() {

  //<UserGreetings isLoggedIn={true} username: "CagataySen" />
  return (
    <>
      <UserGreetings isLoggedIn={true} />
      
    </>
  )
}

export default App
