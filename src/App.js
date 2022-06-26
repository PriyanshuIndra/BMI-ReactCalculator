import react, { useState } from "react";
import classes from "./App.module.css"
import Form from "./Components/Form";
import UserInfoList from "./Components/UserInfoList";

function App() {

  const [usersData, setUsersData] = useState([]);

  function addUserHandler(username, height, weight) {
    setUsersData((prevData) => {
      return [...prevData, {uName: username, height: height, weight: weight}]
    })
    console.log(usersData)
  }

  return (
    <react.Fragment>
    <div className={classes.main}>
      <h1 className={classes.heading}>BMI Calculator</h1>
      <Form onAddUser={addUserHandler}/>
      <UserInfoList onAddingListData={usersData}/>
    </div>
    </react.Fragment>
  );
}

export default App;
