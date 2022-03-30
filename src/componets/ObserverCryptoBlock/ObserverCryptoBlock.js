import React from "react";
import './ObserverCryptoBlock.css';
import picture from '../../img/ObserverCryptoPicture.svg';
import icon_arrow from "../../img/MyVotes_icon_arrow.svg";

const ObserverCryptoBlock = () => {

    return (
            <div className={'observer-crypto-block-wrapper'}>
                    <h2>Обозреватель КриптоВече</h2>
                    <h3>Получите невероятное наслаждение от всяких там знаете ли транзакций и блоков и почувствуйте себя совсем уж нердом, перейдя в систему “Обозреватель блоков системы электронных голосований”!</h3>
                    <img alt={'Картинка'} src={picture}/>
                <div className={'my-votes__link-arrow'}>
                    <a href={'ссылка на страницу Обозреватель КриптоВече'} target={'_blank'}><span className={'my-votes__link-arrow__link-page-observer'}>ПЕРЕЙТИ В ОБОЗРЕВАТЕЛЬ</span></a><img alt={'logo_arrow'} src={icon_arrow}/>
                </div>
            </div>

    )
}

export default ObserverCryptoBlock;