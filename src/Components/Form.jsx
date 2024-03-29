import react, { useState } from "react";
import classes from "./Form.module.css"


const Form = (props) => {

    // Saving input data in a object called 'inputData'

    const [inputData, setInputData] = useState({
        username : "",
        height : "",
        weight : "",
        bmi_value: 0,
        bmiMessage: ""
    }) 

    const inputChangeHandler = (event) => {

        let {name, value} = event.target;
        setInputData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
        
    }

    const submitHandler = (event) => {
        


        function bmiCalculator() {
            const height = parseFloat(inputData.height);
            const weight = parseFloat(inputData.weight);

            inputData.bmi_value = weight/(height*height);

            // toFixed(2) will display the floating no. upto 2 decimal places only
            inputData.bmi_value = inputData.bmi_value.toFixed(2) 
        }


        bmiCalculator()

        if (inputData.bmi_value <= 18.5) {
            inputData.bmiMessage = "You're underweight";
        } else if (inputData.bmi_value > 18.5 && inputData.bmi_value <= 24.9) {
            inputData.bmiMessage = "Your BMI is normal. You're fit";
        } else {
            inputData.bmiMessage = "You're over-weight";
        }

        console.log(inputData.bmi_value, inputData.bmiMessage);

        props.onAddUser(inputData); 

        setInputData({
            username: "",
            height: "",
            weight: "",
            bmi_value: 0,
            bmiMessage: ""
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

