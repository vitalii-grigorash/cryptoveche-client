import React from "react";
import './RegistrationButton.css';

const RegistrationButton = (props) => {

    const {
        votesData,
        handleCurrentEvents,
        toggleEventRegistration,
        showEventResult,
        isVoted
    } = props;

    return (
        <>
            {votesData.status === "registration" && (
                <>
                    {!votesData.isRegistered ? (
                        <button className='reg'
                            onClick={() => { toggleEventRegistration(votesData.id, votesData.isRegistered) }}
                        >
                            Зарегистрироваться
                        </button>
                    ) : (
                        <>
                            {votesData.re_registration && (
                                <>
                                    {!votesData.isVoting && (
                                        <button className='cancel-reg'
                                            onClick={() => { toggleEventRegistration(votesData.id, votesData.isRegistered) }}
                                        >
                                            Отменить регистрацию
                                        </button>
                                    )}
                                </>
                            )}
                        </>
                    )}
                    {votesData.isVoting && (
                        <>
                            {votesData.isRegistered && (
                                <>
                                    {!isVoted ? (
                                        <>
                                            <button className='button-vote'
                                                onClick={() => { handleCurrentEvents(votesData, false) }}
                                            >
                                                Проголосовать
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            {votesData.re_voting && (
                                                <button className='button-vote'
                                                    onClick={() => { handleCurrentEvents(votesData, false) }}
                                                >
                                                    Переголосовать
                                                </button>
                                            )}
                                        </>
                                    )}
                                </>
                            )}
                        </>
                    )}
                </>
            )}
            {votesData.status === 'voting' && (
                <>
                    {votesData.isRegistered ? (
                        <>
                            {!isVoted ? (
                                <button className='button-vote'
                                    onClick={() => { handleCurrentEvents(votesData, false) }}
                                >
                                    Проголосовать
                                </button>
                            ) : (
                                <>
                                    {votesData.re_voting && (
                                        <button className='button-vote'
                                            onClick={() => { handleCurrentEvents(votesData, false) }}
                                        >
                                            Переголосовать
                                        </button>
                                    )}
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            {votesData.isRegistration && (
                                <button className='reg'
                                    onClick={() => { toggleEventRegistration(votesData.id, votesData.isRegistered) }}
                                >
                                    Зарегистрироваться
                                </button>
                            )}
                        </>
                    )}
                </>
            )}
            {votesData.status === 'ended' && (
                <button className='cancel-reg'
                    onClick={() => showEventResult(votesData)}
                >
                    Результаты
                </button>
            )}
            {votesData.status === 'quorum_unpresant' && (
                <button className='cancel-reg'
                    onClick={() => showEventResult(votesData)}
                >
                    Результаты
                </button>
            )}
        </>
    )
}

export default RegistrationButton;
