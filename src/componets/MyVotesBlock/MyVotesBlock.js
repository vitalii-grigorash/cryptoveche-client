import React from "react";
import './MyVotesBlock.css';
import icon_arrow from '../../img/MyVotes_icon_arrow.svg';
import CurrentStatusVote from "../VotesStatusComponents/CurrentStatusVote/CurrentStatusVote";
import StartDateVote from "../VotesStatusComponents/StartDateVote/StartDateVote";
import ConfirmRegMaterialsVote from "../VotesStatusComponents/ConfirmRegMaterialsVote/ConfirmRegMaterialsVote";
import {myVotesBlockData} from '../../myVotesBlockData';
import {Link} from "react-router-dom";

const MyVotesBlock = () => {

         const myVotesReg = myVotesBlockData.find(item => item.id === 1)
         const myVotesRegStatus = myVotesReg.myVotesRegStatus
         const myVotesVoteStatus = myVotesReg.myVotesVoteStatus
         const myVotesStartDateVote = myVotesReg.myVotesStartDateVote
         const myVotesStartTimeVote = myVotesReg.myVotesStartTimeVote
         const myVotesConfirmStatus = myVotesReg.myVotesConfirmStatus

        const myVotesRunVote = myVotesBlockData.find(item => item.id === 2)
        const runVotesRegStatus = myVotesRunVote.myVotesRegStatus
        const runVotesVoteStatus = myVotesRunVote.myVotesVoteStatus
        const runVotesStartDateVote = myVotesRunVote.myVotesStartDateVote
        const runVotesStartTimeVote = myVotesRunVote.myVotesStartTimeVote
        const runVotesConfirmStatus = myVotesRunVote.myVotesConfirmStatus


    return (
            <div className={'my-votes-block-wrapper'}>
                <h2>Мои голосования</h2>
                <div className={'my-votes-block__reg-form'}>
                        <h3>Выбор делегатов конференции</h3>
                        <h5>Ученый совет</h5>
                    <div className={'reg-form__status-block'}>
                        <CurrentStatusVote regStatus={myVotesRegStatus} voteStatus={myVotesVoteStatus}/>
                        <StartDateVote dateTimeDate={myVotesStartDateVote} dateTimeWatch={myVotesStartTimeVote}/>
                        <div className={'status-and-start-reg-start-vote__add-border-left'}><ConfirmRegMaterialsVote confirmStatus={myVotesConfirmStatus}/></div>
                    </div>
                    <button className={'reg-form__button-reg'}>Зарегистрироваться</button>
                </div>
                <div className={'my-votes-block__votes-form'}>
                    <div className={'my-votes-block__vote-form'}>
                        <h3>Название голосования какое-то например довольно длинное чтобы показать, как встанет тексток на две строчки</h3>
                        <h5>Консорциум СПбГУ</h5>
                        <div className={'vote-form__status-block'}>
                            <CurrentStatusVote regStatus={runVotesRegStatus} voteStatus={runVotesVoteStatus}/>
                            <StartDateVote dateTimeDate={runVotesStartDateVote} dateTimeWatch={runVotesStartTimeVote}/>
                            <div className={'status-and-start-reg-start-vote__add-border-left'}><ConfirmRegMaterialsVote confirmStatus={runVotesConfirmStatus}/></div>
                        </div>
                        <div className={'votes-form__button-vote-cancel-reg'}>
                            <button className={'button-vote'}>Проголосовать</button>
                            <button className={'cancel-reg'}>Отменить регистрацию</button>
                        </div>
                     </div>
                </div>
                <div className={'my-votes__link-arrow'}>
                    <span><Link to={'/main/votes-page-details-voting'}>ПОКАЗАТЬ ПОЛНОСТЬЮ</Link></span>
                    <span><Link to={'/main/votes-page-details-voting'}><img alt={'logo_arrow'} src={icon_arrow}/></Link></span>
                </div>
            </div>
    )
}

export default MyVotesBlock;