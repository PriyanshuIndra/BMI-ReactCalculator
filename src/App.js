import react, { useState } from "react";
import classes from "./App.module.css"
import Form from "./Components/Form";
import UserDataCard from "./Components/UserDataCard";

function App() {

  const [usersData, setUsersData] = useState([]);

  function addUserHandler(newUserData) {
    setUsersData((prevData) => {
      return [...prevData, newUserData]
    })
  }


  return (
    <react.Fragment>
    <div className={classes.main}>
      <h1 className={classes.heading}>BMI Calculator</h1>
      <Form onAddUser={addUserHandler}/>
      {usersData.map((eachUserData, index) => {
        return <UserDataCard 
        
            key={index} 
            userName={eachUserData.username} 
            height={eachUserData.height} 
            weight={eachUserData.weight} 
            bmiValue={eachUserData.bmi_value} 
            bmiMessage={eachUserData.bmiMessage} 

            />
      })}
    </div>
    </react.Fragment>
  );
}

export default App;
