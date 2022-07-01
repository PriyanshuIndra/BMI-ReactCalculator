import React from "react";
import classes from "./UserDataCard.module.css"

function UserDataCard(props) {


    return <React.Fragment>
        <div className={classes.main}>
            <p className={classes.userInfo}><b>{props.userName}: </b>{props.bmiValue}</p>
            <h3>{props.bmiMessage}</h3>
        </div>
    </React.Fragment>
}

export default UserDataCard;