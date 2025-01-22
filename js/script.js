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


//左足
window.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY;
  var viewportHeight = window.innerHeight;
  var maxScroll = document.documentElement.scrollHeight - viewportHeight;
  var section2 = document.getElementById('section2'); 
  var section2Top = section2.offsetTop;


  var speedFactor = 0.2; // 足跡の移動速度を設定 // 足跡要素を取得、存在しなければ作成 
  
  
  var footprint = document.querySelector('.left-footprint'); 
  if (!footprint) {
    footprint = document.createElement('div');
    footprint.classList.add('left-footprint');
    footprint.classList.add('fade-in'); // フェードイン効果を追加 
    document.querySelector('.left-container').appendChild(footprint);
  } // 足跡の位置を設定 
  if (section2Top >= scrollPosition) {
    footprint.style.transform = 'translateY(' + (maxScroll * speedFactor) + 'px)';
  }
  else { footprint.style.transform = 'translateY(' + (scrollPosition * speedFactor) + 'px)'; } // 足跡を3秒後に削除 
  setTimeout(function () { footprint.remove(); }, 1000);
});


//右足
window.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY;
  var viewportHeight = window.innerHeight;
  var maxScroll = document.documentElement.scrollHeight - viewportHeight;
  var section2 = document.getElementById('section2'); 
  var section2Top = section2.offsetTop;
  
  var speedFactor = 0.2; // 足跡の移動速度を設定 // 足跡要素を取得、存在しなければ作成 
  
  var footprint = document.querySelector('.right-footprint'); 
  if (!footprint) {
    footprint = document.createElement('div');
    footprint.classList.add('right-footprint');
    footprint.classList.add('fade-in'); // フェードイン効果を追加 
    document.querySelector('.right-container').appendChild(footprint);
  } // 足跡の位置を設定 
  if (section2Top >= scrollPosition) {
    footprint.style.transform = 'translateY(' + (maxScroll * speedFactor) + 'px)';
  }
  else { footprint.style.transform = 'translateY(' + (scrollPosition * speedFactor) + 'px)'; } // 足跡を3秒後に削除 
  setTimeout(function () { footprint.remove(); }, 1000);
});

// window.addEventListener('scroll', function() {
//   const circle = document.getElementById('circle');
//   const scrollPosition = window.scrollY;
//   const windowHeight = window.innerHeight;
//   const maxScroll = document.documentElement.scrollHeight - windowHeight;

//   // Calculate the percentage of the scroll position
//   const scrollPercentage = scrollPosition / maxScroll;

//   // Define keyframes based on scroll percentage
//   if (scrollPercentage < 0.12) {
//       circle.style.bottom = '0%';
//       circle.style.left = '34%';
//       circle.style.transform = 'rotate(0deg)'; 
//   } else if (scrollPercentage < 0.20) {
//       circle.style.bottom = '4.7%';
//       circle.style.left = '38%';
//       circle.style.transform = 'rotate(0deg)'; 
//   } else if (scrollPercentage < 0.30) {
//       circle.style.bottom = '5.3%';
//       circle.style.left = '41%';
//       circle.style.transform = 'rotate(0deg)'; 
//   } else if (scrollPercentage < 0.40) {
//       circle.style.bottom = '11%';
//       circle.style.left = '46%';
//       circle.style.transform = 'rotate(0deg)'; 
//   } else if (scrollPercentage < 0.50) {
//       circle.style.bottom = '13%';
//       circle.style.left = '51%';
//       circle.style.transform = 'rotate(20deg)'; 
//   } else if (scrollPercentage < 0.70) {
//     circle.style.bottom = '10%';
//     circle.style.left = '54%';
//     circle.style.transform = 'rotate(45deg)'; 
// } 
// else if (scrollPercentage < 0.80) {
//   circle.style.bottom = '4%';
//   circle.style.left = '58%';
//   circle.style.transform = 'rotate(45deg)'; 
// }
// else if (scrollPercentage < 0.90) {
//   circle.style.bottom = '0%';
//   circle.style.left = '61%';
//   circle.style.transform = 'rotate(45deg)'; 
// }
// else if (scrollPercentage < 1.00) {
//   circle.style.bottom = '-1%';
//   circle.style.left = '65%';
//   circle.style.transform = 'rotate(15deg)'; 
// } else {
//       circle.style.bottom = '-1%';
//       circle.style.left = '65%';
//       circle.style.transform = 'rotate(15deg)'; 
//   }
// });


function updateCirclePosition() {
  const circle = document.getElementById('circle');
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const maxScroll = document.documentElement.scrollHeight - windowHeight;

  // Calculate the percentage of the scroll position
  const scrollPercentage = scrollPosition / maxScroll;

  // Define keyframes based on scroll percentage
  let keyframes = [
      { bottom: '0%', left: '34%', rotate: '0deg' },
      { bottom: '4.7%', left: '38%', rotate: '0deg' },
      { bottom: '5.3%', left: '41%', rotate: '0deg' },
      { bottom: '11%', left: '46%', rotate: '0deg' },
      { bottom: '13%', left: '51%', rotate: '20deg' },
      { bottom: '10%', left: '54%', rotate: '45deg' },
      { bottom: '4%', left: '58%', rotate: '45deg' },
      { bottom: '0%', left: '61%', rotate: '45deg' },
      { bottom: '-1%', left: '65%', rotate: '15deg' }
  ];

  // Adjust keyframes for different screen sizes
  if (window.innerWidth <= 768 && window.innerWidth > 480) {
      keyframes = [
          { bottom: '0%', left: '18%', rotate: '0deg' },
          { bottom: '3.7%', left: '32%', rotate: '0deg' },
          { bottom: '4.3%', left: '35%', rotate: '0deg' },
          { bottom: '6%', left: '40%', rotate: '0deg' },
          { bottom: '8%', left: '45%', rotate: '20deg' },
          { bottom: '8%', left: '50%', rotate: '20deg' },
          { bottom: '7%', left: '56%', rotate: '45deg' },
          { bottom: '0%', left: '72%', rotate: '45deg' },
          { bottom: '-1%', left: '79%', rotate: '15deg' }
      ];
  } else if (window.innerWidth <= 480) {
      keyframes = [
        { bottom: '0%', left: '18%', rotate: '0deg' },
        { bottom: '3.7%', left: '32%', rotate: '0deg' },
        { bottom: '4.3%', left: '35%', rotate: '0deg' },
        { bottom: '6%', left: '40%', rotate: '0deg' },
        { bottom: '7%', left: '45%', rotate: '20deg' },
        { bottom: '7%', left: '50%', rotate: '20deg' },
        { bottom: '6%', left: '54%', rotate: '45deg' },
        { bottom: '0%', left: '72%', rotate: '45deg' },
        { bottom: '-1%', left: '79%', rotate: '15deg' }
      ];
  }

  // Determine the current keyframe based on scroll percentage
let currentKeyframe = keyframes[keyframes.length - 1];
for (let i = 0; i < keyframes.length - 1; i++) {
    if (scrollPercentage < (i + 1) / keyframes.length) {
        currentKeyframe = keyframes[i];
        break;
    }
}


  // Apply the current keyframe styles
  circle.style.bottom = currentKeyframe.bottom;
  circle.style.left = currentKeyframe.left;
  circle.style.transform = `rotate(${currentKeyframe.rotate})`;
}

window.addEventListener('scroll', updateCirclePosition);
window.addEventListener('resize', updateCirclePosition);
updateCirclePosition(); // Initial call to set position