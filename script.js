const mouseCursor = document.querySelector(".cursor");
const navLinks = document.querySelectorAll(".nav-links li");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  // console.log(e);
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

navLinks.forEach((links) => {
  // When mouse leaves the link, remove the 'link-grow' class to shrink the cursor
  links.addEventListener("mouseout", () => {
    mouseCursor.classList.remove("link-grow");
    links.classList.remove("hovered-link");
  });

  // When mouse hovers over the link, add the 'link-grow' class to enlarge the cursor
  links.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    links.classList.add("hovered-link");
  });
});
