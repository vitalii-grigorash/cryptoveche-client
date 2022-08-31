import dayjs from "dayjs";
import React from "react";

export function getRemainingTimePointStartVote(timePointStartVote) {

    const timePointStartVoteDayjs = dayjs(timePointStartVote);
    const nowDayjs = dayjs();
    if(timePointStartVoteDayjs.isBefore(nowDayjs)) {
        return {
            seconds: '00',
            minutes: '00',
            hours: '00',
            days: 0
        }
    }
    return {
        seconds : getRemainingSeconds(nowDayjs, timePointStartVoteDayjs),
        minutes : getRemainingMinutes(nowDayjs, timePointStartVoteDayjs),
        hours : getRemainingHours(nowDayjs, timePointStartVoteDayjs),
        days : getRemainingDays(nowDayjs, timePointStartVoteDayjs)
    }
}

function getRemainingSeconds(nowDayjs, timePointStartVoteDayjs) {
    const seconds = timePointStartVoteDayjs.diff(nowDayjs, 'seconds') % 60;
    return padWithZeros(seconds, 2);
}

function getRemainingMinutes(nowDayjs, timePointStartVoteDayjs) {
    const minutes = timePointStartVoteDayjs.diff(nowDayjs, 'minutes') % 60;
    return padWithZeros(minutes, 2);
}

function getRemainingHours(nowDayjs, timePointStartVoteDayjs) {
    const hours = timePointStartVoteDayjs.diff(nowDayjs, 'hours') % 24;
    return padWithZeros(hours, 2);
}

function getRemainingDays(nowDayjs, timePointStartVoteDayjs) {
    const days = timePointStartVoteDayjs.diff(nowDayjs, 'days');
    return days;
}

function padWithZeros(number, minLength) {
    const numberString = number.toString();
    if(numberString.length >= minLength) return numberString;
    return '0'.repeat(minLength - numberString.length) + numberString;
}