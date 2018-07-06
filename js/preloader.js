document.body.onload = function() {
  setTimeout(function() {
    var preloader = document.getElementById("page-preloader");
    if (!preloader.classList.contains("hide")) {
      preloader.classList.add("hide");
    }
  }, 2000);
};
