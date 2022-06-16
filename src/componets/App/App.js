import './App.css';
import '../Authorization/Authorization';
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
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
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as Auth from '../../Api/Auth';

function App() {

    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [userName, setUserName] = useState('');

    const userDefaultName = {
        lastName: "Неизвестный",
        firstName: "Пользователь"
    }

    function createUserName(user) {
        const firstName = function () {
            if (user.first_name === "") {
                return `${userDefaultName.firstName.charAt(0)}`;
            } else {
                return `${user.first_name.charAt(0)}`;
            }
        }
        const lastName = function () {
            if (user.last_name === "") {
                return userDefaultName.lastName
            } else {
                return user.last_name;
            }
        }
        const middleName = function () {
            if (user.second_name === "") {
                return ""
            } else {
                return `${user.second_name.charAt(0)}.`;
            }
        };
        const shortName = `${lastName()} ${firstName()}.${middleName()}`;
        setUserName(shortName);
    }

    function logout() {
        if (localStorage.getItem('user')) {
            localStorage.removeItem('user');
        }
        setLoggedIn(false);
        setCurrentUser({});
        navigate('/auth');
    }

    function handleLogin(email, password) {
        if (email === '' || password === '') {
            setAuthError('Необходмо заполнить все поля');
        } else {
            Auth.authorize(email, password)
                .then((res) => {
                    if (res.status === 'failure') {
                        setAuthError('Неправильное имя пользователя или пароль');
                    } else {
                        localStorage.setItem('user', JSON.stringify(res));
                        setAuthError('');
                        setLoggedIn(true);
                        setCurrentUser(res);
                        createUserName(res);
                        navigate('/');
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    useEffect(() => {
        if (localStorage.getItem('user')) {
            const userData = localStorage.getItem('user');
            const user = JSON.parse(userData);
            createUserName(user);
            setLoggedIn(true);
            setCurrentUser(user);
            if (
                pathname === '/auth' ||
                pathname === '/forget-password' ||
                pathname === '/set-password' ||
                pathname === '/reg-page' ||
                pathname === '/reg-second-page'
            ) {
                navigate('/');
            }
        } else {
            if (
                pathname === '/' ||
                pathname === '/call-voting-page' ||
                pathname === '/my-profile' ||
                pathname === '/details-vote' ||
                pathname === '/result-vote' ||
                pathname === '/votes-page'
            ) {
                logout();
            }
        }
    }, []);

    return (
        <CurrentUserContext.Provider value={currentUser}>

            <div className="App">
                {isLoggedIn && (
                    <Header
                        handleLogout={logout}
                        userName={userName}
                    />
                )}
                <main className={'main'}>
                    <div className={'main-content _container'}>
                        <Routes>
                            <Route path='/auth'
                                element={<Authorization
                                    handleLogin={handleLogin}
                                    authError={authError}
                                />}
                            />
                            <Route path='/forget-password' element={<AuthorizationForgetPassword />} />
                            <Route path='/set-password' element={<AuthorizationSetPassword />} />
                            <Route path='/reg-page' element={<Registration />} />
                            <Route path='/reg-second-page' element={<RegistrationSecondPageMobile />} />
                            <Route exact path='/' element={<MainPage />} />
                            <Route exact path='/call-voting-page' element={<CallVotingPage />} />
                            <Route exact path='/my-profile' element={<MyProfilePage />} />
                            <Route exact path='/details-vote' element={<DetailsVotesPage />} />
                            <Route exact path='/votes-page' element={<VotesPage />} />
                            <Route exact path='/result-vote' element={<DetailsVotesPageResultVotes />} />
                        </Routes>
                    </div>
                </main>
                {isLoggedIn && (
                    <Footer />
                )}
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
