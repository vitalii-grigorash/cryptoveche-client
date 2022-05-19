import React from "react";
import './DetailsVotesPageReadQuestions.css';
import ListQuestionsCheckbox from "../DetailsVotesPageReadQuestionsCard/ListQuestionsCheckbox/ListQuestionsCheckbox";
import RegistrationButton from "../ButtonsComponets/RegistrationButton/RegistrationButton";
import VotesAndDetailsPageSwitchButtons from "../VotesAndDetailsPageSwitchButtons/VotesAndDetailsPageSwitchButtons";
import DetailsVotesPageReadQuestionsCard from "../DetailsVotesPageReadQuestionsCard/DetailsVotesPageReadQuestionsCard";



const DetailsVotesPageReadQuestions = () => {


    return (
            <div className={'details-votes-page-read-questions__wrapper'}>
                <VotesAndDetailsPageSwitchButtons hiddenActiveBtn={true} hiddenArchiveBtn={true} hiddenBulletinBtn={true} hiddenResultBtn={true}/>
                    <h1 className={'details-votes-page-read-questions__wrapper-title'}>Выбор делегатов конференции в Ученый Совет СПбГУ</h1>
                <DetailsVotesPageReadQuestionsCard/>

                <div className={'details-votes-page-read-questions__question-block'}>
                    <div className={'question-block__title'}>
                        <h3>5. Выберите кандидата на позицию делегата Ученого Совета СПбГУ.</h3>
                        <h5>Выберите один из вариантов ответа напротив каждого кандидата</h5>
                        <span>Материалы вопроса<select><option></option></select></span>
                    </div>
                    <div className={'select-checkboxes-block__header-columns'}>
                        <span/>
                        <span>Прoтив</span>
                        <span>Воздержаться</span>
                        <span>За</span>
                    </div>
                    <div className={'question-block__select-checkboxes-block'}>
                        <ListQuestionsCheckbox checkBoxNameRow={'Вариант один какой-то'} typeCheck={'checkbox'}/>
                        <ListQuestionsCheckbox checkBoxNameRow={'А вот и второй'} typeCheck={'checkbox'}/>
                        <ListQuestionsCheckbox checkBoxNameRow={'Некий третий варик'} typeCheck={'checkbox'}/>
                        <ListQuestionsCheckbox checkBoxNameRow={'Довольно длинный четвертый'} typeCheck={'checkbox'}/>
                    </div>
                </div>
                <div className={'details-votes-page-read-questions__question-block'}>
                    <div className={'question-block__title'}>
                        <h3>6. Выберите лучшего композитора мира</h3>
                        <h5>Выберите один из вариантов ответа напротив каждого кандидата</h5>
                        <span>Материалы вопроса<select><option></option></select></span>
                    </div>
                    <div className={'select-checkboxes-block__header-columns'}>
                        <span/>
                        <span>Прoтив</span>
                        <span>Воздержаться</span>
                        <span>За</span>
                    </div>
                    <div className={'question-block__select-checkboxes-block'}>
                        <ListQuestionsCheckbox checkBoxNameRow={'Людвиг ван Бетховен'} typeCheck={'radio'}/>
                        <ListQuestionsCheckbox checkBoxNameRow={'Гендальф'} typeCheck={'radio'}/>
                        <ListQuestionsCheckbox checkBoxNameRow={'Вольфганг Амадей Моцарт очень длинное здесь что-то должно быть'} typeCheck={'radio'}/>
                        <ListQuestionsCheckbox checkBoxNameRow={'Моргенштерн'} typeCheck={'radio'}/>
                    </div>
                </div>
                <RegistrationButton/>
            </div>
    )
}

export default DetailsVotesPageReadQuestions;