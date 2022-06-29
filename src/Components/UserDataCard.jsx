import React from "react";
import classes from "./UserDataCard.module.css"

function UserDataCard(props) {


    return <React.Fragment>
        <div className={classes.main}>
            <p className={classes.userName}><b>{props.userName}</b></p>
            <p className={classes.height}>{props.height}</p>
            <p className={classes.weight}>{props.weight}</p>
            <p className={classes.bmiValue}>{props.bmiValue}</p>
        </div>
    </React.Fragment>
}

export default UserDataCard;