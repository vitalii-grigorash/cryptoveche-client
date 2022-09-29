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
import VotesPageSuccessRegLaterModal from "../VotesPageSuccessRegLaterModal/VotesPageSuccessRegLaterModal";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import timeZone from '../../utils/TimeZoneData/TimeZoneRu.json';
import * as Auth from '../../Api/Auth';
import * as Events from '../../Api/Events';

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
    const [hideRegForm, setHideRegForm] = useState(false);
    const [allEvents, setAllEvents] = useState([]);
    const [isSuccessModalActive, setSuccessModalActive] = useState(false);
    const [successModalText, setSuccessModalText] = useState('');
    const [isResultTabOpen, setResultTabOpen] = useState(false);
    const [utcOffset, setUtcOffset] = useState('');
    const [changeUtcOffset, setChangeUtcOffset] = useState('');
    const [preLoaderAuthBtn, setPreloaderAuthBtn] = useState(false);
    const [preLoaderRegBtn, setPreLoaderRegBtn] = useState(false)
    const [joinId, setJoinId] = useState('');
    const [isReloadDetailsPage, setReloadDetailsPage] = useState(false);
    const [eventWaitingIdByLink, setEventWaitingIdByLink] = useState('');
    const [eventQuestionsIdByLink, setEventQuestionsIdByLink] = useState('');
    const [eventResultIdByLink, setEventResultIdByLink] = useState('');

    function requestHelper(request, body = {}) {
        return new Promise((resolve, reject) => {
            if (localStorage.getItem('jwt')) {
                const jwt = localStorage.getItem('jwt');
                const jwtTokens = JSON.parse(jwt);
                request(jwtTokens.access_token, body)
                    .then((res) => {
                        if (res.status === 'failure') {
                            Auth.getNewTokens(jwtTokens.refresh_token)
                                .then((newTokens) => {
                                    if (newTokens.status === 'failure') {
                                        logout();
                                    } else {
                                        localStorage.setItem('jwt', JSON.stringify(newTokens));
                                        request(newTokens.access_token, body)
                                            .then((res) => {
                                                resolve(res);
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
                            resolve(res);
                        }
                    })
                    .catch((err) => {
                        throw new Error(err.message);
                    })
            } else {
                logout();
            }
        })
    }

    useEffect(() => {
        if (isLoggedIn) {
            if (
                pathname === '/' ||
                pathname === '/votes-page' ||
                pathname === '/my-profile'
            ) {
                requestHelper(Events.getEvents)
                    .then((data) => {
                        setAllEvents(data);
                    })
                    .catch((err) => {
                        throw new Error(err.message);
                    })
            }
        }
        // eslint-disable-next-line
    }, [pathname, isLoggedIn])

    function hideRegisterModal() {
        setModalActive(false);
        setPreLoaderRegBtn(false)
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
            if (user.first_name === "" || user.first_name === undefined) {
                return `${userDefaultName.firstName.charAt(0)}`;
            } else {
                return `${user.first_name.charAt(0)}`;
            }
        }
        const lastName = function () {
            if (user.last_name === "" || user.last_name === undefined) {
                return userDefaultName.lastName
            } else {
                return user.last_name;
            }
        }
        const middleName = function () {
            if (user.second_name === "" || user.second_name === undefined) {
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
        if (localStorage.getItem('jwt')) {
            localStorage.removeItem('jwt');
        }
        if (localStorage.getItem('currentEvent')) {
            localStorage.removeItem('currentEvent');
        }
        setLoggedIn(false);
        setCurrentUser({});
        setUtcOffset('');
        navigate('/auth');
        setPreloaderAuthBtn(false)
        setPreLoaderRegBtn(false)
    }

    function setOffset(offset) {
        const localOffset = timeZone.find(value => value.VALUE === offset.toString())
        setUtcOffset(localOffset.LABEL);
        setChangeUtcOffset(localOffset.VALUE)
    }

    function handleLogin(email, password) {
        if (email === '' || password === '') {
            setAuthError('Необходмо заполнить все поля');
            setPreloaderAuthBtn(false)
        } else {
            Auth.authorize(email, password)
                .then((res) => {
                    if (res.status === 'failure') {
                        setAuthError('Неправильное имя пользователя или пароль');
                        setPreloaderAuthBtn(false)
                    } else {
                        if (isRememberMe) {
                            localStorage.setItem('user', JSON.stringify(res));
                        }
                        setLoggedIn(true);
                        setCurrentUser(res);
                        createUserName(res);
                        setOffset(res.utc_offset);
                        navigate('/');
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
            setPreloaderAuthBtn(true);
            setAuthError('');
        }
    }

    useEffect(() => {
        if (localStorage.getItem('user')) {
            const userData = localStorage.getItem('user');
            const user = JSON.parse(userData);
            setCurrentUser(user);
            createUserName(user);
            setPreloaderAuthBtn(false)
            setLoggedIn(true);
            setOffset(user.utc_offset)
            if (
                pathname === '/auth' ||
                pathname === '/forget-password' ||
                pathname === '/rstpwd' ||
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

    function hideRegEmailErrors() {
        setEmailErrorMessage('');
        setChangeBorderInputEmail('_input-border-black-reg-page');
    }

    function handleRegister(registerData) {
        if (isPolicyAccept) {
            if (registerData.isRegistrationByToken) {
                Auth.registrationUserByToken(registerData)
                    .then((res) => {
                        if (res.status === 'ok') {
                            setModalActive(true);
                            hideRegEmailErrors();
                            setHideRegForm(true);
                        }
                    })
                    .catch((err) => {
                        console.log(err.message);
                    })
            } else {
                Auth.registration(registerData)
                    .then((res) => {
                        if (res.text === 'User has already exist') {
                            setChangeBorderInputEmail('_input-border-red');
                            setEmailErrorMessage('Пользователь с данным email уже существует');
                        } else {
                            setModalActive(true);
                            hideRegEmailErrors();
                            setHideRegForm(true);
                        }
                    })
                    .catch((err) => {
                        console.log(err.message);
                    })
            }
        } else {
            console.log('Необходимо отметить ознакомление с политикой');
        }
    }

    const toggleEventRegistration = (eventId) => {
        const body = {
            id: eventId
        }
        requestHelper(Events.registrationUserInEvents, body)
            .then((data) => {
                if (data.status === 'ok') {
                    requestHelper(Events.getEvents)
                        .then((data) => {
                            setAllEvents(data);
                            const curentEvent = data.find(event => event.id === eventId);
                            if (curentEvent.isRegistered) {
                                handleShowSuccessModal();
                                setSuccessModalText('Вы успешно зарегистрировались!');
                            } else {
                                handleShowSuccessModal();
                                setSuccessModalText('Вы успешно отменили регистрацию!');
                            }
                        })
                        .catch((err) => {
                            throw new Error(err.message);
                        })
                }
            })
            .catch((err) => {
                console.log(err);
            })
    };

    function handleCurrentEvents(data, isDetailsClick) {
        const currentEvent = {
            id: data.id
        }
        if (localStorage.getItem('currentEvent')) {
            localStorage.removeItem('currentEvent');
            localStorage.setItem('currentEvent', JSON.stringify(currentEvent));
        } else {
            localStorage.setItem('currentEvent', JSON.stringify(currentEvent));
        }
        if (isDetailsClick) {
            navigate('/details-vote');
        } else {
            navigate('/call-voting-page');
        }
    }

    function handleResultTabOpen() {
        setResultTabOpen(false);
    }

    function showEventResult(data) {
        const currentEvent = {
            id: data.id
        }
        if (localStorage.getItem('currentEvent')) {
            localStorage.removeItem('currentEvent');
            localStorage.setItem('currentEvent', JSON.stringify(currentEvent));
        } else {
            localStorage.setItem('currentEvent', JSON.stringify(currentEvent));
        }
        setResultTabOpen(true);
        navigate('/details-vote');
    }

    function handleShowSuccessModal() {
        if (isSuccessModalActive) {
            setSuccessModalActive(false);
        } else {
            setSuccessModalActive(true);
        }
    }

    function formatDate(serverDate) {
        const localDate = new Date(serverDate.toString());
        const defaultDate = localDate.getDate();
        const date = `${defaultDate.toString().length === 1 ? `${'0' + defaultDate}` : `${defaultDate}`}`;
        const defaultMonth = localDate.getMonth() + 1;
        const month = `${defaultMonth.toString().length === 1 ? `${'0' + defaultMonth}` : `${defaultMonth}`}`;
        const year = localDate.getFullYear();
        return `${date + '.' + month + '.' + year}`;
    }

    // function formatTime(serverDate) {
    //     const localDate = new Date(serverDate.toString());
    //     const localDateUtc = localDate.getTimezoneOffset();
    //     if (localDateUtc !== Number(changeUtcOffset * (-60)) || Number(currentUser.utc_offset * (-60))) {
    //         localDate.setUTCHours(localDate.getUTCHours() + Number(changeUtcOffset));
    //         const defaultHours = localDate.getUTCHours();
    //         const hoursChangeUtc = `${defaultHours.toString().length === 1 ? `${'0' + defaultHours}` : `${defaultHours}`}`;
    //         const defaultMinutes = localDate.getMinutes();
    //         const minutes = `${defaultMinutes.toString().length === 1 ? `${'0' + defaultMinutes}` : `${defaultMinutes}`}`;
    //         return `${hoursChangeUtc  + ':' + minutes}`;
    //     } else {
    //         const defaultHours = localDate.getHours();
    //         const hours = `${defaultHours.toString().length === 1 ? `${'0' + defaultHours}` : `${defaultHours}`}`;
    //         const defaultMinutes = localDate.getMinutes();
    //         const minutes = `${defaultMinutes.toString().length === 1 ? `${'0' + defaultMinutes}` : `${defaultMinutes}`}`;
    //         return `${hours + ':' + minutes}`;
    //     }
    // }

    function formatTime(serverDate) {
        const localDate = new Date(serverDate);
        const currentDate = new Date();
        const getUtsCurrent = currentDate.getTimezoneOffset();
        const localDateUtc = localDate.getTimezoneOffset();
        if (localDateUtc !== Number(changeUtcOffset * (-60))) {
            const serverOffsetMillis = 60 * 1000 * Number(changeUtcOffset * -60);
            const sumGetUtccurrent = 60 * 1000 * getUtsCurrent;
            const localOffset = new Date(localDate.getTime() - serverOffsetMillis + sumGetUtccurrent);
            const defaultHours = localOffset.getHours();
            const hoursChangeUtc = `${defaultHours.toString().length === 1 ? `${'0' + defaultHours}` : `${defaultHours}`}`;
            const defaultMinutes = localDate.getMinutes();
            const minutes = `${defaultMinutes.toString().length === 1 ? `${'0' + defaultMinutes}` : `${defaultMinutes}`}`;
            return `${hoursChangeUtc + ':' + minutes}`;
        }
        else {
            const defaultHours = localDate.getHours();
            const hours = `${defaultHours.toString().length === 1 ? `${'0' + defaultHours}` : `${defaultHours}`}`;
            const defaultMinutes = localDate.getMinutes();
            const minutes = `${defaultMinutes.toString().length === 1 ? `${'0' + defaultMinutes}` : `${defaultMinutes}`}`;
            return `${hours + ':' + minutes}`;
        }
    }

    useEffect(() => {
        ws.addEventListener('message', (e) => {
            console.log('WebSocketMessage');
            console.log(JSON.parse(e.data));
        })
    })

    // useEffect(() => {
    //     const socket = new WebSocket("wss://client.evote65.dltc.spbu.ru/ws")
    //     socket.onopen = () => {
    //         socket.send(JSON.stringify({
    //             id: currentUser.id,
    //             username: userName,
    //             method: "connection"
    //         }))
    //     }
    // }, [currentUser, userName])

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
                                    preLoaderBtn={preLoaderAuthBtn}
                                />}
                            />
                            <Route path='/forget-password' element={<AuthorizationForgetPassword />} />
                            <Route path='/rstpwd/:token' element={<AuthorizationSetPassword />} />
                            <Route path='/reg-page'
                                element={<Registration
                                    handleRegister={handleRegister}
                                    handlePolicyAccept={handlePolicyAccept}
                                    isPolicyAccept={isPolicyAccept}
                                    modalActive={modalActive}
                                    emailErrorMessage={emailErrorMessage}
                                    changeBorderInputEmail={changeBorderInputEmail}
                                    hideRegisterModal={hideRegisterModal}
                                    hideRegForm={hideRegForm}
                                    hideRegEmailErrors={hideRegEmailErrors}
                                    preLoaderReg={preLoaderRegBtn}
                                />}
                            />
                            <Route exact path='/'
                                element={<MainPage
                                    allEvents={allEvents}
                                    requestHelper={requestHelper}
                                    handleCurrentEvents={handleCurrentEvents}
                                    toggleEventRegistration={toggleEventRegistration}
                                    showEventResult={showEventResult}
                                    formatDate={formatDate}
                                    formatTime={formatTime}
                                    utcOffset={utcOffset}
                                    isLoggedIn={isLoggedIn}
                                />}
                            />
                            <Route exact path='/call-voting-page'
                                element={<CallVotingPage
                                    requestHelper={requestHelper}
                                    handleCurrentEvents={handleCurrentEvents}
                                />}
                            />
                            <Route exact path='/my-profile'
                                element={<MyProfilePage
                                    requestHelper={requestHelper}
                                    utcOffset={utcOffset}
                                    allEvents={allEvents}
                                    createUserName={createUserName}
                                    setOffset={setOffset}
                                    handleLogout={logout}
                                    formatTime={formatTime}
                                    formatDate={formatDate}
                                />}
                            />
                            <Route exact path='/details-vote'
                                element={<DetailsVotesPage
                                    requestHelper={requestHelper}
                                    handleCurrentEvents={handleCurrentEvents}
                                    toggleEventRegistration={toggleEventRegistration}
                                    showEventResult={showEventResult}
                                    isResultTabOpen={isResultTabOpen}
                                    formatDate={formatDate}
                                    formatTime={formatTime}
                                    utcOffset={utcOffset}
                                    handleResultTabOpen={handleResultTabOpen}
                                />}
                            />
                            <Route exact path='/votes-page'
                                element={<VotesPage
                                    allEvents={allEvents}
                                    handleCurrentEvents={handleCurrentEvents}
                                    toggleEventRegistration={toggleEventRegistration}
                                    showEventResult={showEventResult}
                                    formatDate={formatDate}
                                    formatTime={formatTime}
                                    utcOffset={utcOffset}
                                />}
                            />
                        </Routes>
                        <VotesPageSuccessRegLaterModal
                            isActive={isSuccessModalActive}
                            handleShowSuccessModal={handleShowSuccessModal}
                            successModalText={successModalText}
                        />
                    </div>
                </main>
                {isLoggedIn && (
                    <Footer
                        utc={utcOffset}
                        setOffset={setOffset}
                        requestHelper={requestHelper}
                    />
                )}
            </div>
        </CurrentUserContext.Provider>
    );
}
export default App;