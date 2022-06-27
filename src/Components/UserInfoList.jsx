import React from "react";
import classes from './UserInfoList.module.css'
import UserDataCard from "./UserDataCard";

const UserInfoList = (props) => {
    

    return <React.Fragment>
        <div className={classes.UserInfoList}>
           {props.onListData.map((eachPersonData) => {
                return <UserDataCard userName={eachPersonData.uName} height={eachPersonData.height} weight={eachPersonData.weight} />
           })} 
        </div>
    </React.Fragment>
    
}

export default UserInfoList;