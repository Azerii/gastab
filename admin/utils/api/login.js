const API_HOST = 'https://gastab-server.herokuapp.com';

const loginUser = async (cred) => {
  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  };

  options.body = JSON.stringify(cred);

  try {
    const url = `${API_HOST}/auth/local`;
    const res = await fetch(url, options).then((response) => response.json());

    if (res && res.user && res.jwt) {
      const tokenExpiry = new Date().getTime() + 24 * 60 * 60 * 1000;

      const state = { user: res.user, token: res.jwt, tokenExpiry };

      localStorage.setItem('gastab_admin:root', JSON.stringify(state));

      return res;
    } else {
      alert(res.message[0].messages[0].message);
    }
  } catch (e) {
    console.log(e.message);
  }

  return null;
};

const toggleShowPassword = () => {
  let x = document.getElementById("toggleIcon");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
