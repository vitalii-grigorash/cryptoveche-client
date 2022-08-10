import { config } from '../config';

const API_URL = config.java_api_url;

export const changeUserName = (accessToken, body) => {

    return fetch(`${API_URL}/users/${body.userNameId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        }, body: JSON.stringify(body.userNameFields)
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