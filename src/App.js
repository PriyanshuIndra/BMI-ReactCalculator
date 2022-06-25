import react, { useState } from "react";
import classes from "./App.module.css"
import Form from "./Components/Form";


function App() {

  const [usersData, setUsersData] = useState([]);

  function addUserHandler(uName, uWeight, uHeight) {
    setUsersData((prevData) => {
      return [...prevData, {name: uName, weight: uWeight,height: uHeight}]
    })
  }

  return (
    <react.Fragment>
    <div className={classes.main}>
      <h1 className={classes.heading}>BMI Calculator</h1>
      <Form onAddUser={addUserHandler}/>
    </div>
    </react.Fragment>
  );
}

export default App;
