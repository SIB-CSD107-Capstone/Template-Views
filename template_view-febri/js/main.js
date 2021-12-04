const ButtonsTypeOfHospitalization = document.querySelectorAll('button.form-check');

ButtonsTypeOfHospitalization.forEach((btnType) => {
  btnType.addEventListener('click', (event) => {
    if (event.target.classList.contains('form-check')) {
      event.target.firstElementChild.checked = true;
    }
  })
});

// rotate up-arrow-icon on event collapse accordion
$('.multi-collapse').on('show.bs.collapse', function () {
  this.previousElementSibling.querySelector('.up-arrow-icon').style.transform = "rotate(0deg)";
});

$('.multi-collapse').on('hide.bs.collapse', function () {
  this.previousElementSibling.querySelector('.up-arrow-icon').style.transform = "rotate(180deg)";
});