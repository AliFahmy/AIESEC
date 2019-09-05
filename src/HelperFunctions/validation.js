export const validateEmail = email => {
  if (
    email.length === 0 ||
    email.split('@')[1].toLowerCase() !== 'aiesec.net'
  ) {
    return false;
  }
  return true;
};
export const validatePassword = password => {
  if (password.length < 8) {
    return false;
  }
  return true;
};
