import React from "react";
import './MainPage.css';
import CounterBlock from "../CounterBlock/CounterBlock";
import MyVotesBlock from "../MyVotesBlock/MyVotesBlock";
import ActualBlock from "../ActualBlock/ActualBlock";
import ScanQRMobile from "../ScanQRMobile/ScanQRMobile";
import AmountVotesBlock from "../AmountVotesBlock/AmountVotesBlock";
import ObserverCryptoBlock from "../ObserverCryptoBlock/ObserverCryptoBlock";
import CalendarVotes from "../CalendarVotes/CalendarVotes";
import MainPageSuccessModal from "../MainPageSuccessModal/MainPageSuccessModal";


const MainPage = () => {

    return (
            <div>
                <div className={'main-content__title'}>
                    Добро пожаловать в КриптоВече!
                </div>
                <CounterBlock/>
                    <div className={'main-content__my-votes-actual'}>
                        <MyVotesBlock/>
                        <ActualBlock/>
                        <ScanQRMobile/>
                    </div>
                <div className={'main-content__amount-votes-and-calendar-votes'}>
                    <div className={'gistogramma-and-observer-cryptoveche'}>
                        <AmountVotesBlock/>
                        <ObserverCryptoBlock/>
                    </div>
                    <CalendarVotes/>
                </div>
                <MainPageSuccessModal active={false}/>
            </div>
    )
}

export default MainPage;