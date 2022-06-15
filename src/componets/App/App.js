import './App.css';
import '../Authorization/Authorization';
import {Route, Routes, Outlet} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Authorization from "../Authorization/Authorization";
import Registration from "../Registration/Registration";
import RegistrationSecondPageMobile from "../Registration/RegistrationSecondPageMobile/RegistrationSecondPageMobile";
import AuthorizationForgetPassword from "../AuthorizationForgetPassword/AuthorizationForgetPassword";
import AuthorizationSetPassword from "../AuthorizationSetPassword/AuthorizationSetPassword";
import VotesPage from "../VotesPage/VotesPage";
import MainPage from "../MainPage/MainPage";
import CallVotingPage from "../CallVotingPage/CallVotingPage";
import MyProfilePage from "../ MyProfilePage/ MyProfilePage";
import DetailsVotesPage from "../DetailsVotesPage/DetailsVotesPage";
import DetailsVotesPageResultVotes from "../DetailsVotesPageResultVotes/DetailsVotesPageResultVotes";







function App() {


  return (
            <Routes>
                <Route>
                    <Route path={'/auth'} element={<Authorization/>}/>
                    <Route path={'/forget-password'} element={<AuthorizationForgetPassword/>}/>
                    <Route path={'/set-password'} element={<AuthorizationSetPassword/>}/>
                    <Route path={'/reg-page'} element={<Registration/>}/>
                    <Route path={'/reg-second-page'} element={<RegistrationSecondPageMobile/>}/>
                    <Route path={'/'} element={<Authorization/>}/>
                </Route>
                <Route>
                      <Route path={'main'} element={<Layout/>}>
                      <Route index element={<MainPage/>}/>
                          <Route path={'votes-page'} element={<VotesPage/>}/>
                          <Route path={'call-voting-page'} element={<CallVotingPage/>}/>
                          <Route path={'my-profile'} element={<MyProfilePage/>}/>
                      </Route>
                </Route>
                <Route>
                    <Route path={'call-voting-page'} element={<Layout/>}>
                        <Route index element={<CallVotingPage/>}/>
                        <Route path={'details-vote'} element={<DetailsVotesPage/>}/>
                </Route>
                       <Route path={'votes-page'} element={<Layout/>}>
                           <Route index element={<VotesPage/>}/>
                           <Route path={'result-vote'} element={<DetailsVotesPageResultVotes/>}/>
                       </Route>
                </Route>
                      {/*<Route>*/}
                      {/*  <Route path={'votes-page'} element={<Layout/>}>*/}
                      {/*      <Route index element={<VotesPage/>}/>*/}
                      {/*      <Route path={'result-page'} element={<DetailsVotesPageResultVotes/>}/>*/}
                      {/*  </Route>     */}
                      {/* <Route path={'call-voting-page'} element={<Layout/>}>*/}
                      {/*  <Route index element={<CallVotingPage/>}/>*/}
                      {/*     <Route path={'call-voting-page'} element={<CallVotingPage/>}/>*/}
                      {/*     <Route path={'details-vote'} element={<DetailsVotesPage/>}/>*/}
                      {/* </Route>*/}
            </Routes>
  );
}

function Layout () {
    return (
        <div className="App">
            <Header/>
            <main className={'main'}>
                <div className={'main-content _container'}>
                    <Outlet/>
                </div>
            </main>
            <Footer/>
        </div>
    )
}



export default App;
