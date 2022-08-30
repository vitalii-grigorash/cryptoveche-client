import React, { useRef, useState, useEffect } from "react";
import './ MyProfilePageAdditionalSettings.css';
import timeZone from '../../utils/TimeZoneData/TimeZoneRu.json';
import optionRow from "../../img/INPUT-ICONS-24-ARROW.svg";
import * as MyProfile from '../../Api/MyProfile';


const MyProfilePageAdditionalSettings = (props) => {

    const {
        requestHelper,
        userId,
        utc
    } = props;

    const [timeZoneLocation, setTimeZoneLocation] = useState('');
    const [timeZoneValue, setTimeZoneValue] = useState(3);
    const [isTimeZoneOptionsOpen, setTimeZoneOptionsOpen] = useState(false);
    const [successInfo, setSuccessInfo] = useState('')
    const btnChangeColor = useRef(null)
    const [activeBtn, setActiveBtn] = useState(true)
    const borderGreenSuccess = useRef(null)

    useEffect (() => {
        if (utc !== '') {
            setTimeZoneLocation(utc);
        }
    }, [utc]);

    function onSelectTimeZoneClick(location) {
        setTimeZoneValue(location.VALUE);
        setTimeZoneLocation(location.LABEL);
    }

    function handleTimeZoneOptionsOpen() {
        if (isTimeZoneOptionsOpen) {
            setTimeZoneOptionsOpen(false);
        } else {
            setTimeZoneOptionsOpen(true);
            setActiveBtn(false);
            btnChangeColor.current.style.background = '#0084FE';
            btnChangeColor.current.style.color = '#FFFFFF';
            btnChangeColor.current.style.cursor = 'pointer'
        }
    }

    let utfOffset = {
        utc_offset: timeZoneValue,
        userFields:[]
    }

    function changeTimeZone() {
        const body = {
            userNameId: userId,
            userNameFields: utfOffset
        }
        requestHelper(MyProfile.changeUserName, body)
            .then((data) => {
                console.log(data)
            })
        setActiveBtn(false)
        setSuccessInfo('Часовой пояс изменен')
        borderGreenSuccess.current.style.border = '1px #4ED4A9 solid';
        btnChangeColor.current.style.background = 'rgba(54, 59, 77, 0.08)';
        btnChangeColor.current.style.color = 'rgba(54, 59, 77, 0.35)';
        btnChangeColor.current.style.cursor = 'initial';
    }

    setTimeout(() => {
        if (successInfo !== '') {
            setSuccessInfo('')
            borderGreenSuccess.current.style.border = '1px rgba(54, 59, 77, 0.3) solid';
        }
    }, 2000)

    return (
            <div className={'my-profile-page-add-settings__wrapper'}>
                <h3>Дополнительные настройки</h3>
                <div className={'my-profile-page-add-settings__form'}>
                    <label>Часовой пояс</label>
                    <div className="my-profile-form__time-zone-select-container" ref={borderGreenSuccess} onClick={handleTimeZoneOptionsOpen}>
                        <p className="my-profile-form__time-zone-select-value">{timeZoneLocation}</p>
                        <img className="my-profile-form__time-zone-select-arrow" src={optionRow} alt="Стрелочка открытия меню" />
                        {isTimeZoneOptionsOpen && (
                            <div className="my-profile-form__time-zone-options-container">
                                {timeZone.map((location, index) => (
                                    <p className="my-profile-form__time-zone-option" key={index} onClick={() => onSelectTimeZoneClick(location)}>{location.LABEL}</p>
                                ))}
                            </div>
                        )}
                    </div>
                    <span className={'my-profile-page-add-settings__message'}>{successInfo}</span>
                </div>
                <button onClick={() => changeTimeZone()} disabled={activeBtn} ref={btnChangeColor} className={'my-profile-page__save-change'}>Сохранить изменения</button>
            </div>
    )
}
export default MyProfilePageAdditionalSettings;