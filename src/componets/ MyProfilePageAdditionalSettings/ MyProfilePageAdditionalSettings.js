import React, {useRef, useState} from "react";
import './ MyProfilePageAdditionalSettings.css';
import timeZone from '../../utils/TimeZoneData/TimeZoneRu.json';
import optionRow from "../../img/INPUT-ICONS-24-ARROW.svg";


const MyProfilePageAdditionalSettings = () => {

    const [timeZoneLocation, setTimeZoneLocation] = useState('(UTC+3) Россия - Москва - московское время');
    const [timeZoneValue, setTimeZoneValue] = useState(3);
    const [isTimeZoneOptionsOpen, setTimeZoneOptionsOpen] = useState(false);
    const btnChangeColor = useRef(null)
    const [activeBtn, setActiveBtn] = useState(true)

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

        }
    }

    return (
            <div className={'my-profile-page-add-settings__wrapper'}>
                <h3>Дополнительные настройки</h3>
                <div className={'my-profile-page-add-settings__form'}>
                    <label>Часовой пояс</label>
                    <div className="my-profile-form__time-zone-select-container" onClick={handleTimeZoneOptionsOpen}>
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
                </div>
                <button disabled={activeBtn} ref={btnChangeColor} className={'my-profile-page__save-change'}>Сохранить изменения</button>
            </div>
    )
}

export default MyProfilePageAdditionalSettings;