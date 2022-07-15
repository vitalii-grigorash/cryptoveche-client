import { config } from '../config';

const API_URL = config.java_api_url;

export const getEvents = (accessToken) => {
    console.log(accessToken);
    return fetch(`${API_URL}/events/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
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