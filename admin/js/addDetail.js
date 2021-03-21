if (!localStorage.getItem("gastab_admin:root")) {
  document.querySelector('.go-to-login').click();
}

const handleSubmit = (e, tag) => {
  e.preventDefault();

  const formEl = e.target;
  const fieldsArr = Array.from(formEl.elements);

  fieldsArr.pop();

  const data = {};
  const goToNext = document.querySelector('.go-to-next');

  fieldsArr.forEach(field => {
    if (field.name === "transmission") {
      if (field.checked) {
        data[field.name] = field.value;
      }
    } else {
      data[field.name] = field.value;
    }
  });

  goToNext.click();
  
  localStorage.setItem(tag, JSON.stringify(data));
}

