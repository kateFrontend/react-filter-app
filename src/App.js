import { useState } from "react";
import { data } from "./data";
import FirstName from './FirstName'

function App() {
  const [firstName, setFirstName] = useState(data);

  return (
    <FirstName anyWordYouWant={firstName}/>
  )
}

export default App;
