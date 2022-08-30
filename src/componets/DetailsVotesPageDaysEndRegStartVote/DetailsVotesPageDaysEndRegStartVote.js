import React from "react";
import './DetailsVotesPageDaysEndRegStartVote.css';

const DetailsVotesPageDaysEndRegStartVote = () => {



    return (
            <div className={'details-votes-page-datetime-end-reg-start-vote__wrapper'}>
                    <div className={'details-votes-page-datetime-end-reg-start-vote__datetime-info _hidden-block__end-registration-start-vote'}>
                        <div className={'datetime-info__end-registration-start-vote'}>
                            <h2>2 дня</h2><span>23 часа, 15 мин до конца регистрации</span>
                        </div>
                        <div>
                            <input min={0} max={48} defaultValue={23} step={1} className={'datetime-info__range datetime-info__range-orange'} type={'range'}/>
                        </div>
                    </div>
                    <div className={'details-votes-page-datetime-end-reg-start-vote__datetime-info'}>
                        <div className={'datetime-info__end-registration-start-vote'}>
                            <h2>2 дня</h2><span>6 часов, 15 мин до начала голосования</span>
                        </div>
                        <div>
                            <input min={0} max={10} defaultValue={5} step={1} className={'datetime-info__range datetime-info__range-green'} type={'range'}/>
                        </div>
                    </div>
            </div>
    )

}
export default DetailsVotesPageDaysEndRegStartVote;