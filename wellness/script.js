var action = document.querySelector('.action');
var mobileMenu = document.querySelector('.mobile_menu');
var hamburger = document.querySelector('.hamburger');
var cancel= document.querySelector('.cancel');
action.addEventListener("click" , function(){
    mobileMenu.classList.toggle('reset');

    if(mobileMenu.classList.contains('reset')){
        hamburger.style.display = 'none';
        cancel.style.display ='block';
    }else{
        hamburger.style.display ='block';
        cancel.style.display='none'

    }
})


