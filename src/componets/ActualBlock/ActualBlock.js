import React from "react";
import './ActualBlock.css';
import logo_icon from '../../img/ActualBlock_logo.svg';
import icon_data from "../../img/MyVotes_data_icon.svg";
import icon_time from "../../img/MyVotes_icon_time.svg";
import DiagrammaVote from "./Diagramma/Diagramma";
import VoteDiagramm from "./Diagramma/Diagramma";

const ActualBlock = () => {

    return (
        <div className={'actual-block-wrapper'}>
            <div className={'actual-block-wrapper__title'}>
                <img alt={''} src={logo_icon}/><h2>Актуальное</h2>
            </div>
                <h3>Выбор делегатов конференции в Ученый Совет СПбГУ и еще парочка слов чтобы совсем уже было длинно</h3>
            <div className={'actual-block__start--end-vote'}>
                <div className={'start-end-vote__start-data'}>
                    <h5>Начало голосования:</h5>
                    <div className={'start-data'}>
                        <img alt={''} src={icon_data}/>
                            <span>5.01.2022</span>
                            <img alt={''} src={icon_time}/>
                        <span>18.00</span>
                    </div>
                </div>
                <div className={'start-end-vote__end-data'}>
                    <h5>Конец голосования:</h5>
                    <div className={'end-data '}>
                        <img alt={''} src={icon_data}/>
                            <span>5.01.2022</span>
                            <img alt={''} src={icon_time}/>
                        <span>18.00</span>
                    </div>
                </div>
            </div>
            <VoteDiagramm/>
            <button className={'actual-block__button'}>
                Проголосовать
            </button>
        </div>
    )
}

export default ActualBlock