import UserNotFoundError from '../errors/UserNotFoundError';
import IncorrectPasswordError from "../errors/IncorrectPasswordError";

function authenticate(values) {
  return new Promise((resolve, reject) => {
    const { login, password } = values;

    if (login !== "admin") {
      reject(new UserNotFoundError(login));
      return;
    } else if (password !== "admin") {
      reject(new IncorrectPasswordError());
      return;
    }

    localStorage.setItem('isAuthenticated', 'true');

    resolve();
  });
}

export default authenticate;
