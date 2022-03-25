import React from "react";
import './MyVotes.css';
import icon_data from '../../img/MyVotes_data_icon.svg';
import icon_time from '../../img/MyVotes_icon_time.svg';
import icon_info from  '../../img/MyVotes_icon_info.svg';

const MyVotes = () => {

    return (
        <div className={'my-votes-block'}>
            <h2>Мои голосования</h2>
            <div className={'my-votes-block__reg-form'}>
                    <h3>Выбор делегатов конференции</h3>
                    <h5>Ученый совет</h5>
                <div className={'reg-form__status-block'}>
                    <div className={'status-block__current-status'}>

                        <div className={'current-status__registration-in-progress'}>
                            <ul><li>Идет регистрация</li></ul>
                        </div>
                            <div className={'current-status__secret'}>
                                <ul><li>Тайное</li></ul></div>
                    </div>
                    <div className={'status-block__start-vote'}>
                        <h5>Начало голосования:</h5>
                        <div className={'start-vote__data'}>
                            <img alt={''} src={icon_data}/>
                            <span>5.01.2022</span>
                            <img alt={''} src={icon_time}/>
                            <span>18.00</span>
                        </div>
                    </div>
                    <div className={'status-block__materials-vote'}>
                        <span className={'materials-vote__red'}><img alt={''} src={icon_info}/>Вы не зарегистрированы</span>
                        <span>Материалы голосования<select><option></option></select></span>
                    </div>
                </div>
                <button className={'reg-form__button-reg'}>Зарегистрироваться</button>
            </div>


            <div className={'my-votes-block__votes-form'}>
















                {/*    <h3>Название голосования какое-то например довольно длинное чтобы показать, как встанет тексток на две строчки</h3>*/}
                {/*    <h5>Консорциум СПбГУ</h5>*/}
                {/*<div className={'votes-form__current-status'}>*/}
                {/*    <div>*/}
                {/*        <span>Регистрация и голосование</span>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <span>Начало голосования</span>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <span>Вы зарегистрированы</span>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className={'votes-form__button-vote'}>
                    <button>
                        Проголосовать
                    </button>
                    <button>
                        Отменить регистрацию
                    </button>
                </div>
            </div>
            <div className={'my-votes__link-arrow'}>
                <span>ПОКАЗАТЬ ПОЛНОСТЬЮ</span>
            </div>
        </div>
    )
}

export default MyVotes;