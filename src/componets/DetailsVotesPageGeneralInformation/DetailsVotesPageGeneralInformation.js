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
        showEventResult,
        formatDate,
        formatTime,
        utcOffset
    } = props;

    const [labelText, setLabelText] = useState('');
    const [activeMaterials, setActiveMaterials] = useState(false)

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

    useEffect(() => {
        if (currentEventData.materials.length !== 0) {
            setActiveMaterials(true)
        }
    }, [currentEventData.materials])

    return (
        <div>
            <div className={'details-votes-page-general-info__main-content'}>
                <div className={'details-votes-page-general-info__main-content-current-status-vote'}>
                    <span className={'main-content-current-status-vote__title'}>
                        <VotesPageTitleTimeZone
                            voteData={currentEventData}
                            utcOffset={utcOffset}
                        />
                    </span>
                    <div className={'main-content-current-status-vote__status-vote-possible-revote'}>
                        <div className={'status-vote-possible-revote__width-block'}>
                            <CurrentStatusVote
                                regStatus={labelText}
                                voteStatus={currentEventData.type === 'secret' ? 'Тайное' : 'Открытое'}
                            />
                        </div>
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
                    formatDate={formatDate}
                    formatTime={formatTime}
                />
                <span className={'_show-possible-cancel-block'}>
                    <DetailsVotesPageStatusPossibleRevoteCancelReg
                        voteData={currentEventData}
                    />
                </span>
            </div>
            {activeMaterials &&
                <div className={'_hidden-materials-vote'}>
                    <MaterialsVoteQuestion materialsVoteName={'Материалы голосования'} currentMaterialsVote={currentEventData} />
                </div>
            }
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