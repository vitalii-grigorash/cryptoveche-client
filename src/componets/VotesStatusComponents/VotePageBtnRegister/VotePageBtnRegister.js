import React from "react";
import './VotePageBtnRegister.css';


const  VotePageBtnRegister = ({nameRegButton}) => {

    return (
        <div>
            <button className={'vote-page-button-register'}>{nameRegButton}</button>
        </div>
    )

}

export default VotePageBtnRegister;