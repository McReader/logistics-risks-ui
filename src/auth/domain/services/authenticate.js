import UserNotFoundError from '../errors/UserNotFoundError';
import IncorrectPasswordError from '../errors/IncorrectPasswordError';

function authenticate(values) {
  return new Promise((resolve, reject) => {
    const { login, password } = values;

    if (login !== 'admin' && login !== 'user') {
      reject(new UserNotFoundError(login));
      return;
    }

    if (
      (login === 'admin' && password !== 'admin') ||
      (login === 'user' && password !== 'user')
    ) {
      reject(new IncorrectPasswordError());
      return;
    }

    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('isAdmin', login === 'admin');

    resolve();
  });
}

export default authenticate;
