
const getToken = () => {
  if (
    localStorage.getItem('gastab_admin:root')
    && localStorage.getItem('gastab_admin:root').length
  ) {
    const state = JSON.parse(localStorage.getItem('gastab_admin:root'));
    // const tokenCipher = state.token;
    // const token = decrypt(tokenCipher);
    const token = state.token;

    return token;
  }
  return null;
};

export default getToken;
