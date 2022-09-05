import React, {useEffect, useState} from "react";
import './DetailsVotesPageDaysEndRegStartVote.css';
import {getRemainingTimePointEndReg} from "../../utils/CountTimeEndReg/CountTimeEndReg";
import {getRemainingTimePointStartVote} from "../../utils/CountTimeStartVote/CountTimeStartVote";
import dayjs from "dayjs";

const DetailsVotesPageDaysEndRegStartVote = (props) => {

    const {
        pointEndTimeReg,
        pointStartTimeVote,
        pointStartTimeReg,
        formatDate
    } = props;

    const defaultRegTime = {
        seconds: '00',
        minutes: '00',
        hours: '00',
        days: '0'
    }

    const defaultVoteTime = {
        seconds: '00',
        minutes: '00',
        hours: '00',
        days: '0'
    }

    const [remainingRegTime, setRemainingRegTime] = useState(defaultRegTime)
    const [remainingVoteTime, setRemainingVoteTime] = useState(defaultVoteTime)
    const timePointStartVoteDayjs = dayjs(pointStartTimeVote);

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

    function differentBetweenDaysEndReg() {
        let getEndPointDayMs = Date.parse(pointEndTimeReg);
        let currentDayForEnd = Date.now();
        let secDiffEndRegDay = Math.floor((getEndPointDayMs - currentDayForEnd) / 1000);
        let minDiffEndRegDay = Math.floor(secDiffEndRegDay / 60);
        let hourDiffEndRegDay = Math.floor(minDiffEndRegDay / 60);
        // let dayDiffEndRegDay = Math.floor(hourDiffEndRegDay / 24);
        {
            return hourDiffEndRegDay;
        }
    }

    function differentBetweenDaysStartVote() {
        let getStartVotePointDayMs = Date.parse(pointStartTimeVote);
        let currentDayStartVote = Date.now();
        let secDiffStartVote = Math.floor((getStartVotePointDayMs - currentDayStartVote) / 1000);
        let minDiffStartVote = Math.floor(secDiffStartVote / 60);
        let hourDiffStartVote = Math.floor(minDiffStartVote / 60);
        // let dayDiffStartVote = Math.floor(hourDiffStartVote / 24);
        {
            return hourDiffStartVote;
        }
    }

    function getPointDaysEndReg() {
        let endRegPoint = Date.parse(pointEndTimeReg);
        let startRegPoint = Date.parse(pointStartTimeReg);
        let secPointDayEndReg = (endRegPoint - startRegPoint) / 1000;
        let minPointDayEndReg = secPointDayEndReg / 60;
        let hourPointDayEndReg = Math.floor(minPointDayEndReg / 60);
        // let dayDiffStartVote = Math.floor(hourDiffStartVote / 24);
        {
            return hourPointDayEndReg;
        }
    }

    function getPointDaysStartVote() {
        let startVotePoint = Date.parse(pointStartTimeVote);
        let startRegPoint = Date.parse(pointStartTimeReg);
        let secPointStartVote = (startVotePoint - startRegPoint) / 1000;
        let minPointStartVote = secPointStartVote / 60;
        let hourPointStartVote = Math.floor(minPointStartVote / 60)
        {
            return hourPointStartVote;
        }
    }
    // Добавление правильной формы окончания слова в зависимости от числа
    const CorrectWordTimerDay = (value,  words) => {
        let cases = [2, 0, 1, 1, 1, 2];
        return words[
            (value % 100 > 4 && value % 100 < 20) ? 2 : cases[(value % 10 < 5) ? value % 10 : 5]
            ];
    }
    return (
            <div className={remainingRegTime.hiddenBlock ? 'details-votes-page-datetime-end-reg-start-vote__wrapper active' : 'details-votes-page-datetime-end-reg-start-vote__wrapper'}>
                    <div className={remainingRegTime.hiddenBlock ? 'details-votes-page-datetime-end-reg-start-vote__datetime-info-end-reg active' : 'details-votes-page-datetime-end-reg-start-vote__datetime-info-end-reg _hidden-block__end-registration-start-vote'}>
                        <div className={'datetime-info__end-registration'}>
                            <h2>{remainingRegTime.days} {CorrectWordTimerDay(remainingRegTime.days, ['день', 'дня', 'дней'])}</h2>
                            <div className={'end-registration__time-info'}>
                                <span className={'datetime-info__two-numbers'}>{remainingRegTime.hours}</span> час <span className={'datetime-info__two-numbers'}>{remainingRegTime.minutes}</span> мин <span className={'datetime-info__two-numbers'}>{remainingRegTime.seconds}</span>сек до конца регистрации
                            </div>
                        </div>
                        <div>
                            <input min={0} max={getPointDaysEndReg(pointStartTimeReg, pointEndTimeReg).toString()} value={differentBetweenDaysEndReg(pointEndTimeReg).toString()} onChange={e => remainingRegTime.hours(e)} className={'datetime-info__range datetime-info__range-orange'} type={'range'}/>
                        </div>
                    </div>
                    <div className={'details-votes-page-datetime-end-reg-start-vote__datetime-info-start-vote'}>
                        <div className={'datetime-info__start-vote'}>
                            <h2>{remainingVoteTime.days} {CorrectWordTimerDay(remainingVoteTime.days, ['день', 'дня', 'дней'])}</h2>
                            <div className={'start-vote__time-info'}>
                                <span className={'datetime-info__two-numbers'}>{remainingVoteTime.hours}</span> час <span className={'datetime-info__two-numbers'}>{remainingVoteTime.minutes}</span> мин <span className={'datetime-info__two-numbers'}>{remainingVoteTime.seconds}</span>сек до начала голосования
                            </div>
                        </div>
                        <div>
                            <input min={0} max={getPointDaysStartVote(pointStartTimeVote, pointStartTimeReg).toString()} value={differentBetweenDaysStartVote(pointStartTimeVote).toString()} onChange={e => remainingVoteTime.hours(e)} className={'datetime-info__range datetime-info__range-green'} type={'range'}/>
                        </div>
                    </div>
            </div>
    )
}
export default DetailsVotesPageDaysEndRegStartVote;