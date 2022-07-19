import React, { useEffect, useState } from "react";
import './MainPage.css';
import CounterBlock from "../CounterBlock/CounterBlock";
import MyVotesBlock from "../MyVotesBlock/MyVotesBlock";
import ActualBlock from "../ActualBlock/ActualBlock";
import ScanQRMobile from "../ScanQRMobile/ScanQRMobile";
import AmountVotesBlock from "../AmountVotesBlock/AmountVotesBlock";
import ObserverCryptoBlock from "../ObserverCryptoBlock/ObserverCryptoBlock";
import CalendarVotes from "../CalendarVotes/CalendarVotes";
import { getStats } from '../../Api/Stats';
import { getEvents } from '../../Api/Events';
import * as authorize from '../../Api/Auth';
import logout from '../../componets/App/App'



const MainPage = () => {

  const [statsData, setStatsData] = useState({});
  const [myVotesData, setMyVotesData] = useState([]);

  useEffect(() => {

    const getStatsData = async () => {
      try {
        getStats()
          .then(data => setStatsData(data))
      } catch (error) {
        console.log(error);
      }
    }
    getStatsData();

    const getMyVotes = async () => {
      if (localStorage.getItem('jwt')) {
        const jwt = localStorage.getItem('jwt');
        const jwtTokens = JSON.parse(jwt);
        getEvents(jwtTokens.access_token)
          .then((res) => {
            if (res.text === 'Expired token') {
              authorize.getNewTokens(jwtTokens.refresh_token)
                .then((newTokens) => {
                  if (newTokens.text === 'Expired token') {
                    logout();
                  } else {
                    localStorage.setItem('jwt', JSON.stringify(newTokens));
                    getEvents(newTokens.access_token)
                      .then((res) => {
                        setMyVotesData(res);
                      })
                      .catch((err) => {
                        throw new Error(err.message);
                      })
                  }
                })
                .catch((err) => {
                  throw new Error(err.message);
                })
            } else {
              setMyVotesData(res);
            }
          })
          .catch((err) => {
            throw new Error(err.message);
          })
      } else {
        logout();
      }
    }
    getMyVotes();

  }, []);

  return (
    <div>
      <div className={'main-content__title'}>
        Добро пожаловать в КриптоВече!
      </div>
      <CounterBlock stats={statsData} />
      <div className={'main-content__my-votes-actual'}>
        <MyVotesBlock myVotes={myVotesData} />
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