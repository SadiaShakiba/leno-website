document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu

  const toggleButton = document.querySelector(".navbar__mobile-menu-icon");
  const toggleMenu = document.querySelector(".navbar__mobile-menu-ul");

  toggleButton.addEventListener("click", function () {
    toggleMenu.classList.toggle("active");
  });

  // Video Modal
  const modal = document.querySelector("#videoModal");
  const videoButton = document.querySelector(".preview__video-button");
  const closeButton = document.querySelector(".modal__close-button");
  const videoPlayer = document.getElementById("videoPlayer");

  videoButton.addEventListener("click", function () {
    modal.style.display = "block";
    videoPlayer.src = "https://www.youtube.com/embed/8sXRyHI3bLw";
  });

  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
    videoPlayer.src = "";
  });

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      videoPlayer.src = "";
    }
  });
});

// Navbar scroll

window.addEventListener("scroll", function () {
  const navBar = document.querySelector(".navbar");

  if (window.scrollY > 0) {
    navBar.classList.add("scroll");
  } else {
    navBar.classList.remove("scroll");
  }
});
