import React, {useEffect, useState} from "react";
import './DetailsVotesPageDaysEndRegStartVote.css';
import {getRemainingTimePointEndReg} from "../../utils/CountTimeEndReg/CountTimeEndReg";
import {getRemainingTimePointStartVote} from "../../utils/CountTimeStartVote/CountTimeStartVote";

const defaultRegTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: 0
}

const defaultVoteTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: 0
}

const DetailsVotesPageDaysEndRegStartVote = (props) => {

    const {
        pointEndTimeReg,
        pointStartTimeVote
    } = props;

    const [remainingRegTime, setRemainingRegTime] = useState(defaultRegTime)
    const [remainingVoteTime, setRemainingVoteTime] = useState(defaultVoteTime)

    useEffect(() => {
        const intervalId = setInterval(() => {
              updateRemainingRegTime(pointEndTimeReg);
              updateRemainingVoteTime(pointStartTimeVote);
        }, 1000);
        return () => clearInterval(intervalId)
    }, [pointEndTimeReg, pointStartTimeVote])

    function updateRemainingRegTime(countEndTimeReg) {
            setRemainingRegTime(getRemainingTimePointEndReg(countEndTimeReg));
    }

    function updateRemainingVoteTime(countStartTimeVote) {
           setRemainingVoteTime(getRemainingTimePointStartVote(countStartTimeVote));
    }

    return (
            <div className={'details-votes-page-datetime-end-reg-start-vote__wrapper'}>
                    <div className={'details-votes-page-datetime-end-reg-start-vote__datetime-info-end-reg _hidden-block__end-registration-start-vote'}>
                        <div className={'datetime-info__end-registration'}>
                            <h2>{remainingRegTime.days} дня</h2>
                            <div className={'end-registration__time-info'}>
                                <span className={'datetime-info__two-numbers'}>{remainingRegTime.hours}</span> час <span className={'datetime-info__two-numbers'}>{remainingRegTime.minutes}</span> мин <span className={'datetime-info__two-numbers'}>{remainingRegTime.seconds}</span>сек до конца регистрации
                            </div>
                        </div>
                        <div>
                            <input min={0} max={6} defaultValue={3} step={1} className={'datetime-info__range datetime-info__range-orange'} type={'range'}/>
                        </div>
                    </div>
                    <div className={'details-votes-page-datetime-end-reg-start-vote__datetime-info-start-vote'}>
                        <div className={'datetime-info__start-vote'}>
                            <h2>{remainingVoteTime.days} дня</h2>
                            <div className={'start-vote__time-info'}>
                                <span className={'datetime-info__two-numbers'}>{remainingVoteTime.hours}</span> час <span className={'datetime-info__two-numbers'}>{remainingVoteTime.minutes}</span> мин <span className={'datetime-info__two-numbers'}>{remainingVoteTime.seconds}</span>сек до начала голосования
                            </div>
                        </div>
                        <div>
                            <input min={0} max={10} defaultValue={5} step={1} className={'datetime-info__range datetime-info__range-green'} type={'range'}/>
                        </div>
                    </div>
            </div>
    )
}
export default DetailsVotesPageDaysEndRegStartVote;