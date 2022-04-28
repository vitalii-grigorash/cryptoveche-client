import React from "react";
import './DataTimeReg.css';
import icon_data from "../../../img/MyVotes_data_icon.svg";
import icon_time from "../../../img/MyVotes_icon_time.svg";

const DataTimeReg = ({DateReg, TimeReg}) => {

    return (
        <div className={'start-reg__data'}>
            <img alt={'иконка календарь'} src={icon_data}/>
            <span>{DateReg}</span>
            <img alt={'иконка часы'} src={icon_time}/>
            <span>{TimeReg}</span>
        </div>
    )

}

export default DataTimeReg;