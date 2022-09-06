import React from "react";
import './DetailsVotesPageListStartEndRegVote.css';
import DataTime from '../VotesStatusComponents/DateTime/DateTime';
import NameStatusRegAndVote from "./NameStatusRegAndVote/NameStatusRegAndVote";
import StatusDayStartRegColorRed from "./StatusDayStartRegColorRed/StatusDayStartRegColorRed";
import StatusDayStartVoteColorGreen from "./StatusDayStartVoteColorGreen/StatusDayStartVoteColorGreen";
import StatusDayEndVoteColorYellow from "./StatusDayEndVoteColorYellow/StatusDayEndVoteColorYellow";
import StatusDayEndRegColorRed from "./StatusDayEndRegColorRed/StatusDayEndRegColorRed";
import ListStartEndRegMobile from "./ListStartEndRegMobile/ListStartEndRegMobile";
import ListStartEndVoteMobile from "./ListStartEndVoteMobile/ListStartEndVoteMobile";


const DetailsVotesPageListStartEndRegVote = (props) => {

    const {
        voteData,
        formatDate,
        formatTime
    } = props;

    const titleStatusRegAndVote = [
        {name: 'Начало регистрации:'},
        {name: 'Конец регистрации:'},
        {name: 'Начало голосования:'},
        {name: 'Конец голосования:'}
    ]

    return (
        <div className={'details-votes-page-list-start-end-reg-vote__wrapper'}>
            <div />
            <div className={'details-votes-page-list-start-end-reg-vote__main-content'}>
                <div className={'main-content__datetime-status-reg-vote'}>
                    {React.Children.toArray(titleStatusRegAndVote.map((el) => {
                        return <NameStatusRegAndVote
                            nameStatusRegAndVote={el.name}
                        />
                        }))
                    }
                </div>
                <div className={'main-content__datetime-status-reg-vote'}>
                    <DataTime dateTimeDate={formatDate(voteData.registration_start_time)} dateTimeWatch={formatTime(voteData.registration_start_time)} />
                    <DataTime dateTimeDate={formatDate(voteData.registration_end_time)} dateTimeWatch={formatTime(voteData.registration_end_time)} />
                    <DataTime dateTimeDate={formatDate(voteData.event_start_time)} dateTimeWatch={formatTime(voteData.event_start_time)} />
                    <DataTime dateTimeDate={formatDate(voteData.event_end_time)} dateTimeWatch={formatTime(voteData.event_end_time)} />
                </div>
                <div className={'main-content__datetime-status-reg-vote-color-day'}>
                    <StatusDayStartRegColorRed timeDate={voteData.registration_start_time}/>
                    <StatusDayEndRegColorRed timeDate={voteData.registration_end_time}/>
                    <StatusDayStartVoteColorGreen timeDate={voteData.event_start_time}/>
                    <StatusDayEndVoteColorYellow timeDate={voteData.event_end_time}/>
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
