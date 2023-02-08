const nav = document.querySelectorAll("nav>*");
const opsi = document.querySelectorAll("main>*");
const navbar = document.querySelector(".navbar");

for (let a = 0; a < nav.length; a++) {
    opsi[0].style.display = "grid";
    opsi[a].style.display = "none";
    nav[0].classList.add("active");
    nav[a].addEventListener("click", function () {
        for (let b = 0; b < opsi.length; b++) {
            opsi[b].style.display = "none";
            nav[b].classList.remove("active");
        }
        opsi[a].style.display = "grid";
        nav[a].classList.add("active");
    });
}

navbar.addEventListener("click", function () {
    document.querySelector("nav").classList.toggle("aksiNav");
    document
        .querySelector(".navbar span:nth-child(1)")
        .classList.toggle("span1");
    document
        .querySelector(".navbar span:nth-child(2)")
        .classList.toggle("span2");
    document
        .querySelector(".navbar span:nth-child(3)")
        .classList.toggle("span3");
});
