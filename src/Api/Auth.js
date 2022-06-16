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