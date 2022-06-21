import { options } from '../config';

const API_URL = options.apiUrl;

export const authorize = (email, password) => {
    return fetch(`${API_URL}/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
            authAs: "user"
        })
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
            console.log(err);
            if (err.status === 500) {
                throw new Error('Сервер временно недоступен');
            }
        });
};

export const registration = (userData) => {
    return fetch(`${API_URL}/users/registration`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: userData.email,
            email: userData.email,
            password: userData.password,
            first_name: userData.first_name,
            second_name: userData.second_name,
            last_name: userData.last_name,
            utc_offset: userData.utc_offset,
            registration_type: "email",
            phone: "",
            phone_code: ""
        })
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
            if (err.status === 500) {
                throw new Error('Сервер временно недоступен');
            }
            else if (err.status === 401) {
                throw new Error('Пользователь с таким email уже существует');
            }
        });
};