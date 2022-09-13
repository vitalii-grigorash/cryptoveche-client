import React, {useEffect, useRef, useState} from "react";
import './DetailsVotesPageDaysEndRegStartVote.css';
import {getRemainingTimePointEndReg} from "../../utils/CountTimeEndReg/CountTimeEndReg";
import {getRemainingTimePointStartVote} from "../../utils/CountTimeStartVote/CountTimeStartVote";

const DetailsVotesPageDaysEndRegStartVote = (props) => {

    const {
        pointEndTimeReg,
        pointStartTimeVote,
        pointStartTimeReg
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

    const [remainingRegTime, setRemainingRegTime] = useState(defaultRegTime);
    const [remainingVoteTime, setRemainingVoteTime] = useState(defaultVoteTime);
    const inputEndRegRef = useRef(null);
    const inputStartVoteRef = useRef(null);

    useEffect(() => {
        updateRemainingRegTime(pointEndTimeReg);
        updateRemainingVoteTime(pointStartTimeVote);
        changeRangeInputRegEnd();
        changeRangeInputStartVote();
    },[pointEndTimeReg, pointStartTimeVote])

    useEffect(() => {
        const intervalId = setInterval(() => {
              updateRemainingRegTime(pointEndTimeReg);
              updateRemainingVoteTime(pointStartTimeVote);
              changeRangeInputRegEnd();
              changeRangeInputStartVote();
        }, 1000);
        return () => clearInterval(intervalId)
    }, [pointEndTimeReg, pointStartTimeVote])

    function updateRemainingRegTime(countEndTimeReg) {
        setRemainingRegTime(getRemainingTimePointEndReg(countEndTimeReg));
    }

    function updateRemainingVoteTime(countStartTimeVote) {
        setRemainingVoteTime(getRemainingTimePointStartVote(countStartTimeVote));
    }

    function differentBetweenDays(pointEndDay) {
        let getEndPointDayMs = Date.parse(pointEndDay);
        let currentDayBeforeEnd = Date.now();
        let secDiffEndDay = (getEndPointDayMs - currentDayBeforeEnd) / 1000;
        let minDiffEndDay = secDiffEndDay / 60;
        let hourDiffEndDay = minDiffEndDay / 60;
        // let dayDiffEndRegDay = Math.floor(hourDiffEndRegDay / 24);
        {
            return minDiffEndDay;
        }
    }

    function getPointDaysEndReg() {
        let endRegPoint = Date.parse(pointEndTimeReg);
        let startRegPoint = Date.parse(pointStartTimeReg);
        let secPointDayEndReg = (endRegPoint - startRegPoint) / 1000;
        let minPointDayEndReg = secPointDayEndReg / 60;
        let hourPointDayEndReg = minPointDayEndReg / 60;
        // let dayDiffStartVote = Math.floor(hourDiffStartVote / 24);
        {
            return minPointDayEndReg;
        }
    }

    function getPointDaysStartVote() {
        let startVotePoint = Date.parse(pointStartTimeVote);
        let startRegPoint = Date.parse(pointStartTimeReg);
        let secPointStartVote = (startVotePoint - startRegPoint) / 1000;
        let minPointStartVote = secPointStartVote / 60;
        let hourPointStartVote = minPointStartVote / 60;
        {
            return minPointStartVote;
        }
    }
    // Функция для расчета длины в процентах для полоски таймера конец регистрации
    function changeRangeInputRegEnd() {
        const valPercent = (inputEndRegRef.current.value / inputEndRegRef.current.max) * 100;
        const getIdEndRegDivStrip = document.getElementById('width-time-info-input-reg');
        if(valPercent) {
            getIdEndRegDivStrip.style.width = `${valPercent}%`;
        } else {
            getIdEndRegDivStrip.style.width = '0%';
        }
    }
    // Функция для расчета длины в процентах для полоски таймера начало голосования
    function changeRangeInputStartVote() {
        const valPercent = (inputStartVoteRef.current.value / inputStartVoteRef.current.max) * 100;
        const getIdStartVoteDivStrip = document.getElementById('width-time-info-input-vote');
        if(valPercent) {
            getIdStartVoteDivStrip.style.width = `${valPercent}%`;
        } else {
            getIdStartVoteDivStrip.style.width = '0%';
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
                        <div className={'end-registration__time-info-input-reg'}>
                            <input ref={inputEndRegRef} min={0} max={getPointDaysEndReg(pointStartTimeReg, pointEndTimeReg).toString()} value={differentBetweenDays(pointEndTimeReg).toString()} onChange={e => remainingRegTime.hours(e)} className={'datetime-info__range datetime-info__range-orange'} type={'range'}/>
                            <div id={'width-time-info-input-reg'} className={'time-info-input-reg__timer-strip'}></div>
                        </div>
                    </div>
                    <div className={'details-votes-page-datetime-end-reg-start-vote__datetime-info-start-vote'}>
                        <div className={'datetime-info__start-vote'}>
                            <h2>{remainingVoteTime.days} {CorrectWordTimerDay(remainingVoteTime.days, ['день', 'дня', 'дней'])}</h2>
                            <div className={'start-vote__time-info'}>
                                <span className={'datetime-info__two-numbers'}>{remainingVoteTime.hours}</span> час <span className={'datetime-info__two-numbers'}>{remainingVoteTime.minutes}</span> мин <span className={'datetime-info__two-numbers'}>{remainingVoteTime.seconds}</span>сек до начала голосования
                            </div>
                        </div>
                        <div className={'start-vote__time-info-input-vote'}>
                            <input ref={inputStartVoteRef} min={0} max={getPointDaysStartVote(pointStartTimeVote, pointStartTimeReg).toString()} value={differentBetweenDays(pointStartTimeVote).toString()} onChange={e => remainingVoteTime.hours(e)} className={'datetime-info__range datetime-info__range-green'} type={'range'}/>
                            <div id={'width-time-info-input-vote'} className={'time-info-input-vote__timer-strip'}></div>
                        </div>
                    </div>
            </div>
    )
}
export default DetailsVotesPageDaysEndRegStartVote;