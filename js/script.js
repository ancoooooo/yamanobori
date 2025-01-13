jQuery(function($) {
    $(window).on('load scroll', function (){
    
      var box = $('.fadeIn');
      var animated = 'animated';
      
      box.each(function(){
      
        var boxOffset = $(this).offset().top;
        var scrollPos = $(window).scrollTop();
        var wh = $(window).height();
    
        if(scrollPos > boxOffset - wh + 100 ){
          $(this).addClass(animated);
        }
      });
    });
    })


const navBtn = document.getElementById('is-navOpen');
const navItem = document.querySelectorAll('.l_header__navItem');


navBtn.addEventListener('click', () => {
    document.body.classList.toggle('is-nav-open');
});

navItem.forEach(item => {
    item.addEventListener('click', () => {
        document.body.classList.remove('is-nav-open');
    })
})