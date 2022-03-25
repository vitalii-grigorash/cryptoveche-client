import './App.css';
import './componets/Auth/Auth';
import {Route, Switch, Redirect} from "react-router-dom";
import Header from "./componets/Header/Header";
import Footer from "./componets/Footer/Footer";
import Auth from "./componets/Auth/Auth";
import CounterBlock from "./componets/CounterBlock/CounterBlock";
import MyVotes from "./componets/MyVotes/MyVotes";
import CalendarVotes from "./componets/CalendarVotes/CalendarVotes";


function App() {


  return (
<>
      <Switch>
          <Route path='/home' component={Auth}/>
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
                            <div className={'main-content__vote-actual'}>
                                <MyVotes/>
                            </div>
                    </div>
                </main>
            {/*<main className={'content _container'}>*/}
            {/*    <h2>Добро пожаловать в КриптоВече</h2>*/}
            {/*</main>*/}
            <Footer/>
        </div>
    )
}




export default App;
