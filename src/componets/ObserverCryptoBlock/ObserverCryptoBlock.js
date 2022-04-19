import React from "react";
import './ObserverCryptoBlock.css';
import picture from '../../img/ObserverCryptoPicture.svg';
import icon_arrow from "../../img/MyVotes_icon_arrow.svg";

const ObserverCryptoBlock = () => {

    return (
            <div className={'observer-crypto-block-wrapper main-content__elem2'}>
                    <h2 className={'observer-crypto__elem1'}>Обозреватель КриптоВече</h2>
                    <h3 className={'observer-crypto__elem2'}>Получите невероятное наслаждение от всяких там знаете ли транзакций и блоков и почувствуйте себя совсем уж нердом, перейдя в систему “Обозреватель блоков системы электронных голосований”!</h3>
                    <img className={'observer-crypto-block__image-block observer-crypto__elem3'} alt={'Картинка'} src={picture}/>
                <div className={'observer-crypto-block__link-arrow observer-crypto__elem4'}>
                    <a href={'ссылка на страницу Обозреватель КриптоВече'} target={'_blank'}><span className={'observer-crypto-block__link-arrow__link-page-observer'}>ПЕРЕЙТИ В ОБОЗРЕВАТЕЛЬ</span></a><a href={'/home'} target={'_blank'}><img alt={'logo_arrow'} src={icon_arrow}/></a>
                </div>
            </div>

    )
}

export default ObserverCryptoBlock;