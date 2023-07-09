//menu responsive
bars = document.querySelector(".bars");
bars.onclick = function (){
    navbar = document.querySelector(".nav-bar");
    navbar.classList.toggle("active");
}
//buttom change color on mouse hover
let myBtn = document.querySelector('button[type]');

myBtn.addEventListener('mouseover', function(){
  myBtn.style.color = "#ffffff";
  myBtn.style.background = "#5D26C1";
});

myBtn.addEventListener('mouseout', function(){
  myBtn.style.color = "#000000";
  myBtn.style.background = "#FFEFBA";
});