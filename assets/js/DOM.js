let header = document.querySelector("header");
      window.addEventListener('scroll',()=>
      {
        header.classList.toggle('sticky',window.pageYOffset > 100)
      });
      


let menuOver = document.querySelector("nav");
let bars = document.querySelector(".bars");
  bars.onclick = function() {
  menuOver.classList.toggle('show');
  this.classList.toggle('rotate');
}


// let down = document.getElementByClass("down");

// window.addEventListener('scroll', function(){
	
// });