document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.submenu-toggle').forEach(function (submenuToggle) {
    submenuToggle.addEventListener('click', function () {
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('active');
    });
  });
});
