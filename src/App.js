import './App.css';
import './componets/Authorization/Authorization';
import {Route, Switch, Redirect} from "react-router-dom";
import Header from "./componets/Header/Header";
import Footer from "./componets/Footer/Footer";
import Authorization from "./componets/Authorization/Authorization";
import CounterBlock from "./componets/CounterBlock/CounterBlock";
import CalendarVotes from "./componets/CalendarVotes/CalendarVotes";
import ActualBlock from "./componets/ActualBlock/ActualBlock";
import AmountVotesBlock from "./componets/AmountVotesBlock/AmountVotesBlock";
import MyVotesBlock from "./componets/MyVotesBlock/MyVotesBlock";
import ObserverCryptoBlock from "./componets/ObserverCryptoBlock/ObserverCryptoBlock";
import Registration from "./componets/Registration/Registration";



function App() {


  return (
<>
      <Switch>
          <Route path='/home' component={Authorization}/>
          <Route path='/regpage' component={Registration}/>
          <Route path='/main' component={Layout}/>
          <Redirect from='/' to = '/home'/>
      </Switch>
</>
  );
}

function Layout () {
    return (
        <div className="App">
            <Header/>
                <main className={'main'}>
                    <div className={'main-content _container'}>
                            <div className={'main-content__title'}>
                                Добро пожаловать в КриптоВече
                            </div>
                        <CounterBlock/>
                            <div className={'main-content__my-votes-actual'}>
                                <MyVotesBlock/>
                                <ActualBlock/>
                            </div>
                        <div className={'main-content__amount-votes-and-calendar-votes'}>
                            <div className={'gistogramma-and-total-amount'}>
                                    <AmountVotesBlock/>
                                    <ObserverCryptoBlock/>
                            </div>
                                <CalendarVotes/>
                        </div>
                    </div>

                </main>
            <Footer/>
        </div>
    )
}




export default App;
