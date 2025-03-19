// select all the navigation links
const navLinks = document.querySelectorAll("nav a");

// handle smooth scrolling
navLinks.forEach(link => {
    link.addEventListener("click",
 function(e) {
    e.preventDefault();
    const targetId = 
    this.getAttribute("href").substring(1);

    document.getElementById(targetId).scrollIntoView({behavior: "smooth"});


// remove active class from all links and add to the clicked one
navLinks.forEach(nav =>
    nav.classList.remove("active"));
this.classList.add("active");
 })
});

