import React from "react";
import './DetailsVotesPageDaysEndRegStartVote.css';

const DetailsVotesPageDaysEndRegStartVote = () => {

    return (

            <div className={'details-votes-page-datetime-end-reg-start-vote__wrapper'}>
                    <div className={'details-votes-page-datetime-end-reg-start-vote__datetime-info'}>
                        <div className={'datetime-info__end-registration-start-vote'}>
                            <h2>2 дня</h2><span>23 часа, 15 минут до конца регистрации</span>
                        </div>
                        <div>
                            <input min={0} max={4} value={2} step={1} className={'datetime-info__range datetime-info__range-orange'} type={'range'}/>
                        </div>
                    </div>
                    <div className={'details-votes-page-datetime-end-reg-start-vote__datetime-info'}>
                        <div className={'datetime-info__end-registration-start-vote'}>
                            <h2>5 дней</h2><span>23 часа, 15 минут до начала голосования</span>
                        </div>
                        <div>
                            <input min={0} max={10} value={5} step={1} className={'datetime-info__range datetime-info__range-green'} type={'range'}/>
                        </div>
                    </div>
            </div>
    )

}

export default DetailsVotesPageDaysEndRegStartVote;