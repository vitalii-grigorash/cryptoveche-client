import React from "react";
import './VotesPageActiveVotes.css'
import votes_active_page_icon_time from '../../img/VotesPageActiveVotes_time_icon.svg';
import icon_data from "../../img/MyVotes_data_icon.svg";
import icon_time from "../../img/MyVotes_icon_time.svg";
import icon_checkmark from "../../img/MyVotes_icon_checkmark.svg";

const VotesPageActiveVotes = (props) => {

    return (

        <div className={'votes-page-active-votes__wrapper'}>
            <div className={'active-votes__title'}>
                <h2>{props.titleVoteData}</h2>
                <h3>Ученый совет</h3>
                <div className={'active-votes__title-timezone'}>
                     <img alt={'иконка часы'} src={votes_active_page_icon_time}/><span>(UTC+3) Россия - Москва</span>
                </div>
            </div>
            <div className={'active-votes__status-and-start-reg-start-vote'}>
                    <div className={'vote-form__status-block-current-status'}>
                        <div className={'vote-form__status-block__current-status__registration-in-progress'}>
                            <ul><li>{props.regStatus}</li></ul>
                        </div>
                        <div className={'vote-form__status-block-current-status__open'}>
                            <ul><li>{props.voteStatus}</li></ul></div>
                    </div>
                    <div className={'vote-form__status-block-start-vote'}>
                        <h4>Начало регистрации:</h4>
                        <div className={'start-vote__data'}>
                            <img alt={'иконка календарь'} src={icon_data}/>
                            <span>{props.startDateReg}</span>
                            <img alt={'иконка время'} src={icon_time}/>
                            <span>{props.startTimeReg}</span>
                        </div>
                    </div>
                <div className={'vote-form__status-block-start-vote'}>
                    <h4>Начало голосования:</h4>
                    <div className={'start-vote__data'}>
                        <img alt={'иконка календарь'} src={icon_data}/>
                        <span>{props.startDateVote}</span>
                        <img alt={'иконка время'} src={icon_time}/>
                        <span>{props.startTimeVote}</span>
                    </div>
                </div>
                <div className={'vote-form__status-block__checkmark-reg'}>
                    <span className={'vote-form__status-block__checkmark-reg-green'}>
                        <img alt={'икона текущего статуса регистарции'} src={icon_checkmark}/>{props.currentStatus}</span>
                </div>
            </div>
        </div>
    )

}

export default VotesPageActiveVotes;