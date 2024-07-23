

import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
  const result = await request.post(`${baseUrl}/login`, {
    email,
    password
  });

 // localStorage.setItem('email', result.email);
  //localStorage.setItem('accessToken', result.accessToken);
 // localStorage.setItem('_id', result._id)

  return result;
};

export const register = (username, email, password) => {
  const result = request.post(`${baseUrl}/register`, {
    username,
    email,
    password
  });

  localStorage.setItem('email', result.email);
  localStorage.setItem('accessToken', result.accessToken);
  localStorage.setItem('userId', result._id)

  return result;
}

export const registerNew = async (username, email, password) => {
  const response = await fetch(`http://localhost:3030/users/register`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({username, email, password}),
});

if (!response.ok) {
    throw new Error('Registration failed');
}

return response.json();
}

export const logout = () => request.get(`${baseUrl}/logout`);

