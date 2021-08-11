// const anchors = document.querySelectorAll(".menu__link");

// anchors.forEach((el) => {
//   el.addEventListener("click", (e) => {
//     e.preventDefault();

//     const blockID = el.getAttribute("href");

//     document.querySelector(blockID).scrollIntoView({
//       behavior: "smooth",
//       block: "center",
//     });
//   });
// });

const anchors = document.querySelectorAll(".menu__link");

anchors.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();

    const blockID = el.getAttribute("href");

    const block = document.querySelector(blockID).getBoundingClientRect();

    window.scrollTo({
      left: block.left + window.pageYOffset,
      top: block.top + window.pageXOffset,
      behavior: "smooth",
    });
  });
});
