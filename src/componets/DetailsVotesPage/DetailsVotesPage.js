import React, {useState} from "react";
import './DetailsVotesPage.css';
import votes_page_row_icon from "../../img/VotesPageBlock_icon_row.svg";
import DetailsVotesPageDaysEndRegStartVote from '.././DetailsVotesPageDaysEndRegStartVote/DetailsVotesPageDaysEndRegStartVote';
import DetailsVotesPageGeneralInformation
    from "../DetailsVotesPageGeneralInformation/DetailsVotesPageGeneralInformation";
import TitleVotesDetailsCallVotingProfile
    from "../TitleVotesDetailsCallVotingProfile/TitleVotesDetailsCallVotingProfile";
import DetailsVotesPageReadQuestions from "../DetailsVotesPageReadQuestions/DetailsVotesPageReadQuestions";



const DetailsVotesPage = () => {

    const [btnGeneralInfo, setBtnGeneralInfo] = useState(true);
    const [btnReadQuestions, setBtnReadQuestions] = useState(false);

    function toggleGenerelInfoHide () {
        setBtnGeneralInfo(true)
        setBtnReadQuestions(false)
    }
    function toggleReadQuestionShow () {
        setBtnGeneralInfo(false)
        setBtnReadQuestions(true)
    }

    return (
            <div className={'details-votes-page__wrapper'}>
                <TitleVotesDetailsCallVotingProfile
                        firstLetter={'КлиентКриптовече'}
                        secondLetter={'Детали голосования'}
                        titleName={'Детали голосования'}
                        mobileLetter={'Назад к списку голосований'}/>
                <DetailsVotesPageDaysEndRegStartVote/>
                        <div className={'details-votes-page__main-content'}>
                            <div className={'details-votes-page-switch__buttons'}>
                                <div>
                                    <h2 onClick={() => {toggleGenerelInfoHide()}} className={btnGeneralInfo ? 'active-details-votes-page-switch-buttons__button' : 'details-votes-page-switch-buttons__button'}>Общая информация</h2>
                                </div>
                                <div>
                                    <h2 onClick={() => {toggleReadQuestionShow()}} className={btnReadQuestions ? 'active-details-votes-page-switch-buttons__button': 'details-votes-page-switch-buttons__button'}>
                                        <span className={'_read-questions-bnt'}>Ознакомиться с вопросами</span>
                                        <span className={'_mobile-read-questions-bnt'}>Вопросы</span></h2>
                                </div>
                            </div>
                            {btnGeneralInfo && (
                                <DetailsVotesPageGeneralInformation/>
                            )}
                            {btnReadQuestions && (
                                <DetailsVotesPageReadQuestions/>
                            )}
                </div>
            </div>
    )

}

export default DetailsVotesPage;