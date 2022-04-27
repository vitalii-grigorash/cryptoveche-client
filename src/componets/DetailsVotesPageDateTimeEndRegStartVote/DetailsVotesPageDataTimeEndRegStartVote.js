import React from "react";
import './DetailsVotesPageDateTimeEndRegStartVote.css';

const DetailsVotesPageDateTimeEndRegStartVote = () => {

    return (

            <div className={'details-votes-page-datetime-end-reg-start-vote__wrapper'}>
                    <div className={'details-votes-page-datetime-end-reg-start-vote__datetime-info'}>
                        <div className={'datetime-info__end-registration-start-vote'}>
                            <h2>2 дня</h2><span>23 часа, 15 минут до конца регистрации</span>
                        </div>
                        <div>
                            <input className={'datetime-info__range'} type={'range'}/>
                        </div>

                    </div>
                    <div className={'details-votes-page-datetime-end-reg-start-vote__datetime-info'}>
                        <div className={'datetime-info__end-registration-start-vote'}>
                            <h2>5 дней</h2><span>23 часа, 15 минут до начала голосования</span>
                        </div>
                        <div>
                            <input className={'datetime-info__range'} type={'range'}/>
                        </div>

                    </div>

            </div>
    )

}

export default DetailsVotesPageDateTimeEndRegStartVote;