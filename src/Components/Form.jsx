import react, { useState } from "react";
import classes from "./Form.module.css"


const Form = () => {

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
        event.preventDefault();
    }

    const submitHandler = (props) => {
        
    }

    return <react.Fragment>
        <form onSubmit={submitHandler}>
            <label htmlFor="username">Name</label>
            <input name="username" id="username" type='text' onChange={inputChangeHandler} value={inputData.username} />
            
            <label htmlFor="weight">Body mass (in kg)</label>
            <input name="weight" id="weight" type="number" onChange={inputChangeHandler} value={inputData.weight} />

            <label htmlFor="height">Height(in m)</label>
            <input name="height" type="number" id="height" onChange={inputChangeHandler} value={inputData.height} />

            <button type="submit">Submit</button>
        </form>
    </react.Fragment>
}

export default Form;