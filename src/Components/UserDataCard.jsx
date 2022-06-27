import React from "react";
import classes from "./UserDataCard.module.css"

function UserDataCard(props) {

    return <React.Fragment>
        <div className={classes.main}>
            <p><b>{props.uName}</b></p>
            <p>{props.height}</p>
            <p>{props.weight}</p>
        </div>
    </React.Fragment>
}

export default UserDataCard;