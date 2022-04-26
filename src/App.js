import './App.css';
import './componets/Authorization/Authorization';
import {Route, Routes, Outlet} from "react-router-dom";
import Header from "./componets/Header/Header";
import Footer from "./componets/Footer/Footer";
import Authorization from "./componets/Authorization/Authorization";
import Registration from "./componets/Registration/Registration";
import RegistrationSecondPageMobile from "./componets/Registration/RegistrationSecondPageMobile/RegistrationSecondPageMobile";
import AuthorizationForgetPassword from "./componets/AuthorizationForgetPassword/AuthorizationForgetPassword";
import AuthorizationSetPassword from "./componets/AuthorizationSetPassword/AuthorizationSetPassword";
import VotesPage from "./componets/VotesPage/VotesPage";
import MainPage from "./componets/MainPage/MainPage";




function App() {


  return (

            <Routes>
                <Route>
                    <Route path={'/auth'} element={<Authorization/>}/>
                    <Route path={'/forget-password'} element={<AuthorizationForgetPassword/>}/>
                    <Route path={'/set-password'} element={<AuthorizationSetPassword/>}/>
                    <Route path={'/reg-page'} element={<Registration/>}/>
                    <Route path={'/reg-second-page'} element={<RegistrationSecondPageMobile/>}/>
                </Route>
                      <Route path={'main'} element={<Layout/>}>
                      <Route index element={<MainPage/>}/>
                          <Route path={'votes-page'} element={<VotesPage/>}/>
                </Route>
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
