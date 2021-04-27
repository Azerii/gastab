const API_HOST = 'https://gastab-api.herokuapp.com';

const getCollection = async (collectionType, id) => {
  // const token = getToken();
  const options = {
    method: 'get',
    mode: 'cors',
  };

  if(id) options.body = id;

  let res;
  const url = id ? `${API_HOST}/${collectionType}/${id}` : `${API_HOST}/${collectionType}`;

  try {
    res = await fetch(url, options).then((response) => response.json());

    if (res) {
      if (res.length) {
        const list = res;

        localStorage.setItem(`${collectionType}List`, JSON.stringify(list));
      }

      return res;
    }
  } catch (e) {
    console.log(e);
  }

  return null;
};
