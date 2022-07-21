import React from "react";
import './ActualBlock.css';
import logo_icon from '../../img/ActualBlock_logo.svg';
import ActualBlockDiagramm from "./ActualBlockDiagramm/ActualBlockDiagramm";
import { useNavigate } from "react-router-dom";
import EmptyStatesComponent from "../EmptyStatesComponent/EmptyStatesComponent";


const ActualBlock = ({ myVotes }) => {
    
    const [firstVoteData] = myVotes.slice(0, 1)


    // const eventTitle = firstVoteData.title;

    // const startEventDate = firstVoteData.event_start_time.slice(0, 10).split('-').reverse().join('.')
    // const startEventTime = firstVoteData.event_start_time.slice(11, firstVoteData.event_start_time.length - 4)

    const linkButtonMyBulliten = useNavigate();

    return (
        <div className={'actual-block-wrapper'}>
            <div className={'actual-block-wrapper__title'}>
                <img alt={'иконка для заголовка'} src={logo_icon} /><h2>Актуальное</h2>
            </div>
            {/* <h3>{eventTitle}</h3> */}
            <div className={'actual-block__start--end-vote'}>
                <div className={'start-end-vote__start-data'}>
                    <h5>Начало голосования:</h5>
                    {/* <DataTime dateTimeDate={startEventDate} dateTimeWatch={startEventTime} /> */}
                </div>
                <div className={'start-end-vote__end-data'}>
                    <h5>Конец голосования:</h5>
                    {/* <DataTime dateTimeDate={endEventDate} dateTimeWatch={endEventTime} /> */}
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