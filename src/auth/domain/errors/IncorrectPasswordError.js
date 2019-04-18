export default class IncorrectPasswordError extends Error {
  constructor() {
    super(`Invalid password`);
  }
}
