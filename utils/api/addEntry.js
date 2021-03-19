const API_HOST = 'http://localhost:1337';
const goToNext = document.querySelector('.go-to-next');

const addEntry = async (collectionType, data) => {
  // const token = getToken();
  const options = {
    method: 'post',
    mode: 'cors',
    body: data
  };

  try {
    const url = `${API_HOST}/${collectionType}`;
    const res = await fetch(url, options).then((response) => response.json());

    if (res.id) {
      console.log(res)
      goToNext.click();
      return res;
    } else {
      alert(res.message[0].messages[0].message);
    }
  } catch (e) {
    console.log(e);
  }

  return null;
};
