const API_HOST = 'https://gastab-api.herokuapp.com';
const goToNext = document.querySelector('.go-to-next');

const deleteEntry = async (collectionType, id) => {
  // const token = getToken();
  const options = {
    method: 'delete',
    mode: 'cors',
    body: id
  };

  try {
    const url = `${API_HOST}/${collectionType}/${id}`;
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

