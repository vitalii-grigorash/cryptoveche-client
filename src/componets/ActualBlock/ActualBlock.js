import React, { useEffect, useState } from "react";
import './ActualBlock.css';
import logo_icon from '../../img/ActualBlock_logo.svg';
import ActualBlockDiagramm from "./ActualBlockDiagramm/ActualBlockDiagramm";
import { useNavigate } from "react-router-dom";

import DataTime from '../VotesStatusComponents/DateTime/DateTime';


const ActualBlock = ({ actualVote, handleCurrentEvents, toggleEventRegistration }) => {

  const [eventTitle, setEventTitle] = useState('');
  const [startEventDate, setStartEventDate] = useState('');
  const [startEventTime, setStartEventTime] = useState('');
  const [endEventTime, setEndEventTime] = useState('');
  const [endEventDate, setEndEventDate] = useState('');

  useEffect(() => {
    if (actualVote && Object.keys(actualVote).length > 0) {
      setEventTitle(actualVote.title);
      setStartEventDate(actualVote.event_start_time.slice(0, 10).split('-').reverse().join('.'));
      setStartEventTime(actualVote.event_start_time.slice(11, actualVote.event_start_time.length - 4));
      setEndEventDate(actualVote.event_end_time.slice(0, 10).split('-').reverse().join('.'));
      setEndEventTime(actualVote.event_end_time.slice(11, actualVote.event_end_time.length - 4));
    };
  }, [actualVote])

  const linkButtonMyBulliten = useNavigate();

  return (
    <div className={'actual-block-wrapper'}>
      <div className={'actual-block-wrapper__title'}>
        <img alt={'иконка для заголовка'} src={logo_icon} /><h2>Актуальное</h2>
      </div>
      <h3>{eventTitle}</h3>
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
      <ActualBlockDiagramm actualVote={actualVote} startEventDate={startEventDate} startEventTime={startEventTime} endEventDate={endEventDate} endEventTime={endEventTime} />

      <div className={'votes-form__button-vote-cancel-reg'}>
        {actualVote.status === "registration" && (
          <>
            {!actualVote.isRegistered ? (
              <button className='reg'
                onClick={() => { toggleEventRegistration(actualVote.id) }}
              >
                Зарегистрироваться
              </button>
            ) : (
              <>
                {actualVote.re_registration && (
                  <>
                    {!actualVote.isVoting && (
                      <button className='cancel-reg'
                        onClick={() => { toggleEventRegistration(actualVote.id) }}
                      >
                        Отменить регистрацию
                      </button>
                    )}
                  </>
                )}
              </>
            )}
            {actualVote.isVoting && (
              <>
                {actualVote.isRegistered && (
                  <>
                    {!actualVote.isVoted ? (
                      <>
                        <button className='button-vote'
                          onClick={() => { handleCurrentEvents(actualVote) }}
                        >
                          Проголосовать
                        </button>
                      </>
                    ) : (
                      <>
                        {actualVote.re_voting && (
                          <button className='button-vote'
                            onClick={() => { handleCurrentEvents(actualVote) }}
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
        {actualVote.status === 'voting' && (
          <>
            {actualVote.isRegistered ? (
              <>
                {!actualVote.isVoted ? (
                  <button className='button-vote'
                    onClick={() => { handleCurrentEvents(actualVote) }}
                  >
                    Проголосовать
                  </button>
                ) : (
                  <>
                    {actualVote.re_voting && (
                      <button className='button-vote'
                        onClick={() => { handleCurrentEvents(actualVote) }}
                      >
                        Переголосовать
                      </button>
                    )}
                  </>
                )}
              </>
            ) : (
              <>
                {actualVote.isRegistration && (
                  <button className='reg'
                    onClick={() => { toggleEventRegistration(actualVote.id) }}
                  >
                    Зарегистрироваться
                  </button>
                )}
              </>
            )}
          </>
        )}

      </div>

      {/*<EmptyStatesComponent/>*/}
    </div>
  )

}

export default ActualBlock
