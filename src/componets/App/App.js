import './App.css';
import '../Authorization/Authorization';
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Authorization from "../Authorization/Authorization";
import Registration from "../Registration/Registration";
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
    const [isRememberMe, setRememberMe] = useState(true);
    const [isPolicyAccept, setPolicyAccept] = useState(true);
    const [modalActive, setModalActive] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [changeBorderInputEmail, setChangeBorderInputEmail] = useState('_input-border-black-reg-page');

    function hideRegisterModal() {
        setModalActive(false);
    }

    function handleRememberMe() {
        if (isRememberMe) {
            setRememberMe(false);
        } else {
            setRememberMe(true);
        }
    }

    function handlePolicyAccept() {
        if (isPolicyAccept) {
            setPolicyAccept(false);
        } else {
            setPolicyAccept(true);
        }
    }

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
                        if (isRememberMe) {
                            localStorage.setItem('user', JSON.stringify(res));
                        }
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
                pathname === '/reset' ||
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
        // eslint-disable-next-line
    }, []);

    function handleRegister(registerData) {
        console.log(registerData);
        if (isPolicyAccept) {
            Auth.registration(registerData)
                .then((res) => {
                    console.log(res);
                    if (res.text === 'User has already exist') {
                        setChangeBorderInputEmail('_input-border-red');
                        setEmailErrorMessage('Пользователь с данным email уже существует');
                    } else {
                        setModalActive(true);
                        setEmailErrorMessage('');
                        setChangeBorderInputEmail('_input-border-black-reg-page');
                    }
                })
                .catch((err) => {
                    console.log(err.message);
                })
        } else {
            console.log('Необходимо отметить ознакомление с политикой');
        }
    }

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
                                    handleRememberMe={handleRememberMe}
                                    isRememberMe={isRememberMe}
                                />}
                            />
                            <Route path='/forget-password' element={<AuthorizationForgetPassword />} />
                            <Route path='/reset' element={<AuthorizationSetPassword />} />
                            <Route path='/reg-page'
                                element={<Registration
                                    handleRegister={handleRegister}
                                    handlePolicyAccept={handlePolicyAccept}
                                    isPolicyAccept={isPolicyAccept}
                                    modalActive={modalActive}
                                    emailErrorMessage={emailErrorMessage}
                                    changeBorderInputEmail={changeBorderInputEmail}
                                    hideRegisterModal={hideRegisterModal}
                                />}
                            />
                            <Route path='/reg-page' element={<Registration />} />
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
