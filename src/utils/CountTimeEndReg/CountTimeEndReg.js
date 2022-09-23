import dayjs from "dayjs";
import React from "react";

export function getRemainingTimePointEndReg (timePointEndReg) {

    const timePointEndRegDayjs = dayjs(timePointEndReg);
    const nowDayjs = dayjs();

    if(timePointEndRegDayjs.isBefore(nowDayjs)) {
        return {
            seconds: '00',
            minutes: '00',
            hours: '00',
            days: '0',
            hiddenBlock: true
        }
    }
    return {
        seconds : getRemainingSeconds(nowDayjs, timePointEndRegDayjs),
        minutes : getRemainingMinutes(nowDayjs, timePointEndRegDayjs),
        hours : getRemainingHours(nowDayjs, timePointEndRegDayjs),
        days : getRemainingDays(nowDayjs, timePointEndRegDayjs),
        hiddenBlock: false
    }
}

function getRemainingSeconds(nowDayjs, timePointEndRegDayjs) {
    const seconds = timePointEndRegDayjs.diff(nowDayjs, 'seconds') % 60;
    return padWithZeros(seconds, 2);
}

function getRemainingMinutes(nowDayjs, timePointEndRegDayjs) {
        const minutes = timePointEndRegDayjs.diff(nowDayjs, 'minutes') % 60;
        return padWithZeros(minutes, 2);
}

function getRemainingHours(nowDayjs, timePointEndRegDayjs) {
    const hours = timePointEndRegDayjs.diff(nowDayjs, 'hours') % 24;
    return padWithZeros(hours, 2);
}

function getRemainingDays(nowDayjs, timePointEndRegDayjs) {
    const days = timePointEndRegDayjs.diff(nowDayjs, 'days');
    return days.toString();
}

function padWithZeros(number, minLength) {
    const numberString = number.toString();
    if(numberString.length >= minLength) return numberString;
    return '0'.repeat(minLength - numberString.length) + numberString;
}