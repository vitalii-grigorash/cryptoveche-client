import React, { useEffect, useState } from "react";
import './MainPage.css';
import CounterBlock from "../CounterBlock/CounterBlock";
import MyVotesBlock from "../MyVotesBlock/MyVotesBlock";
import ActualBlock from "../ActualBlock/ActualBlock";
import ScanQRMobile from "../ScanQRMobile/ScanQRMobile";
import AmountVotesBlock from "../AmountVotesBlock/AmountVotesBlock";
import ObserverCryptoBlock from "../ObserverCryptoBlock/ObserverCryptoBlock";
import CalendarVotes from "../CalendarVotes/CalendarVotes";
import * as Stats from '../../Api/Stats';
import { getEvents } from '../../Api/Events';
import * as authorize from '../../Api/Auth';
import logout from '../../componets/App/App'



const MainPage = (props) => {

  const {
    allEvents,
    requestHelper
  } = props

  const [statsData, setStatsData] = useState({});

  useEffect(() => {

    requestHelper(Stats.getStats)
    .then ((data) => {
      setStatsData(data)
    })

  }, []);

  return (
    <div>
      <div className={'main-content__title'}>
        Добро пожаловать в КриптоВече!
      </div>
      <CounterBlock stats={statsData} />
      <div className={'main-content__my-votes-actual'}>
        <MyVotesBlock myVotes={allEvents} />
        <ActualBlock myVotes={allEvents} />
        <ScanQRMobile />
      </div>
      <div className={'main-content__amount-votes-and-calendar-votes'}>
        <div className={'gistogramma-and-observer-cryptoveche'}>
          <AmountVotesBlock />
          <ObserverCryptoBlock />
        </div>
        <CalendarVotes />
      </div>
    </div>
  )
}

export default MainPage;