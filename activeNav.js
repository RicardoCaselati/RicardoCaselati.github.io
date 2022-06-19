function navbarSelectedItem() {
  const objectOfNav = document.querySelectorAll('.nav-item');
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains("nav-link")) {
      if (event.target.classList.contains("active")) {
        return console.log('estou aqui')
      } else {
        let activeItem = document.getElementsByClassName("active")[0];
        activeItem.classList.remove("active");
        event.target.classList.add("active");
      }
      }
  }, false);
}
navbarSelectedItem()
