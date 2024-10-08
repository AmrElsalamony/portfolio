$(document).ready(function () {
    $('#loading .spinner').fadeOut(1000 , ()=>{
        AOS.init();
        $('#loading').fadeOut(1000 , ()=>{
            
            $('body').css('overflow-y','auto')
            
        })
    });
});






let nav = document.getElementById('open-menu')
let exit = document.getElementById('close-menu')
let menu =  document.querySelector('.nav-menu')

nav.addEventListener("click", function() {
  menu.style.right = '0'
  });

  exit.addEventListener("click", function() {
    menu.style.right = '-100%'
    });







    let openSideMenu = document.querySelector('.setting')
let closeSideMenu = document.querySelector('.close-side-menu')
let sideMenu =  document.querySelector('.side-menu')

openSideMenu.addEventListener("click", function() {
    sideMenu.style.left = '0'
  });

  closeSideMenu.addEventListener("click", function() {
    sideMenu.style.left = '-100%'
    });




  var card = document.querySelectorAll(".flip-card")
  var flip = document.querySelectorAll(".flip-card-inner")


 for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click" , function(){
    if (flip[i].classList.contains("flip")) {
      flip[i].classList.remove("flip")
      flip[i].classList.add("flip-back")
    }
    else{
      flip[i].classList.remove("flip-back")
      flip[i].classList.add("flip")
    }
  })
  
 }



 var dark = document.getElementById("dark")
 var light = document.getElementById("light")


 dark.addEventListener("click" , function() {
 
    document.body.classList.add("darkmode")
   
    

 
 })

 light.addEventListener("click" , function() {
 
    document.body.classList.remove("darkmode")
    





 })


 var pink = document.querySelector(".colors .pink")
 var blue = document.querySelector(".colors .blue")
 var purple = document.querySelector(".colors .purple")
 var lightBlue = document.querySelector(".colors .lightBlue")
 var green = document.querySelector(".colors .green")
 var red = document.querySelector(".colors .red")

 
 pink.addEventListener("click" , function() {
  document.body.classList.remove("blue-theme")
  document.body.classList.remove("lightBlue-theme")
  document.body.classList.remove("green-theme")
  document.body.classList.remove("red-theme")

  document.body.classList.remove("purple-theme")
  document.body.classList.add("pink-theme")

})


blue.addEventListener("click" , function() {
  document.body.classList.remove("pink-theme")
  document.body.classList.remove("purple-theme")
  document.body.classList.remove("lightBlue-theme")
  document.body.classList.remove("green-theme")
  document.body.classList.remove("red-theme")

  document.body.classList.add("blue-theme")

})

purple.addEventListener("click" , function() {
  document.body.classList.remove("pink-theme")
  document.body.classList.remove("blue-theme")
  document.body.classList.remove("green-theme")
  document.body.classList.remove("red-theme")

  document.body.classList.remove("lightBlue-theme")
  document.body.classList.add("purple-theme")

})


lightBlue.addEventListener("click" , function() {
  document.body.classList.remove("pink-theme")
  document.body.classList.remove("purple-theme")
  document.body.classList.remove("blue-theme")
  document.body.classList.remove("green-theme")
  document.body.classList.remove("red-theme")

  document.body.classList.add("lightBlue-theme")


})


green.addEventListener("click" , function() {
  document.body.classList.remove("pink-theme")
  document.body.classList.remove("purple-theme")
  document.body.classList.remove("blue-theme")
  document.body.classList.remove("lightBlue-theme")
  document.body.classList.remove("red-theme")

  document.body.classList.add("green-theme")


})
red.addEventListener("click" , function() {
  document.body.classList.remove("pink-theme")
  document.body.classList.remove("purple-theme")
  document.body.classList.remove("blue-theme")
  document.body.classList.remove("lightBlue-theme")
  document.body.classList.remove("green-theme")
  document.body.classList.add("red-theme")


})