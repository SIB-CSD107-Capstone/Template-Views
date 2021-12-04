const ButtonsTypeOfHospitalization = document.querySelectorAll('button.form-check');

ButtonsTypeOfHospitalization.forEach((btnType) => {
  btnType.addEventListener('click', (event) => {
    if (event.target.classList.contains('form-check')) {
      event.target.firstElementChild.checked = true;
    }
  })
})