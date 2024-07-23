
const host = 'http://localhost:3030';

export async function requestertwo(method, url, data) {
    const options = {
        method,
        headers: {}
    };

    if (data) {
        options.headers['Content-type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken !== undefined) {
        options.headers['X-Authorization'] = user.accessToken;
    }

    // eslint-disable-next-line no-useless-catch
    try {
        const response = await fetch(host + url, options);

        if (response.status === 204) {
            return {}
        }

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message);
        }

        if (response.status === 403) {
            return {}
        }
        return result;

    } catch (error) {
        throw error
    }
}

export const get = requestertwo.bind(null, "GET");
export const post = requestertwo.bind(null, "POST");
export const put = requestertwo.bind(null, "PUT");
export const del = requestertwo.bind(null, "DELETE");