jQuery(function ($) {
  $(window).on('load scroll', function () {

    var box = $('.fadeIn');
    var animated = 'animated';

    box.each(function () {

      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();

      if (scrollPos > boxOffset - wh + 100) {
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




// window.addEventListener('scroll', function() {
//   var footprint = document.querySelector('.footprint');
//   var scrollPosition = window.scrollY;
//   var viewportHeight = window.innerHeight;
//   var maxScroll = document.documentElement.scrollHeight - viewportHeight;

//   // 足跡の移動速度を設定
//   var speedFactor = 0.2; // 0.5倍速で動かす

//   if (scrollPosition >= maxScroll) {
//       footprint.style.transform = 'translateY(' + (maxScroll * speedFactor) + 'px)';
//   } else {
//       footprint.style.transform = 'translateY(' + (scrollPosition * speedFactor) + 'px)';
//   }
// });

window.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY;
  var viewportHeight = window.innerHeight;
  var maxScroll = document.documentElement.scrollHeight - viewportHeight;
  var speedFactor = 0.2; // 足跡の移動速度を設定 // 足跡要素を取得、存在しなければ作成 
  var footprint = document.querySelector('.left-footprint'); if (!footprint) {
    footprint = document.createElement('div');
    footprint.classList.add('left-footprint');
    footprint.classList.add('fade-in'); // フェードイン効果を追加 
    document.querySelector('.left-container').appendChild(footprint);
  } // 足跡の位置を設定 
  if (scrollPosition >= maxScroll) {
    footprint.style.transform = 'translateY(' + (maxScroll * speedFactor) + 'px)';
  }
  else { footprint.style.transform = 'translateY(' + (scrollPosition * speedFactor) + 'px)'; } // 足跡を3秒後に削除 
  setTimeout(function () { footprint.remove(); }, 1000);
});

window.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY;
  var viewportHeight = window.innerHeight;
  var maxScroll = document.documentElement.scrollHeight - viewportHeight;
  var speedFactor = 0.2; // 足跡の移動速度を設定 // 足跡要素を取得、存在しなければ作成 
  var footprint = document.querySelector('.right-footprint'); if (!footprint) {
    footprint = document.createElement('div');
    footprint.classList.add('right-footprint');
    footprint.classList.add('fade-in'); // フェードイン効果を追加 
    document.querySelector('.right-container').appendChild(footprint);
  } // 足跡の位置を設定 
  if (scrollPosition >= maxScroll) {
    footprint.style.transform = 'translateY(' + (maxScroll * speedFactor) + 'px)';
  }
  else { footprint.style.transform = 'translateY(' + (scrollPosition * speedFactor) + 'px)'; } // 足跡を3秒後に削除 
  setTimeout(function () { footprint.remove(); }, 1000);
});
