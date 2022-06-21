import React, {useState} from "react";
import './DetailsVotesPageResultVotes.css';
import TitleVotesDetailsCallVotingProfile
    from "../TitleVotesDetailsCallVotingProfile/TitleVotesDetailsCallVotingProfile";
import DetailsVotesPageResultVotesCardQuestion
    from "../DetailsVotesPageResultVotesCardQuestion/DetailsVotesPageResultVotesCardQuestion";
// import DetailsVotesPageResultVotesWaitingResults
//     from "../DetailsVotesPageResultVotesWaitingResults/DetailsVotesPageResultVotesWaitingResults";
import DetailsVotesPageGeneralInformation
    from "../DetailsVotesPageGeneralInformation/DetailsVotesPageGeneralInformation";
import DetailsVotesPageReadQuestions from "../DetailsVotesPageReadQuestions/DetailsVotesPageReadQuestions";
import DetailsVotesPageMyBulletin from "../DetailsVotesPageMyBulletin/DetailsVotesPageMyBulletin";



const DetailsVotesPageResultVotes = () => {

        const [btnGeneralInfo, setBtnGeneralInfo] = useState(false)
        const [btnReadQuestion, setBtnReadQuestion] = useState(false)
        const [btnResult, setBtnResult] = useState(true)
        const [btnMyBulletin, setBtnMyBulletin] = useState(false)

        function toggleResultHide () {
            setBtnGeneralInfo(true)
            setBtnReadQuestion(false)
            setBtnMyBulletin(false)
            setBtnResult(false)
        }

        function toggleReadQuestionShow () {
            setBtnGeneralInfo(false)
            setBtnReadQuestion(true)
            setBtnMyBulletin(false)
            setBtnResult(false)
        }

        function toggleMyBulletinShow () {
            setBtnGeneralInfo(false)
            setBtnReadQuestion(false)
            setBtnMyBulletin(true)
            setBtnResult(false)
    }

        function toggleResultShow () {
            setBtnGeneralInfo(false)
            setBtnReadQuestion(false)
            setBtnMyBulletin(false)
            setBtnResult(true)
        }

    return (

            <div className={'details-votes-page-result-votes__wrapper'}>
                <TitleVotesDetailsCallVotingProfile firstLetter={'КлиентКриптовече'} secondLetter={'Детали голосования'} titleName={'Детали голосования'} mobileLetter={'Назад к списку голосований'}/>
                <div className={'details-votes-page-result-votes__main-content'}>
                    <div className={'results-page-switch-buttons'}>
                            <h2 onClick={() => {toggleResultHide()}} className={btnGeneralInfo ? 'active-results-page-switch-buttons__button' : 'results-page-switch-buttons__button'}>Общая информация</h2>
                            <h2 onClick={() => {toggleReadQuestionShow()}} className={btnReadQuestion ? 'active-results-page-switch-buttons__button' : 'results-page-switch-buttons__button'}>
                                <span className={'_read-questions-bnt'}>Ознакомиться с вопросами</span>
                                <span className={'_mobile-read-questions-bnt'}>Вопросы</span></h2>
                            <h2 onClick={() => toggleResultShow()} className={btnResult ? 'active-results-page-switch-buttons__button' : 'results-page-switch-buttons__button'}>Результат</h2>
                            <h2 onClick={() => {toggleMyBulletinShow()}} className={btnMyBulletin ? 'active-results-page-switch-buttons__button' : 'results-page-switch-buttons__button'}>Мой бюллетень</h2>
                        </div>

                                {btnResult && (
                                    <DetailsVotesPageResultVotesCardQuestion titleName={'1. Согласны ли вы с решением №576?'} answerSelected={'Выберите ровно 1'}/>
                                )}
                                {btnGeneralInfo && (
                                    <DetailsVotesPageGeneralInformation/>
                                )}
                                {btnReadQuestion && (
                                    <DetailsVotesPageReadQuestions/>
                                )}
                                {btnMyBulletin && (
                                    <DetailsVotesPageMyBulletin/>
                                )}
                    {/*<DetailsVotesPageResultVotesWaitingResults/>*/}
                </div>
            </div>
    )

}

export default DetailsVotesPageResultVotes;