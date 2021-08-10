const anchors = document.querySelectorAll(".menu__link");

anchors.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();

    const blockID = el.getAttribute("href");

    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
});
