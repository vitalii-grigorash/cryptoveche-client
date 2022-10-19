import React, { useEffect, useState } from "react";
import './ActualBlock.css';
import '../ActualBlock/ActualBlockDiagramm/ActualBlockDiagramm.css'
import logo_icon from '../../img/ActualBlock_logo.svg';
import ActualBlockDiagramm from "./ActualBlockDiagramm/ActualBlockDiagramm";
import DataTime from '../VotesStatusComponents/DateTime/DateTime';

const ActualBlock = (props) => {

  const {
    sortActualEvents,
    handleCurrentEvents,
    toggleEventRegistration,
    formatDate,
    formatTime
  } = props;

  const [currentVote, setCurrentVote] = useState(sortActualEvents[0]);
  const [countIndexofSortActualEvents, setCountIndexofSortActualEvents] = useState(sortActualEvents.findIndex(el => el.id === currentVote.id));
  const [arrowLeftStyle, setArrowLeftStyle] = useState('diagramm-container__row-button-left_hide');
  const [eventTitle, setEventTitle] = useState('');
  const [startEventDate, setStartEventDate] = useState('');
  const [startEventTime, setStartEventTime] = useState('');
  const [endEventTime, setEndEventTime] = useState('');
  const [endEventDate, setEndEventDate] = useState('');
  const [isVoted, setVoted] = useState(false);
  const [arrowRightStyle, setArrowRightStyle] = useState(
    sortActualEvents.length > 1
      ?
      'diagramm-container__row-button-right'
      :
      'diagramm-container__row-button-right_hide'
  );

  const switchActualEventBack = (e) => {
    e.preventDefault();
    setCountIndexofSortActualEvents(countIndexofSortActualEvents - 1);
  };

  const switchActualEventForward = (e) => {
    e.preventDefault();
    setCountIndexofSortActualEvents(countIndexofSortActualEvents + 1);
    setArrowLeftStyle('diagramm-container__row-button-left');
  };

  useEffect(() => {
    if (currentVote.ballots !== undefined) {
      const filteredAnswer = currentVote.questions.filter(a => currentVote.ballots.find(p => p.bulletinId === a.bulletinId));
      if (filteredAnswer.length === 0) {
        setVoted(false);
      } else {
        if (filteredAnswer.length === currentVote.questions.length) {
          setVoted(true);
        } else {
          setVoted(false);
        }
      }
    }
  }, [currentVote.ballots, currentVote.questions]);

  useEffect(() => {
    if (currentVote && Object.keys(currentVote).length > 0) {
      setCurrentVote(sortActualEvents[countIndexofSortActualEvents]);
      setEventTitle(currentVote.title);
      setStartEventDate(formatDate(currentVote.event_start_time));
      setStartEventTime(formatTime(currentVote.event_start_time));
      setEndEventDate(formatDate(currentVote.event_end_time));
      setEndEventTime(formatTime(currentVote.event_end_time));
      if (countIndexofSortActualEvents === sortActualEvents.length - 1) {
        setArrowRightStyle('diagramm-container__row-button-right_hide');
      } else {
        setArrowRightStyle('diagramm-container__row-button-right');
      }
      if (countIndexofSortActualEvents === 0) {
        setArrowLeftStyle('diagramm-container__row-button-left_hide');
      }
    }
  },
    [
      currentVote,
      sortActualEvents,
      countIndexofSortActualEvents,
      formatDate,
      formatTime
    ]
  );

  return (
    <div className={'actual-block-wrapper'}>
      <div className={'actual-block-wrapper__title'}>
        <img alt={'иконка для заголовка'} src={logo_icon} /><h2>Актуальное</h2>
      </div>
      <h3 className="actual-block__event-name" onClick={() => { handleCurrentEvents(currentVote, true) }} >{eventTitle}</h3>
      <div className={'actual-block__start--end-vote'}>
        <div className={'start-end-vote__start-data'}>
          <h5>Начало голосования:</h5>
          <DataTime dateTimeDate={startEventDate} dateTimeWatch={startEventTime} />
        </div>
        <div className={'start-end-vote__end-data'}>
          <h5>Конец голосования:</h5>
          <DataTime dateTimeDate={endEventDate} dateTimeWatch={endEventTime} />
        </div>
      </div>
      <ActualBlockDiagramm
        actualVote={currentVote}
        startEventDate={startEventDate}
        startEventTime={startEventTime}
        endEventDate={endEventDate}
        endEventTime={endEventTime}
        switchActualEventForward={switchActualEventForward}
        switchActualEventBack={switchActualEventBack}
        arrowLeftStyle={arrowLeftStyle}
        arrowRightStyle={arrowRightStyle}
      />
      <div className={'votes-form__button-vote-cancel-reg'}>
        {!currentVote.isProcessing && (
          <>
            {currentVote.status === "registration" && (
              <>
                {!currentVote.isRegistered ? (
                  <>
                    {currentVote.onButton ? (
                      <button className='button-vote'
                        onClick={() => { toggleEventRegistration(currentVote.id, currentVote.isRegistered, true) }}
                      >
                        Проголосовать
                      </button>
                    ) : (
                      <button className='reg'
                        onClick={() => { toggleEventRegistration(currentVote.id, currentVote.isRegistered, false) }}
                      >
                        Зарегистрироваться
                      </button>
                    )}
                  </>
                ) : (
                  <>
                    {currentVote.re_registration && (
                      <>
                        {!currentVote.isVoting && (
                          <button className='cancel-reg'
                            onClick={() => { toggleEventRegistration(currentVote.id, currentVote.isRegistered, false) }}
                          >
                            Отменить регистрацию
                          </button>
                        )}
                      </>
                    )}
                  </>
                )}
                {currentVote.isVoting && (
                  <>
                    {currentVote.isRegistered && (
                      <>
                        {!isVoted ? (
                          <>
                            <button className='button-vote'
                              onClick={() => { handleCurrentEvents(currentVote, false) }}
                            >
                              Проголосовать
                            </button>
                          </>
                        ) : (
                          <>
                            {currentVote.re_voting && (
                              <button className='button-vote'
                                onClick={() => { handleCurrentEvents(currentVote, false) }}
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
            {currentVote.status === 'voting' && (
              <>
                {currentVote.isRegistered ? (
                  <>
                    {!isVoted ? (
                      <button className='button-vote'
                        onClick={() => { handleCurrentEvents(currentVote, false) }}
                      >
                        Проголосовать
                      </button>
                    ) : (
                      <>
                        {currentVote.re_voting && (
                          <button className='button-vote'
                            onClick={() => { handleCurrentEvents(currentVote, false) }}
                          >
                            Переголосовать
                          </button>
                        )}
                      </>
                    )}
                  </>
                ) : (
                  <>
                    {currentVote.isRegistration && (
                      <button className='reg'
                        onClick={() => { toggleEventRegistration(currentVote.id, currentVote.isRegistered, false) }}
                      >
                        Зарегистрироваться
                      </button>
                    )}
                  </>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default ActualBlock
