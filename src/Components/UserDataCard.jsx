import React from "react";
import classes from "./UserDataCard.module.css"

function UserDataCard(props) {


    return <React.Fragment>
        <div className={classes.main}>
            <p className={classes.userInfo}><b>{props.userName}: </b>{props.bmiValue}</p>
        </div>
    </React.Fragment>
}

export default UserDataCard;