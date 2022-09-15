import dayjs from "dayjs";
import React from "react";

export function getRemainingTimePointEventsVote(point) {
    const timePointEventsDayjs = dayjs(point);
    const nowDayjs = dayjs();
        if (nowDayjs.isAfter(timePointEventsDayjs)) {
            return {
                days: getRemainingDaysAfter(nowDayjs, timePointEventsDayjs)
            }
        } else {
            return {
                days: getRemainingDays(nowDayjs, timePointEventsDayjs)
            }
        }
    }

const CorrectWordTimerDay = (value,  words) => {
    let cases = [2, 0, 1, 1, 1, 2];
    return words[
        (value % 100 > 4 && value % 100 < 20) ? 2 : cases[(value % 10 < 5) ? value % 10 : 5]
        ];
}

function getRemainingDays(nowDayjs, timePointEventDay) {
    const days = timePointEventDay.diff(nowDayjs, 'days');
    if (nowDayjs.date() === timePointEventDay.date() && nowDayjs.month() === timePointEventDay.month() && nowDayjs.year() === timePointEventDay.year()) {
        return 'сегодня';
    } else {
        if (days === 0) {
            return 'завтра';
        } else {
            return `через ${days.toString()} ${CorrectWordTimerDay(days.toString(), ['день', 'дня', 'дней'])}`;
        }
    }
}

function getRemainingDaysAfter(nowDayjs, timePointEventDay) {
    const days = nowDayjs.diff(timePointEventDay, 'days');
    if (nowDayjs.date() === timePointEventDay.date() && nowDayjs.month() === timePointEventDay.month() && nowDayjs.year() === timePointEventDay.year()) {
        return 'сегодня';
    } else {
        if (days === 0) {
            return 'вчера';
        } else {
            return `${days.toString()} ${CorrectWordTimerDay(days.toString(), ['день', 'дня', 'дней'])} назад`;
        }
    }
}
