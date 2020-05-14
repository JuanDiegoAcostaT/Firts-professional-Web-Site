$(document).ready(function(){
    $('.slider1').bxSlider({
        mode:'fade'
    })
    $('.slider2').bxSlider({
        mode:'fade'
    })
    $('.slider3').bxSlider({
        mode:'fade'
    })
    })


    const hideButton = document.getElementById('hide-modal');
    const showButton = document.getElementById('show-modal');
    const cross = document.getElementById('cross');
    const modal = document.getElementById('modal');
    const overlay  = document.getElementById('overlay');
    const adv = document.getElementById('adv');

   

    adv.addEventListener('click', (event) =>{
        
        // overlay.classList.add('active');
        // modal.style.animation = 'animationIn .8s forwards';

        modalGoIn();
        
      
    })

    hideButton.addEventListener('click', (event) =>{
        // modal.style.animation = 'animationOut .8s forwards';    
        // overlay.classList.remove('active');
        // overlay.classList.add('active');
        modalGoOut();
    })

    showButton.addEventListener('click', (event) =>{
        // modal.style.animation = 'animationOut .8s forwards';
        // overlay.classList.remove('active');
        // overlay.classList.add('active');
        modalGoOut(s);
    })
     cross.addEventListener('click', (event) =>{
        // modal.style.animation = 'animationOut .8s forwards';
        // overlay.classList.remove('active');
        //   overlay.classList.add('active');
        modalGoOut();
     })

        // overlay.addEventListener('click', (event) =>{
        //     // modal.style.animation = 'animationOut .8s forwards';
        //     // overlay.classList.remove('active');
        //     // overlay.classList.add('active');
        //     modalGoOut();
        // })
   

    function modalGoOut()
    {
        overlay.style.transition = '1.1s ease-in';
        modal.style.animation = 'animationOut .8s forwards';
        overlay.classList.remove('active');
        overlay.classList.remove('active');
    }

    function modalGoIn()
    {
        overlay.style.transition = '.3s ease-out';
        modal.style.animation = 'animationIn .8s';
        overlay.classList.add('active');
    }
  



    