import React from "react";
import './DetailsVotesPageListStartRegStartVote.css';
import DataTimeReg from "../VotesStatusComponents/StartDateRegVote/DataTimeReg";
import DataTimeVote from "../VotesStatusComponents/StartDateVote/DataTimeVote";

const DetailsVotesPageListStartRegStartVote = () => {

        return (
                <div className={'details-votes-page-list-start-reg-start-vote__wrapper'}>
                    <div>
                    </div>
                    <div className={'details-votes-page-list-start-reg-start-vote__main-content'}>
                        <div className={'main-content__datetime-status-reg-vote'}>
                            <span>Начало регистрации:</span>
                            <span>Конец регистрации:</span>
                            <span>Начало голосования:</span>
                            <span>Конец голосования:</span>
                        </div>
                        <div className={'main-content__datetime-status-reg-vote'}>
                            <span><DataTimeReg DateReg={'05.01.2022'} TimeReg={'18.00'}/></span>
                            <span><DataTimeReg DateReg={'05.01.2022'} TimeReg={'18.00'}/></span>
                            <span><DataTimeVote DateVote={'05.01.2022'} TimeVote={'18.00'}/></span>
                            <span><DataTimeVote DateVote={'05.01.2022'} TimeVote={'18.00'}/></span>
                        </div>
                        <div className={'main-content__datetime-status-reg-vote'}>
                            <span className={'datetime-status-reg-vote__status-color-item _days-colors-block-red'}>2 дня назад</span>
                            <span className={'datetime-status-reg-vote__status-color-item _days-colors-block-red'}>сегодня</span>
                            <span className={'datetime-status-reg-vote__status-color-item _days-colors-block-green'}>сегодня</span>
                            <span className={'datetime-status-reg-vote__status-color-item _days-colors-block-orange'}>через неделю</span>
                        </div>
                    </div>
                </div>
        )
}

export default DetailsVotesPageListStartRegStartVote;