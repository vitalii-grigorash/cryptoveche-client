import React from "react";
import './DetailsVotesPageReadQuestions.css';
import ListQuestionsCheckbox from "./ListQuestionsCheckbox/ListQuestionsCheckbox";
import RegistrationButton from "../ButtonsComponets/RegistrationButton/RegistrationButton";


const DetailsVotesPageReadQuestions = () => {


    return (
            <div className={'details-votes-page-read-questions__wrapper'}>
                <div className={'details-votes-page-general-info__switch-buttons'}>
                    <h2 className={'details-votes-page-general-info__switch-buttons-active-votes'}>Общая информация</h2>
                    <h2 className={'details-votes-page-general-info__switch-buttons-archive-votes'}>Ознакомиться с вопросами</h2>
                </div>
                    <h1 className={'details-votes-page-read-questions__wrapper-title'}>Выбор делегатов конференции в Ученый Совет СПбГУ</h1>
                <div className={'details-votes-page-read-questions__question-block'}>
                    <div className={'question-block__title'}>
                        <h3>1. Согласны ли вы с решением №576?</h3>
                        <h5>Необходимо выбрать ровно 1</h5>
                        <span>Материалы вопроса<select><option></option></select></span>
                    </div>
                    <div className={'question-block__list-questions'}>
                        <ul type={"square"}>
                            <li><span>Да</span></li>
                            <li><span>Нет</span></li>
                            <li><span>Дайте подумать</span></li>
                        </ul>
                    </div>
                </div>
                <div className={'details-votes-page-read-questions__question-block'}>
                    <div className={'question-block__title'}>
                        <h3>2. Как должен происходить процесс выбора делегатов конференции?</h3>
                        <h5>Необходимо выбрать ровно 1</h5>
                        <span>Материалы вопроса<select><option></option></select></span>
                    </div>
                    <div className={'question-block__list-questions'}>
                        <ul type={"square"}>
                            <li><span>Только через КриптоВече</span></li>
                            <li><span>На общем собрании</span></li>
                        </ul>
                    </div>
                </div>
                <div className={'details-votes-page-read-questions__question-block'}>
                    <div className={'question-block__title'}>
                        <h3>3. Выберите кандидата на позицию делегата Ученого Совета СПбГУ.</h3>
                        <h5>Голосование выражается оставлением (голосование “за”) или зачеркиванием (голосование “против”) ФИО кандидатуры. Оставляется не более одной кандидатуры. В противном случае бюллетень считается недействительным. </h5>
                        <span>Материалы вопроса<select><option></option></select></span>
                    </div>
                    <div className={'question-block__list-questions'}>
                        <ul type={"square"}>
                            <li><span>Тимошина</span></li>
                            <li><span>Кириллов</span></li>
                            <li><span>Петрунин</span></li>
                            <li><span>Лейн</span></li>
                        </ul>
                    </div>
                </div>

                <div className={'details-votes-page-read-questions__question-block'}>
                    <div className={'question-block__title'}>
                        <h3>4. Понравилось ли Вам голосовать через КриптоВече?</h3>
                        <h5>Необходимо выбрать ровно 1</h5>
                        <span>Материалы вопроса<select><option></option></select></span>
                    </div>
                    <div className={'question-block__list-questions'}>
                        <ul type={"square"}>
                            <li><span>Только через КриптоВече</span></li>
                            <li><span>На общем собрании</span></li>
                        </ul>
                    </div>
                </div>
                <div className={'details-votes-page-read-questions__question-block'}>
                    <div className={'question-block__title'}>
                        <h3>5. Выберите кандидата на позицию делегата Ученого Совета СПбГУ. </h3>
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