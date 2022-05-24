import React from "react";
import './DetailsVotesPageReadQuestions.css';
import RegistrationButton from "../ButtonsComponets/RegistrationButton/RegistrationButton";
import VotesAndDetailsPageSwitchButtons from "../VotesAndDetailsPageSwitchButtons/VotesAndDetailsPageSwitchButtons";
import DetailsVotesPageReadQuestionsCardList from "../DetailsVotesPageReadQuestionsCardList/DetailsVotesPageReadQuestionsCardList";

import DetailsVotesPageReadQuestionsCardCheckbox
    from "../DetailsVotesPageReadQuestionsCardCheckbox/DetailsVotesPageReadQuestionsCardCheckbox";



const DetailsVotesPageReadQuestions = () => {


    return (
            <div className={'details-votes-page-read-questions__wrapper'}>
                <VotesAndDetailsPageSwitchButtons hiddenActiveBtn={true} hiddenArchiveBtn={true} hiddenBulletinBtn={true} hiddenResultBtn={true}/>
                    <h1 className={'details-votes-page-read-questions__wrapper-title'}>Выбор делегатов конференции в Ученый Совет СПбГУ</h1>
                <DetailsVotesPageReadQuestionsCardList
                    nameQuestionCard={'1. Согласны ли вы с решением №576?'}
                    nameSelectAnswerQuestion={'Выберите ровно 1'}/>
                <DetailsVotesPageReadQuestionsCardList
                    nameQuestionCard={'2. Как должен происходить процесс выбора делегатов конференции?'}
                    nameSelectAnswerQuestion={'Выберите ровно 1'}/>
                <DetailsVotesPageReadQuestionsCardList
                    nameQuestionCard={'3. Выберите кандидата на позицию делегата Ученого Совета СПбГУ.'}
                    nameSelectAnswerQuestion={'Голосование выражается оставлением (голосование “за”) или зачеркиванием (голосование “против”) ФИО кандидатуры. Оставляется не более одной кандидатуры. В противном случае бюллетень считается недействительным. '}/>
                <DetailsVotesPageReadQuestionsCardList
                    nameQuestionCard={'4. Понравилось ли Вам голосовать через КриптоВече?'}
                    nameSelectAnswerQuestion={'Выберите ровно 1'}/>
                <DetailsVotesPageReadQuestionsCardCheckbox
                    checkBoxNameRow={'Только через КриптоВече'}
                    nameQuestionCard={'5. Выберите кандидата на позицию делегата Ученого Совета СПбГУ.'}
                    nameSelectAnswerQuestion={'Выберите один из вариантов ответа напротив каждого кандидата'} typeCheck={'checkbox'} nameFirstColumn={'Против'} nameSecondColumn={'Воздержаться'} nameThirdColumn={'За'}/>
                <DetailsVotesPageReadQuestionsCardCheckbox
                    checkBoxNameRow={'Только через КриптоВече'}
                    nameQuestionCard={'6. Выберите лучшего композитора мира'}
                    nameSelectAnswerQuestion={'Выберите один из вариантов ответа напротив каждого кандидата'} typeCheck={'radio'} nameFirstColumn={'За'} nameSecondColumn={'Против'} nameThirdColumn={'Воздержаться'}/>
                <RegistrationButton/>
            </div>
    )
}

export default DetailsVotesPageReadQuestions;