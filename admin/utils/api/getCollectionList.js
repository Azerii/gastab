const getCollectionList = (collectionType) => {
  const storageName = `${collectionType}List`;
  const listStr = localStorage.getItem(storageName);

  if (listStr) return JSON.parse(listStr);
};
