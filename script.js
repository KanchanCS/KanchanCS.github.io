let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');

}
window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector("header nav a [href'='+ id + ']").classList.add('active');
             })
        }
    })

}

// skill active
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-links");
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links");  
    document.getElementById(tabname).classList.add("active-tab");
}

// script form
let url= 'https://script.google.com/macros/s/AKfycbyVTA1P-F1an_6WFeKeetqFDHzq9IQHlF1Xy9MfJxTPajbqjLTI_UjOBs8pCVE9usNhsQ/exec'
let form=document.querySelector('#form');
form.addEventListener("submit", (e) => {
    e.target.submit.innerHTML = "Send Message";
    let d=new FormData(form);
    fetch(url, {
        method: 'POST',
        body: d
    }).then((res) => res.text())
        .then((finaldata) => {
            e.target.submit.innerHTML = "Submit";
            document.getElementById("res").innerHTML = finaldata;
            form.reset();
            setTimeout(() => {
                document.getElementById("res").innerHTML = "";
            },5000)
            console.log(finaldata)
        })
    e.preventDefault();
})