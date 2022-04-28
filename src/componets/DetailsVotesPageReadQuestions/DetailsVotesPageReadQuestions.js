import React from "react";
import './DetailsVotesPageReadQuestions.css';

const DetailsVotesPageReadQuestions = () => {

    return (
        <div className={'details-votes-page-read-questions__wrapper'}>
            <div className={'details-votes-page-general-info__switch-buttons'}>
                <h2 className={'details-votes-page-general-info__switch-buttons-active-votes'}>Общая информация</h2>
                <h2 className={'details-votes-page-general-info__switch-buttons-archive-votes'}>Ознакомиться с вопросами</h2>
            </div>
            <h1 className={'details-votes-page-read-questions__wrapper-title'}>Выбор делегатов конференции в Ученый Совет СПбГУ</h1>
            <div>
                <div>
                    1. Согласны ли вы с решением №576?
                    Необходимо выбрать ровно 1
                    Материалы вопроса
                </div>
                <div>

                </div>
            </div>


            <div>
                2. Как должен происходить процесс выбора делегатов конференции?
            </div>


            <div>
                3. Выберите кандидата на позицию делегата Ученого Совета СПбГУ.
            </div>


            <div>
                4. Понравилось ли Вам голосовать через КриптоВече?
            </div>


            <div>
                5. Выберите кандидата на позицию делегата Ученого Совета СПбГУ.
            </div>


            <div>
                6. Выберите лучшего композитора мира
            </div>
        </div>
    )
}

export default DetailsVotesPageReadQuestions;