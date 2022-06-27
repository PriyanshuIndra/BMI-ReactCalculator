import React from "react";
import classes from "./UserDataCard.module.css"

function UserDataCard(props) {

    let BMI_VALUE = 0;
    function bmiCalculation() {
        const height = props.height;
        const weight = props.weight;
        BMI_VALUE = weight/(height*height);
        return BMI_VALUE;
    }

    return <React.Fragment>
        <div className={classes.main}>
            <p className={classes.userName}><b>{props.userName}</b></p>
            <p className={classes.height}>{props.height}</p>
            <p className={classes.weight}>{props.weight}</p>
        </div>
    </React.Fragment>
}

export default UserDataCard;