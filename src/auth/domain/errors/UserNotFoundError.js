export default class UserNotFoundError extends Error {
  constructor(login) {
    super(`User "${login}" doesn't exist`);
  }
}
