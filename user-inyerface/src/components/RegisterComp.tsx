import React, { SyntheticEvent } from "react";
import { Form } from "react-bootstrap";

interface IProps {

}

//Boring regular register form that needs to messed up somehow
export const RegisterComp: React.FC<IProps> = (props:IProps) => {

    const saveNewUser = (event:SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return(
        <form className="container" onSubmit={saveNewUser}>

            <div className="row justify-content-center">
                <div className="col-4" style={{textAlign: "right"}}>Enter Username:</div>
                <div className="col-4"><input type="text" placeholder="username"/></div>
            </div>
            
            <div className="row justify-content-center">
                <div className="col-4" style={{textAlign: "right"}}>Enter Password:</div>
                <div className="col-4"><input type="password" placeholder="password"/></div>
            </div>
            
            <div className="row justify-content-center">
                <div className="col-4" style={{textAlign: "right"}}>Enter First Name:</div>
                <div className="col-4"><input type="text" placeholder="first name"/></div>
            </div>

            <div className="row justify-content-center">
                <div className="col-4" style={{textAlign: "right"}}>Enter Last Name:</div>
                <div className="col-4"><input type="text" placeholder="last name"/></div>
            </div>

            <div className="row justify-content-center">
                <input type="submit" value="Register" />
            </div>
            
        </form>
    )
}