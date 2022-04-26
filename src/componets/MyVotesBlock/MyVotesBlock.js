import React from "react";
import './MyVotesBlock.css';
import icon_arrow from '../../img/MyVotes_icon_arrow.svg';
import CurrentStatusVote from "../VotesStatusComponents/CurrentStatusVote/CurrentStatusVote";
import StartDateVote from "../VotesStatusComponents/StartDateVote/StartDateVote";
import ConfirmRegMaterialsVote from "../VotesStatusComponents/ConfirmRegMaterialsVote/ConfirmRegMaterialsVote";

const MyVotesBlock = () => {

    return (
        <div className={'my-votes-block-wrapper'}>
            <h2 className={'m'}>Мои голосования</h2>
            <div className={'my-votes-block__reg-form'}>
                    <h3>Выбор делегатов конференции</h3>
                    <h5>Ученый совет</h5>
                <div className={'reg-form__status-block'}>
                    <CurrentStatusVote/>
                    <StartDateVote/>
                    <ConfirmRegMaterialsVote/>
                </div>
                <button className={'reg-form__button-reg'}>Зарегистрироваться</button>
            </div>
            <div className={'my-votes-block__votes-form'}>
                <div className={'my-votes-block__vote-form'}>
                    <h3>Название голосования какое-то например довольно длинное чтобы показать, как встанет тексток на две строчки</h3>
                    <h5>Консорциум СПбГУ</h5>
                    <div className={'vote-form__status-block'}>
                        <CurrentStatusVote/>
                        <StartDateVote/>
                        <ConfirmRegMaterialsVote/>
                    </div>
                <div className={'votes-form__button-vote-cancel-reg'}>
                    <button className={'button-vote'}>
                        Проголосовать
                    </button>
                    <button className={'cancel-reg'}>
                        Отменить регистрацию
                    </button>
                </div>
            </div>
            </div>
            <div className={'my-votes__link-arrow'}>
                <a href={'/main'}><span>ПОКАЗАТЬ ПОЛНОСТЬЮ</span></a><a href={'/main'}><img alt={'logo_arrow'} src={icon_arrow}/></a>
            </div>
        </div>
    )
}

export default MyVotesBlock;