function slideright() {
    var slideRight = document.querySelectorAll(".slide-right");
  
    for (var i = 0; i < slideRight.length; i++) {
    //   var windowHeight = window.innerHeight;
    //   var elementTop = reveals[i].getBoundingClientRect().top;
    //   var elementVisible = 0;
  
    //   if (elementTop < windowHeight - elementVisible) {
        
    slideRight[i].classList.add("active");
        // slideRight[i].classList.remove("active");
        // console.log(slideRight);
        // console.log('slideRight')
    //   } else {
        // reveals[i].classList.remove("active");
    //   }
    }
  }
  
  export default slideright
//   window.addEventListener("scroll", slideright);