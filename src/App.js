import react, { useState } from "react";
import classes from "./App.module.css"
import Form from "./Components/Form";


function App() {

  const [usersData, setUsersData] = useState([]);

  function addUserHandler(inputData) {
    setUsersData((prevData) => {
      return [...prevData, {name: inputData.userName, weight: inputData.weight,height: inputData.height}]
    })
  }

  return (
    <react.Fragment>
    <div className={classes.main}>
      <h1 className={classes.heading}>BMI Calculator</h1>
      <Form onAddUser={addUserHandler} onTakingData={addUserHandler}/>
    </div>
    </react.Fragment>
  );
}

export default App;
