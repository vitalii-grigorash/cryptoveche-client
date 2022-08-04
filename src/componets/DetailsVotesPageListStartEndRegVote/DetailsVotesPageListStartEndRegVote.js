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
        voteData
    } = props;

    const startEventDate = voteData.event_start_time.slice(0, 10).split('-').reverse().join('.');
    const startEventTime = voteData.event_start_time.slice(11, voteData.event_start_time.length - 4);
    const endEventDate = voteData.event_end_time.slice(0, 10).split('-').reverse().join('.');
    const endEventTime = voteData.event_end_time.slice(11, voteData.event_end_time.length - 4);

    const startEventRegDate = voteData.registration_start_time.slice(0, 10).split('-').reverse().join('.');
    const startEventRegTime = voteData.registration_start_time.slice(11, voteData.registration_start_time.length - 4);
    const endEventRegDate = voteData.registration_end_time.slice(0, 10).split('-').reverse().join('.');
    const endEventRegTime = voteData.registration_end_time.slice(11, voteData.registration_end_time.length - 4);

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
                    <DataTime dateTimeDate={startEventRegDate} dateTimeWatch={startEventRegTime} />
                    <DataTime dateTimeDate={endEventRegDate} dateTimeWatch={endEventRegTime} />
                    <DataTime dateTimeDate={startEventDate} dateTimeWatch={startEventTime} />
                    <DataTime dateTimeDate={endEventDate} dateTimeWatch={endEventTime} />
                </div>
                <div className={'main-content__datetime-status-reg-vote-color-day'}>
                    <StatusDayColorRed nameStatusDay={'2 дня назад'} />
                    <StatusDayColorRed nameStatusDay={'сегодня'} />
                    <StatusDayColorGreen nameStatusDay={'сегодня'} />
                    <StatusDayColorYellow nameStatusDay={'через неделю'} />
                </div>
                <ListStartEndRegMobile
                    title={'Начало и конец регистрации:'}
                    startDate={startEventRegDate}
                    startTime={startEventRegTime}
                    endDate={endEventRegDate}
                    endTime={endEventRegTime}
                />
                <ListStartEndVoteMobile
                    title={'Начало и конец голосования:'}
                    startDate={startEventDate}
                    startTime={startEventTime}
                    endDate={endEventDate}
                    endTime={endEventTime}
                />
            </div>
        </div>
    )
}

export default DetailsVotesPageListStartEndRegVote;
