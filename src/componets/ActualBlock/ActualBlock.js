import React from "react";
import './ActualBlock.css';
import logo_icon from '../../img/ActualBlock_logo.svg';
import ActualBlockDiagramm from "./ActualBlockDiagramm/ActualBlockDiagramm";
import DataTime from "../VotesStatusComponents/DateTime/DateTime";
// import EmptyStatesComponent from "../EmptyStatesComponent/EmptyStatesComponent";
import { useNavigate } from "react-router-dom";

const ActualBlock = ({ myVotesData }) => {

    const linkButtonMyBulliten = useNavigate();

    return (
        <div className={'actual-block-wrapper'}>
            <div className={'actual-block-wrapper__title'}>
                <img alt={'иконка для заголовка'} src={logo_icon} /><h2>Актуальное</h2>
            </div>
            <h3>Выбор делегатов конференции в Ученый Совет СПбГУ и еще парочка слов чтобы совсем уже было длинно</h3>
            <div className={'actual-block__start--end-vote'}>
                <div className={'start-end-vote__start-data'}>
                    <h5>Начало голосования:</h5>
                    <DataTime dateTimeDate={'05.01.2021'} dateTimeWatch={'18:00'} />
                </div>
                <div className={'start-end-vote__end-data'}>
                    <h5>Конец голосования:</h5>
                    <DataTime dateTimeDate={'05.01.2021'} dateTimeWatch={'18:00'} />
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