import React from "react";
import './MyVotes.css';

const MyVotes = () => {

    return (
        <div className={'my-votes-block'}>

            <div className={'my-votes-block__reg-form'}>
                    <h2>Мои голосования</h2>
                    <span>Выбор делегатов конференции</span>
                    <h5>Ученый совет</h5>
                <div className={'reg-form__current-status'}>
                    <div>
                        <span>Идет регистраци</span>
                    </div>
                    <div>
                        <span>Начало голосования</span>
                    </div>
                    <div>
                        <span>Вы не зарегистрированы</span>
                    </div>
                </div>
                <button>Зарегистрироваться</button>
            </div>


            <div className={'my-votes-block__votes-form'}>
                    <span>Название голосования какое-то например довольно длинное чтобы показать, как встанет тексток на две строчки</span>
                    <h5>Консорциум СПбГУ</h5>
                <div className={'votes-form__current-status'}>
                    <div>
                        <span>Регистрация и голосование</span>
                    </div>
                    <div>
                        <span>Начало голосования</span>
                    </div>
                    <div>
                        <span>Вы зарегистрированы</span>
                    </div>
                </div>
                <div className={'votes-form__button-vote'}>
                    <button>
                        Проголосовать
                    </button>
                    <button>
                        Отменить регистрацию
                    </button>
                </div>

            </div>
        </div>
    )
}

export default MyVotes;