import React, { useState, useEffect } from "react";
import './DetailsVotesPageGeneralInformation.css';
import VotesPageTitleTimeZone from "../VotesPageTitleTimeZone/VotesPageTitleTimeZone";
import DetailsVotesPageStatusPossibleRevoteCancelReg
    from "../DetailsVotesPageStatusPossibleRevoteCancelReg/DetailsVotesPageStatusPossibleRevoteCancelReg";
import CurrentStatusVote from "../VotesStatusComponents/CurrentStatusVote/CurrentStatusVote";
import ConfirmRegMaterialsVote from "../VotesStatusComponents/ConfirmRegMaterialsVote/ConfirmRegMaterialsVote";
import DetailsVotesPageListStartEndRegVote
    from "../DetailsVotesPageListStartEndRegVote/DetailsVotesPageListStartEndRegVote";
import RegistrationButton from "../ButtonsComponets/RegistrationButton/RegistrationButton";
import MaterialsVoteQuestion from "../VotesStatusComponents/MaterialsVoteQuestion/MaterialsVoteQuestion";

const DetailsVotesPageGeneralInformation = (props) => {

    const {
        currentEventData,
        handleCurrentEvents,
        toggleEventRegistration,
        showEventResult
    } = props;

    const [labelText, setLabelText] = useState('');

    useEffect(() => {
        if (currentEventData.status === 'waiting') {
            setLabelText('Ожидание регистрации');
        } else if (currentEventData.status === 'registration') {
            if (currentEventData.isVoting) {
                setLabelText('Регистрация и голосование');
            } else {
                setLabelText('Идет регистрация');
            }
        } else if (currentEventData.status === 'event waiting') {
            setLabelText('Ожидание голосования');
        } else if (currentEventData.status === 'voting') {
            setLabelText('Идет голосование');
        } else if (currentEventData.status === 'ended') {
            setLabelText('Голосование завершено');
        } else if (currentEventData.status === 'quorum_unpresant') {
            setLabelText('Кворум не достигнут');
        }
    }, [currentEventData])

    return (
        <div>
            <div className={'details-votes-page-general-info__main-content'}>
                <div className={'details-votes-page-general-info__main-content-current-status-vote'}>
                    <span className={'main-content-current-status-vote__title'}>
                        <VotesPageTitleTimeZone
                            voteData={currentEventData}
                        />
                    </span>
                    <div className={'main-content-current-status-vote__status-vote-possible-revote'}>
                        <CurrentStatusVote
                            regStatus={labelText}
                            voteStatus={currentEventData.type === 'secret' ? 'Тайное' : 'Открытое'}
                        />
                        <ConfirmRegMaterialsVote
                            votesData={currentEventData}
                        />
                        <span className={'_hidden-possible-cancel-block'}>
                            <DetailsVotesPageStatusPossibleRevoteCancelReg
                                voteData={currentEventData}
                            />
                        </span>
                    </div>
                </div>
                <DetailsVotesPageListStartEndRegVote
                    voteData={currentEventData}
                />
                <span className={'_show-possible-cancel-block'}>
                    <DetailsVotesPageStatusPossibleRevoteCancelReg
                        voteData={currentEventData}
                    />
                </span>
            </div>
            <div className={'_hidden-materials-vote'}>
                <MaterialsVoteQuestion materialsVoteQuestion={'Материалы голосования'} />
            </div>
            <RegistrationButton
                votesData={currentEventData}
                handleCurrentEvents={handleCurrentEvents}
                toggleEventRegistration={toggleEventRegistration}
                showEventResult={showEventResult}
            />
        </div>
    )
}

export default DetailsVotesPageGeneralInformation;