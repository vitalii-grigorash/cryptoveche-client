import React, { useEffect, useState } from "react";
import './CallVotingPage.css';
import mobile_icon_details_vote from '../../img/CallVotingMobileIcon.svg';
import DetailsVotesPageDaysEndRegStartVote
    from "../DetailsVotesPageDaysEndRegStartVote/DetailsVotesPageDaysEndRegStartVote";
import TitleVotesDetailsCallVotingProfile
    from "../TitleVotesDetailsCallVotingProfile/TitleVotesDetailsCallVotingProfile";
import CallVotingPageQuestionCardList from "../CallVotingPageQuestionCardList/CallVotingPageQuestionCardList";
import CallVotingPageQuestionCardCheckBox
    from "../CallVotingPageQuestionCardCheckBox/CallVotingPageQuestionCardCheckBox";
import { useNavigate } from "react-router-dom";
import * as Events from '../../Api/Events';

const CallVotingPage = (props) => {

    const {
        requestHelper,
        handleCurrentEvents
    } = props;

    const navigate = useNavigate();

    const [currentEventData, setCurrentEventData] = useState({});
    const [questionsTemplateRow, setQuestionsTemplateRow] = useState([]);
    const [questionsTemplateGrid, setQuestionsTemplateGrid] = useState([]);
    const [results, setResults] = useState([]);

    function templateRow(questions) {
        const filteredQuestions = questions.filter(e => e.template === 'ynq' || e.template === 'none' || e.template === 'position_single' || e.template === 'position_multiple' || e.template === 'same_positions');
        setQuestionsTemplateRow(filteredQuestions);
    }

    function templateGrid(questions) {
        const filteredQuestions = questions.filter(e => e.template === 'grid' || e.template === 'radio_grid');
        setQuestionsTemplateGrid(filteredQuestions);
    }

    useEffect(() => {
        if (localStorage.getItem('currentEvent')) {
            const currentEvent = localStorage.getItem('currentEvent');
            const event = JSON.parse(currentEvent);
            const body = {
                id: event.id
            }
            requestHelper(Events.getEvent, body)
                .then((data) => {
                    setCurrentEventData(data);
                    templateRow(data.questions);
                    templateGrid(data.questions);
                    if (data.results.questions) {
                        setResults(data.results.questions);
                        console.log(data.results.questions);
                    }
                })
        } else {
            navigate('/');
        }
    }, [navigate, requestHelper])

    return (
        <div className='call-voting-page__wrapper'>
            <TitleVotesDetailsCallVotingProfile
                firstLetter='КлиентКриптовече'
                secondLetter='Голосование по повестке'
                titleName='Голосование по повестке' mobileLetter='Назад на главную' />
            <div className='call-voting-page__title'>
                <h2 className='call-voting-page-title__title'>{currentEventData.title}</h2>
                <button className='call-voting-page-title__details-btn'
                    onClick={() => { handleCurrentEvents(currentEventData, true) }}>Детали голосования
                </button>
                <span className='call-voting-page-title__details-icon'
                    onClick={() => { handleCurrentEvents(currentEventData, true) }}><img alt='иконка' src={mobile_icon_details_vote} />
                    ДЕТАЛИ ГОЛОСОВАНИЯ
                </span>
            </div>
            <DetailsVotesPageDaysEndRegStartVote />
            {
                questionsTemplateRow.map((item => {
                    return (
                        <CallVotingPageQuestionCardList
                            key={item.id}
                            questionName={item.title}
                            questionColumns={item.options.columns}
                            questionRows={item.options.rows}
                            question={item}
                            eventId={currentEventData.id}
                            requestHelper={requestHelper}
                            isReVoting={currentEventData.re_voting}
                            materialsQuestion={item.materials}
                        />
                    )
                }))
            }
            {
                questionsTemplateGrid.map((question => {
                    return (
                        <CallVotingPageQuestionCardCheckBox
                            key={question.id}
                            questionTitle={question.title}
                            columns={question.options.columns}
                            rows={question.options.rows}
                            question={question}
                            eventId={currentEventData.id}
                            requestHelper={requestHelper}
                            isReVoting={currentEventData.re_voting}
                            results={results}
                            materialsQuestion={question.materials}
                        />
                    )
                }))
            }
        </div>
    )
}

export default CallVotingPage;
