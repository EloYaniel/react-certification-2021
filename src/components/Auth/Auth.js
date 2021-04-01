import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import {
  Context as GlobalContext,
  LOGIN_ACTION_TYPE,
  LOGOUT_ACTION_TYPE,
} from '../../contexts';
import { login } from '../../services/auth';
import { Button, Container, Error, Input, InputContainer } from './styles';

export const Auth = () => {
  const {
    state: { isLoggedIn },
    dispatch,
  } = useContext(GlobalContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    setError('');
    try {
      const userInfo = await login(username, password);
      dispatch({ type: LOGIN_ACTION_TYPE, payload: { ...userInfo } });
      e.stopPropagation();
      history.goBack();
    } catch {
      setError('Wrong Username or Password.');
    }
  };

  const handleLogout = async (e) => {
    dispatch({ type: LOGOUT_ACTION_TYPE });
    e.stopPropagation();
    history.goBack();
  };

  return (
    <Container>
      {isLoggedIn ? (
        <Button type="button" onClick={handleLogout}>
          Logout
        </Button>
      ) : (
        <>
          <InputContainer>
            <Input
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <Error>{error}</Error>}
          </InputContainer>
          <Button type="button" onClick={handleLogin}>
            Login
          </Button>
        </>
      )}
    </Container>
  );
};
