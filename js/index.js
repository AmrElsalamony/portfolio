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