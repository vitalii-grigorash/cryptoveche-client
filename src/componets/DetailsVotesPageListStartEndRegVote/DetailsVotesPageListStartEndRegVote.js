import React from "react";
import './DetailsVotesPageListStartEndRegVote.css';
import DataTime from '../VotesStatusComponents/DateTime/DateTime';
import NameStatusRegAndVote from "./NameStatusRegAndVote/NameStatusRegAndVote";
import StatusDayColorRed from "./StatusDayColorRed/StatusDayColorRed";
import StatusDayColorGreen from "./StatusDayColorGreen/StatusDayColorGreen";
import StatusDayColorYellow from "./StatusDayColorYellow/StatusDayColorYellow";
import ListStartEndRegMobile from "./ListStartEndRegMobile/ListStartEndRegMobile";
import ListStartEndVoteMobile from "./ListStartEndVoteMobile/ListStartEndVoteMobile";


const DetailsVotesPageListStartEndRegVote = () => {

        return (
                <div className={'details-votes-page-list-start-end-reg-vote__wrapper'}>
                    <div>
                    </div>
                    <div className={'details-votes-page-list-start-end-reg-vote__main-content'}>
                        <div className={'main-content__datetime-status-reg-vote'}>
                            <NameStatusRegAndVote nameStatusRegAndVote={'Начало регистрации:'}/>
                            <NameStatusRegAndVote nameStatusRegAndVote={'Конец регистрации:'}/>
                            <NameStatusRegAndVote nameStatusRegAndVote={'Начало голосования:'}/>
                            <NameStatusRegAndVote nameStatusRegAndVote={'Конец голосования:'}/>
                        </div>
                        <div className={'main-content__datetime-status-reg-vote'}>
                            <DataTime dateTimeDate={'05.01.2022'} dateTimeWatch={'18.00'}/>
                            <DataTime dateTimeDate={'05.01.2022'} dateTimeWatch={'18.00'}/>
                            <DataTime dateTimeDate={'05.01.2022'} dateTimeWatch={'18.00'}/>
                            <DataTime dateTimeDate={'05.01.2022'} dateTimeWatch={'18.00'}/>
                        </div>
                        <div className={'main-content__datetime-status-reg-vote-color-day'}>
                            <StatusDayColorRed nameStatusDay={'2 дня назад'}/>
                            <StatusDayColorRed nameStatusDay={'сегодня'}/>
                            <StatusDayColorGreen nameStatusDay={'сегодня'}/>
                            <StatusDayColorYellow nameStatusDay={'через неделю'}/>
                        </div>
                            <ListStartEndRegMobile nameStartEndRegVote={'Начало и конец регистрации:'}/>
                            <ListStartEndVoteMobile nameStartEndVote={'Начало и конец голосования:'}/>
                    </div>
                </div>
        )
}

export default DetailsVotesPageListStartEndRegVote;