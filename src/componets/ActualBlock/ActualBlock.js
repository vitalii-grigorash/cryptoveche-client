import React from "react";
import './ActualBlock.css';
import logo_icon from '../../img/ActualBlock_logo.svg';
import ActualBlockDiagramm from "./ActualBlockDiagramm/ActualBlockDiagramm";
import DataTime from "../VotesStatusComponents/DateTime/DateTime";
// import EmptyStatesComponent from "../EmptyStatesComponent/EmptyStatesComponent";
import { useNavigate } from "react-router-dom";
import { myVotesDataTest } from '../../testMyEvents.js';


const [firstVoteData] = myVotesDataTest.slice(0, 1)

console.log(firstVoteData);

const eventTitle = firstVoteData.title;

const startEventDate = firstVoteData.event_start_time.slice(0, 10)
const startEventTime = firstVoteData.event_start_time.slice(10, firstVoteData.event_start_time.length)
const endEventDate = firstVoteData.event_end_time.slice(0, 10)
const endEventTime = firstVoteData.event_end_time.slice(10, firstVoteData.event_end_time.length)




const ActualBlock = ({ myVotesData }) => {

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
            <ActualBlockDiagramm />
            <button className={'actual-block__button'} onClick={() => linkButtonMyBulliten('call-voting-page')}>
                Проголосовать
            </button>
            {/*<EmptyStatesComponent/>*/}
        </div>
    )
}

export default ActualBlock