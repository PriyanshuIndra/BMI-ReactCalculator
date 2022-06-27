import react, { useState } from "react";
import classes from "./Form.module.css"


const Form = (props) => {

    // Saving input data in a object called 'inputData'
    const [inputData, setInputData] = useState({
        username : "",
        height : "",
        weight : ""
    }) 

    const inputChangeHandler = (event) => {

        let {name, value} = event.target;
        setInputData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
        console.log(inputData)
    }

    const submitHandler = (event) => {

        props.onAddUser(inputData.username, inputData.height, inputData.weight)

        setInputData({
            username: "",
            height: "",
            weight: ""
        })

        event.preventDefault();
    }

    return <react.Fragment>
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="username">Name</label>
            <input className={classes.inputBoxes} autoComplete="off" name="username" id="username" type='text' onChange={inputChangeHandler} value={inputData.username} />
            
            <label htmlFor="weight">Body mass (in kg)</label>
            <input className={classes.inputBoxes} name="weight" id="weight" type="number" onChange={inputChangeHandler} value={inputData.weight} />

            <label htmlFor="height">Height(in m)</label>
            <input step='0.1' className={classes.inputBoxes} name="height" type="number" id="height" onChange={inputChangeHandler} value={inputData.height} />

            <button className={classes.btn} type="submit">Submit</button>
        </form>
    </react.Fragment>
}

export default Form;

