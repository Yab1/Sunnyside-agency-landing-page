const hamburger = document.querySelector("#hamburger");
hamburger.addEventListener("click", handleToggle);

const nav = document.querySelector("nav");

function handleToggle() {
  if (nav.classList.contains("hidden")) {
    nav.classList.remove("hidden");
  } else {
    nav.classList.add("hidden");
  }
}

const li = document.querySelectorAll("li");

li.forEach((element) => {
  element.addEventListener("click", () => handleClick(element));
});

function handleClick(element) {
  li.forEach((list) => {
    list.classList.remove("active");
  });
  element.classList.add("active");
  nav.classList.add("hidden");
}
