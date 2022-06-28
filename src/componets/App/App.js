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

const { getCrypto, getAlgorithmParameters } = require("pkijs/build");

const {
    AttributeTypeAndValue,
    Certificate,
    BasicConstraints,
    Extension,
    ExtKeyUsage
} = require("pkijs/build");
const asn1js = require("asn1js");

const { arrayBufferToString, toBase64 } = require("pvutils");

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




































    const getFullConfig = () => {
        return fetch(`https://client.cryptoveche.local/fullConfig`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.ok ? res : Promise.reject(res))
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(data => data)
            .catch((err) => {
                throw new Error(err.message);
            });
    }

    function b64_to_utf8(str) {
        return decodeURIComponent(escape(window.atob(str)));
    }

    function systemConfigGenerator(
        enableBallotAcception = true,
        enableBallotCorrectness = true,
        enableLDAP = false,
        enableBallotAgregation = true,
        enableESIA = false,
        enablePassword = true,
        lang = "ru",
        logoPath = '',
        enableAdressAndBirth = false,
        systemType = 'political',
        ws,
        wsUser,
        wsPass,
        phoneEnable = false) {
        return {
            "enableBallotAcception": enableBallotAcception,
            "enableBallotCorrectness": enableBallotCorrectness,
            "enableLDAP": enableLDAP,
            "enableBallotAgregation": enableBallotAgregation,
            "enableESIA": enableESIA,
            "enablePassword": enablePassword,
            "lang": lang,
            "logoPath": logoPath,
            "enableAdressAndBirth": enableAdressAndBirth,
            "systemType": systemType,
            "ws_connect": ws,
            "ws_user": wsUser,
            "ws_pass": wsPass,
            "phoneEnable": phoneEnable
        }
    }

    function getSystemConfig() {
        return new Promise(function (resolve, reject) {
            getFullConfig().then(
                config => {
                    const type = config.system_type;
                    const ws = config.ws_connect;
                    const wsUser = config.ws_user;
                    const wsPass = config.ws_pass;
                    const phoneEnable = config.enable_phone;
                    switch (config.system_type) {
                        case 'political':
                            resolve(systemConfigGenerator(true, true, false, false, config.enable_esia, true, config.lang, false, type, ws, wsUser, wsPass, phoneEnable));
                            break;
                        case 'soviet':
                            resolve(systemConfigGenerator(false, false, true, false, false, true, config.lang, false, type, ws, wsUser, wsPass, phoneEnable));
                            break;
                        case 'ras':
                            resolve(systemConfigGenerator(true, true, false, false, false, false, config.lang, false, type, ws, wsUser, wsPass, phoneEnable));
                            break;
                        case 'tosna':
                            resolve(systemConfigGenerator(true, true, false, false, config.enable_esia, true, config.lang, true, type, ws, wsUser, wsPass, phoneEnable));
                            break;
                        default:
                            reject(config);
                            break;
                    }
                }
            );
        });
    }

    function getAuthBody(email, password) {
        const login = email;
        const body = { 'email': login, 'authAs': 'user' };
        const pwd = password;
        body.password = pwd;
        return body;
    }

    function authRequestPromise(body) {
        return fetch(`https://client.cryptoveche.local:443/api/auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
            credentials: 'include'
        })
            .then(res => res.ok ? res : Promise.reject(res))
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then((data) => {
                return data;
            })
            .catch((err) => {
                throw new Error(err.message);
            });
    }

    function getAlg() {
        return {
            name: "ECDSA",
            namedCurve: "P-256",
            hash: "SHA-256",
        }
    }

    async function generateKey(alg) {
        const result = await crypto.subtle.generateKey(alg, true, ["sign", "verify"]);
        return result;
    }

    function getKeys(alg) {
        return new Promise(async function (resolve, reject) {
            generateKey(alg).then(
                result => {
                    if (result) {
                        resolve(result);
                    } else {
                        reject("Error while getKeys");
                    }
                }
            );
        });
    }

    function newSecretPromise(token) {
        return fetch(`https://client.cryptoveche.local:443/api/users/secret/${token}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
            .then(res => res.ok ? res : Promise.reject(res))
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then((data) => {
                return data;
            })
            .catch((err) => {
                throw new Error(err.message);
            });
    }

    function secretPromiseHanlder(secret, token) {
        return new Promise(function (resolve, reject) {
            if (!secret) {
                newSecretPromise(token).then(
                    result => {
                        resolve(result);
                    }
                )
            } else {
                resolve(secret);
            }
        });
    }

    function formEnrollAuthHeader(user, userpwd) {
        return {
            "Authorization": 'Basic ' + window.btoa(unescape(encodeURIComponent(`${user}:${userpwd}`)))
        }
    }

    function myTest(keys, commonName) {
        let context = {};
        let sequence = Promise.resolve();
        const pkcs10Simpl = new Certificate();
        let publicKey;
        let privateKey;
        const hashAlgorithm = "SHA-384";

        const crypto = getCrypto();

        if (typeof crypto == "undefined") {
            console.log("undefined")
        }

        pkcs10Simpl.version = 0;

        // pkcs10Simpl.subject.types_and_values.push(new org.pkijs.simpl.ATTR_TYPE_AND_VALUE({
        //     type: "2.5.4.3",
        //     value: new org.pkijs.asn1.UTF8STRING({
        //         value: commonName
        //     })
        // }));

        pkcs10Simpl.attributes = [];

        publicKey = keys.publicKey;
        privateKey = keys.privateKey;


        sequence = sequence.then(function () {
            return pkcs10Simpl.subjectPublicKeyInfo.importKey(publicKey);
        });

        // sequence = sequence.then(function (result) {
        //     return crypto.digest({ name: "SHA-384" }
        //         , pkcs10Simpl.subjectPublicKeyInfo.subjectPublicKey.value_block.value_hex);
        // }).then(function (result) {
        //     console.log(result);
        //     pkcs10Simpl.attributes.push(new org.pkijs.simpl.ATTRIBUTE({
        //         type: "1.2.840.113549.1.9.14",
        //         values: [(new org.pkijs.simpl.EXTENSIONS({
        //             extensions_array: [
        //                 new org.pkijs.simpl.EXTENSION({
        //                     extnID: "2.5.29.14",
        //                     critical: false,
        //                     extnValue: (new org.pkijs.asn1.OCTETSTRING({
        //                         value_hex: result
        //                     })).toBER(false)
        //                 })
        //             ]
        //         })).toSchema()]
        //     }));
        // });

        sequence = sequence.then(function () {
            return pkcs10Simpl.sign(privateKey, hashAlgorithm);
        }, function (error) {
            context.content = '';
            console.log("Error during exporting public key: " + error);
        });

        sequence = sequence.then(function () {
            const pkcs10Schema = pkcs10Simpl.toSchema();
            const pkcs10Encoded = pkcs10Schema.toBER(false);
            return `-----BEGIN CERTIFICATE REQUEST-----\n${window.btoa(arrayBufferToString(pkcs10Encoded))}\n-----END CERTIFICATE REQUEST-----`;
        }, function (error) {
            context.content = '';
            console.log("Error signing PKCS#10: " + error);
        });

        console.log(context);

        return sequence;
    }

    function formEnrollBody(keys, user) {
        return new Promise(async function (resolve, reject) {
            myTest(keys, user).then(
                csr => {
                    if (csr) {
                        resolve({
                            "certificate_request": csr.toString('base64'),
                        });
                    } else {
                        reject({
                            "certificate_request": "error",
                        });
                    }
                }
            );
        });
    }

    function enrollPromise(body, authHeader) {
        console.log(body, authHeader);
        getFullConfig().then(
            config => {
                const ip = `${config.ca_url}/enroll`;
                return fetch(`${ip}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': authHeader.Authorization
                    },
                    body: JSON.stringify(body)
                })
                    .then(res => res.ok ? res : Promise.reject(res))
                    .then((res) => {
                        if (res.ok) {
                            return res.json();
                        }
                    })
                    .then((data) => {
                        return data;
                    })
                    .catch((err) => {
                        throw new Error(err.message);
                    });
                // fetch({
                //     url: ip,
                //     crossDomain: true,
                //     data: JSON.stringify(body),
                //     cache: false,
                //     async: true,
                //     headers: authHeader,
                //     contentType: 'application/json',
                //     processData: false,
                //     method: 'POST',
                //     type: 'POST',
                //     success: function (data) {
                //         console.log(data);
                //         resolve(data);
                //     },
                //     error: function (data) {
                //         console.log(data);
                //         reject(data);
                //     }
                // });
            }
        );
    }

    async function exportKey(keys) {
        const result = await crypto.subtle.exportKey("jwk", keys.privateKey);
        return result;
    }

    function exportPrivKey(keys) {
        return new Promise(async function (resolve, reject) {
            exportKey(keys).then(
                result => {
                    if (result) {
                        resolve(result);
                    } else {
                        reject("Error while exportPrivKey");
                    }
                }
            );
        });
    }

    function formNewCertsBody(keys, singedCert) {
        return new Promise(async function (resolve, reject) {
            exportPrivKey(keys).then(
                result => {
                    if (result) {
                        resolve({
                            format: "jwk",
                            cert: {
                                privateKey: JSON.stringify(result),
                                signedCertPem: singedCert
                            }
                        });
                    } else {
                        reject("Error while formNewCertsBody");
                    }
                }
            );
        });
    }

    function newCertPromise(body) {
        return new Promise(function (resolve, reject) {
            fetch({
                url: `https://client.cryptoveche.local:443/api/auth`,
                crossDomain: true,
                data: JSON.stringify(body),
                cache: false,
                async: true,
                xhrFields: {
                    withCredentials: true
                },
                contentType: 'application/json',
                processData: false,
                method: 'PUT',
                type: 'PUT',
                success: function (data) {
                    console.log(data);
                    resolve(data);
                },
                error: function (data) {
                    console.log(data);
                    reject(data);
                }
            });
        });
    }

    function enrollPromiseHandler(enrollBody, authHeader, keys) {
        return new Promise(function (resolve, reject) {
            enrollPromise(enrollBody, authHeader).then(
                enroll => {
                    const certBase64 = enroll.result.Cert
                    const decodedCert = b64_to_utf8(certBase64);
                    console.log(certBase64);
                    console.log(decodedCert);
                    formNewCertsBody(keys, decodedCert).then(
                        newCertBody => {
                            resolve(newCertPromise(newCertBody));
                        }
                    );
                },
                error => {
                    console.log(error);
                    reject(error);
                }
            );
        });
    }

    function needEnrollPromiseHandler(needEnroll, secret, token, userId) {
        return new Promise(function (resolve, reject) {
            if (needEnroll) {
                const alg = getAlg();
                Promise.all([
                    secretPromiseHanlder(secret, token),
                    getKeys(alg)
                ]).then(
                    results => {
                        const secret = results[0];
                        const keys = results[1];
                        const enrollAuthHeader = formEnrollAuthHeader(userId, secret);
                        formEnrollBody(keys, userId).then(
                            enrollBody => {
                                resolve(enrollPromiseHandler(enrollBody, enrollAuthHeader, keys));
                            },
                            error => {
                                console.log(error);
                                reject(error);
                            }
                        );
                    },
                    error => {
                        console.log(error);
                        reject(error);
                    }
                );
            } else {
                resolve();
            }
        });
    }

    function authRequestPost(email, password) {
        getSystemConfig()
            .then(
                results => {
                    const config = results[0];
                    const body = getAuthBody(email, password);
                    console.log(config);
                    authRequestPromise(body).then(
                        result => {
                            console.log(result)
                            const userId = result["id"];
                            if (result["status"] === "failure") {
                                console.log("not found");
                                if (config.systemType !== 'soviet') {
                                    console.log("soviet");
                                } else {
                                    console.log("soviet");
                                }
                            } else {
                                const needEnroll = result["need_enroll"];
                                const secret = result["secret"];
                                const is_utc_offset_defined = result["is_utc_offset_defined"];
                                const offset = result["utc_offset"];
                                needEnrollPromiseHandler(needEnroll, secret, result['token'], userId).then(
                                    enroll => {
                                        console.log(enroll);
                                        // brokerForUserNewEvents(userId, config);
                                        // if (is_utc_offset_defined) {
                                        //     setOffset(offset);
                                        // }
                                        // getCurrentEventId().then(
                                        //     eventId => {
                                        //         let waitBroker = setInterval(() => {
                                        //             if (newEvents.size == 0) {
                                        //                 authRouter(eventId);
                                        //                 clearInterval(waitBroker);
                                        //             }
                                        //         }, 1000);
                                        //     },
                                        //     error => {
                                        //         console.log(error);
                                        //     }
                                        // );
                                    },
                                    error => {
                                        console.log(error);
                                    }
                                );
                            }

                        }
                    )
                },
                error => {
                    console.log('connection', '');
                    console.log(error);
                }
            );
    }

    function handleLogin(email, password) {
        if (email === '' || password === '') {
            setAuthError('Необходмо заполнить все поля');
        } else {
            authRequestPost(email, password);
        }
    }











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

    // function handleLogin(email, password) {
    //     if (email === '' || password === '') {
    //         setAuthError('Необходмо заполнить все поля');
    //     } else {
    //         Auth.authorize(email, password)
    //             .then((res) => {
    //                 if (res.status === 'failure') {
    //                     setAuthError('Неправильное имя пользователя или пароль');
    //                 } else {
    //                     if (isRememberMe) {
    //                         localStorage.setItem('user', JSON.stringify(res));
    //                     }
    //                     setAuthError('');
    //                     setLoggedIn(true);
    //                     setCurrentUser(res);
    //                     createUserName(res);
    //                     navigate('/');
    //                 }
    //             })
    //             .catch((err) => {
    //                 console.log(err);
    //             })
    //     }
    // }

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

    function hideRegEmailErrors() {
        setEmailErrorMessage('');
        setChangeBorderInputEmail('_input-border-black-reg-page');
    }

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
                        hideRegEmailErrors();
                        setHideRegForm(true);
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
                                    hideRegForm={hideRegForm}
                                    hideRegEmailErrors={hideRegEmailErrors}
                                />}
                            />
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
