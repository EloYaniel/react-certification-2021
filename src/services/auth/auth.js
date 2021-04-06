const mockedUser = {
  id: '123',
  name: 'Wizeline',
  avatarUrl:
    'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
};

let isLogged = false;

export const login = async (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'wizeline' && password === 'Rocks!') {
        isLogged = true;
        return resolve(mockedUser);
      }
      return reject(new Error('Username or password invalid'));
    }, 500);
  });
};

export const logout = async () => {
  isLogged = false;
  return Promise.resolve();
};

export const isAuthenticated = () => isLogged;
