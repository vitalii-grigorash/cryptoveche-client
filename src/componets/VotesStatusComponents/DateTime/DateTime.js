import React from "react";
import './DateTime.css';
import icon_data from "../../../img/MyVotes_data_icon.svg";
import icon_time from "../../../img/MyVotes_icon_time.svg";

const DataTime = ({dateTimeDate, dateTimeWatch}) => {

    return (
        <div className={'start-reg__data'}>
            <img className={'data__calendar-icon'} alt={'иконка календарь'} src={icon_data}/>
            <span>{dateTimeDate}</span>
            <img className={'data__watch-icon'} alt={'иконка часы'} src={icon_time}/>
            <span>{dateTimeWatch}</span>
        </div>
    )

}

export default DataTime;