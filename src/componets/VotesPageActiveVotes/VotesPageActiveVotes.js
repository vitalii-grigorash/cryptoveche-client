import React from "react";
import './VotesPageActiveVotes.css'
import votes_active_page_icon_time from '../../img/VotesPageActiveVotes_time_icon.svg';
import icon_data from "../../img/MyVotes_data_icon.svg";
import icon_time from "../../img/MyVotes_icon_time.svg";
import icon_checkmark from "../../img/MyVotes_icon_checkmark.svg";

const VotesPageActiveVotes = () => {

    return (

        <div className={'votes-page-active-votes__wrapper'}>
            <div className={'active-votes__title'}>
                <h2>Выбор делегатов конференции в Ученый Совет СПбГУ и еще парочка слов чтобы совсем уже было длинно</h2>
                <h3>Ученый совет</h3>
                <div className={'active-votes__title-timezone'}>
                     <img alt={'иконка часы'} src={votes_active_page_icon_time}/><span>(UTC+3) Россия - Москва</span>
                </div>
            </div>
            <div className={'active-votes__status-and-start-reg-start-vote'}>
                    <div className={'vote-form__status-block-current-status'}>
                        <div className={'vote-form__status-block__current-status__registration-in-progress'}>
                            <ul><li>Ожидание регистрации</li></ul>
                        </div>
                        <div className={'vote-form__status-block-current-status__open'}>
                            <ul><li>Открытое</li></ul></div>
                    </div>

                    <div className={'vote-form__status-block-start-vote'}>
                        <h5>Начало регистрации:</h5>
                        <div className={'start-vote__data'}>
                            <img alt={''} src={icon_data}/>
                            <span>5.01.2022</span>
                            <img alt={''} src={icon_time}/>
                            <span>18.00</span>
                        </div>
                    </div>

                <div className={'vote-form__status-block-start-vote'}>
                    <h5>Начало голосования:</h5>
                    <div className={'start-vote__data'}>
                        <img alt={''} src={icon_data}/>
                        <span>5.01.2022</span>
                        <img alt={''} src={icon_time}/>
                        <span>18.00</span>
                    </div>
                </div>
                <div className={'vote-form__status-block__checkmark-reg'}>
                    <span className={'vote-form__status-block__checkmark-reg-green'}><img alt={''} src={icon_checkmark}/>Ожидайте регистрации</span>
                </div>
            </div>
        </div>
    )

}

export default VotesPageActiveVotes;