import React from "react";
import './GeneraInfoBtn.css';
import {useNavigate} from "react-router-dom";


const GeneraInfoBtn = ({hidden}) => {

    const linkGeneralInfo = useNavigate();

    return (
        <div>
            <h2 className={'votes-and-details-page-switch-buttons__button'} hidden={hidden} onClick={() => linkGeneralInfo('/main/votes-page-details-voting')}>Общая информация</h2>
        </div>
    )
}

export default GeneraInfoBtn;