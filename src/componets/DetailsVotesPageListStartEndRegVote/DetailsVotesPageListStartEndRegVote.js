import React from "react";
import './DetailsVotesPageListStartEndRegVote.css';
import DataTime from '../VotesStatusComponents/DateTime/DateTime';
import NameStatusRegAndVote from "./NameStatusRegAndVote/NameStatusRegAndVote";
import StatusDayColorRed from "./StatusDayColorRed/StatusDayColorRed";
import StatusDayColorGreen from "./StatusDayColorGreen/StatusDayColorGreen";
import StatusDayColorYellow from "./StatusDayColorYellow/StatusDayColorYellow";
import ListStartEndRegMobile from "./ListStartEndRegMobile/ListStartEndRegMobile";
import ListStartEndVoteMobile from "./ListStartEndVoteMobile/ListStartEndVoteMobile";

const DetailsVotesPageListStartEndRegVote = (props) => {

    const {
        voteData,
        formatDate,
        formatTime
    } = props;

    return (
        <div className={'details-votes-page-list-start-end-reg-vote__wrapper'}>
            <div />
            <div className={'details-votes-page-list-start-end-reg-vote__main-content'}>
                <div className={'main-content__datetime-status-reg-vote'}>
                    <NameStatusRegAndVote nameStatusRegAndVote={'Начало регистрации:'} />
                    <NameStatusRegAndVote nameStatusRegAndVote={'Конец регистрации:'} />
                    <NameStatusRegAndVote nameStatusRegAndVote={'Начало голосования:'} />
                    <NameStatusRegAndVote nameStatusRegAndVote={'Конец голосования:'} />
                </div>
                <div className={'main-content__datetime-status-reg-vote'}>
                    <DataTime dateTimeDate={formatDate(voteData.registration_start_time)} dateTimeWatch={formatTime(voteData.registration_start_time)} />
                    <DataTime dateTimeDate={formatDate(voteData.registration_end_time)} dateTimeWatch={formatTime(voteData.registration_end_time)} />
                    <DataTime dateTimeDate={formatDate(voteData.event_start_time)} dateTimeWatch={formatTime(voteData.event_start_time)} />
                    <DataTime dateTimeDate={formatDate(voteData.event_end_time)} dateTimeWatch={formatTime(voteData.event_end_time)} />
                </div>
                <div className={'main-content__datetime-status-reg-vote-color-day'}>
                    <StatusDayColorRed nameStatusDay={'2 дня назад'} />
                    <StatusDayColorRed nameStatusDay={'сегодня'} />
                    <StatusDayColorGreen nameStatusDay={'сегодня'} />
                    <StatusDayColorYellow nameStatusDay={'через неделю'} />
                </div>
                <ListStartEndRegMobile
                    title={'Начало и конец регистрации:'}
                    startDate={formatDate(voteData.registration_start_time)}
                    startTime={formatTime(voteData.registration_start_time)}
                    endDate={formatDate(voteData.registration_end_time)}
                    endTime={formatTime(voteData.registration_end_time)}
                />
                <ListStartEndVoteMobile
                    title={'Начало и конец голосования:'}
                    startDate={formatDate(voteData.event_start_time)}
                    startTime={formatTime(voteData.event_start_time)}
                    endDate={formatDate(voteData.event_end_time)}
                    endTime={formatTime(voteData.event_end_time)}
                />
            </div>
        </div>
    )
}

export default DetailsVotesPageListStartEndRegVote;
