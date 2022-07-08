import React, { useEffect, useState } from "react";
import './MainPage.css';
import CounterBlock from "../CounterBlock/CounterBlock";
import MyVotesBlock from "../MyVotesBlock/MyVotesBlock";
import ActualBlock from "../ActualBlock/ActualBlock";
import ScanQRMobile from "../ScanQRMobile/ScanQRMobile";
import AmountVotesBlock from "../AmountVotesBlock/AmountVotesBlock";
import ObserverCryptoBlock from "../ObserverCryptoBlock/ObserverCryptoBlock";
import CalendarVotes from "../CalendarVotes/CalendarVotes";
import { options } from '../../config';

const API_URL = options.apiUrl;



const MainPage = () => {

  const [statsData, setStatsData] = useState({});
  const [myVotesData, setMyVotesData] = useState([]);

  useEffect(() => {

    const getStatsData = async () => {
      try {
        const response = await fetch(`${API_URL}/common_statistic`);
        const json = await response.json();
        setStatsData(json)
      } catch (error) {
        console.log(error);
      }
    }
    getStatsData();


      const getMyVotes = async () => {
        try {
          const response = await fetch(`${API_URL}/events/me`);
          const json = await response.json();
          setMyVotesData(json)
        } catch (error) {
          console.log(error);
        }
      }
      getMyVotes();
      // console.log(myVotesData); // Unauthorized request. Later need map array myVotesData 

  }, []);


  return (
    <div>
      <div className={'main-content__title'}>
        Добро пожаловать в КриптоВече!
      </div>
      <CounterBlock stats={statsData} />
      <div className={'main-content__my-votes-actual'}>
        <MyVotesBlock myVotes={myVotesData}/>
        <ActualBlock myVotes={myVotesData} />
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