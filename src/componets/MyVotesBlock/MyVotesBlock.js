import React from "react";
import './MyVotesBlock.css';
import icon_data from '../../img/MyVotes_data_icon.svg';
import icon_time from '../../img/MyVotes_icon_time.svg';
import icon_info from  '../../img/MyVotes_icon_info.svg';
import icon_arrow from '../../img/MyVotes_icon_arrow.svg';
import icon_checkmark from '../../img/MyVotes_icon_checkmark.svg';

const MyVotesBlock = () => {

    return (
        <div className={'my-votes-block-wrapper'}>
            <h2 className={'m'}>Мои голосования</h2>
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
                        <h4>Начало голосования:</h4>
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
                <div className={'my-votes-block__vote-form'}>
                    <h3>Название голосования какое-то например довольно длинное чтобы показать, как встанет тексток на две строчки</h3>
                    <h5>Консорциум СПбГУ</h5>
                    <div className={'vote-form__status-block'}>
                        <div className={'vote-form__status-block-current-status'}>
                            <div className={'vote-form__status-block__current-status__registration-in-progress'}>
                                <ul><li>Регистрация и голосование</li></ul>
                            </div>
                            <div className={'vote-form__status-block-current-status__open'}>
                                <ul><li>Открытое</li></ul></div>
                        </div>
                        <div className={'vote-form__status-block-start-vote'}>
                            <h4>Начало голосования:</h4>
                            <div className={'start-vote__data'}>
                                <img alt={''} src={icon_data}/>
                                <span>5.01.2022</span>
                                <img alt={''} src={icon_time}/>
                                <span>18.00</span>
                            </div>
                        </div>
                        <div className={'vote-form__status-block__checkmark-reg'}>
                            <span className={'vote-form__status-block__checkmark-reg-green'}><img alt={''} src={icon_checkmark}/>Вы зарегистрированы</span>
                        </div>
                    </div>
                <div className={'votes-form__button-vote-cancel-reg'}>
                    <button className={'button-vote'}>
                        Проголосовать
                    </button>
                    <button className={'cancel-reg'}>
                        Отменить регистрацию
                    </button>
                </div>
            </div>
            </div>
            <div className={'my-votes__link-arrow'}>
                <a href={'ссылка на страницу Мои голосования'} target={'_blank'}><span>ПОКАЗАТЬ ПОЛНОСТЬЮ</span></a><a href={'/home'}><img alt={'logo_arrow'} src={icon_arrow}/></a>
            </div>
        </div>
    )
}

export default MyVotesBlock;