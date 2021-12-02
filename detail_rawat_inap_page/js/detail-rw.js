// rotate up-arrow-icon on event collapse accordion
$('.collapse').on('show.bs.collapse', function () {
  this.previousElementSibling.querySelector('.up-arrow-icon').style.transform = "rotate(0deg)";
})

$('.collapse').on('hide.bs.collapse', function () {
  this.previousElementSibling.querySelector('.up-arrow-icon').style.transform = "rotate(180deg)";
})