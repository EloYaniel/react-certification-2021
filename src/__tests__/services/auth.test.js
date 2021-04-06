import { isAuthenticated, login, logout } from '../../services/auth';

describe('Auth service test suits', () => {
  it('should reject if #login is not success', async () => {
    try {
      await login('Wrong user', 'Wrong password');
    } catch (error) {
      expect(error.message).toEqual('Username or password invalid');
    }
  });

  it('should resolve if #login is success', async () => {
    const user = await login('wizeline', 'Rocks!');

    expect(user).toEqual({
      id: '123',
      name: 'Wizeline',
      avatarUrl:
        'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
    });
  });

  it('#logout should remove the user', async () => {
    await logout();

    expect(isAuthenticated()).toEqual(false);
  });

  it('#isAuthenticated should returns false when init or #login is not success', async () => {
    expect(isAuthenticated()).toEqual(false);
    try {
      await login('Wrong user', 'Wrong password');
    } catch {
      expect(isAuthenticated()).toEqual(false);
    }
  });
});
