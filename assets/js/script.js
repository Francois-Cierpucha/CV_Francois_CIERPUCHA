// parallaxe
let ypos = 0;
let positionScroll;
let vitesse = 0.5; //Changer la valeur par la vitesse de défilement souhaitée
window.onload = function () {
document.onscroll = function() {
  positionScroll = window.pageYOffset;
  ypos = positionScroll *= -vitesse;
  document.querySelector('#parallaxe').style.backgroundPosition='0px ' + ypos + 'px';
  };
};
//navbar
/*window.onscroll = function() {navbarFunction()}
let navbar = document.getElementById('navbar')
let sticky = navbar.offsetTop;
function navbarFunction(){
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  }else{
    navbar.classList.remove('sticky');
  };
};*/
function navFunction() {
  let x = document.getElementById('navbar');
  if (x.className === 'nav_bar') {
    x.className += ' responsive';
  } else {
    x.className = 'nav_bar';
  }
}
// apparition au scroll
$(function(){
  $(window).on('scroll', function () {
  let elmt = $('.left-showing, .right-showing');
  let topImg = $('.left-showing, .right-showing').offset().top;
  let scroll = $(window).scrollTop();
    $(elmt).each(function() {
      let topImg = $(this).offset().top - 800;
          if ( topImg < scroll ) {
            $(this).css('transform', 'translate(0,0)');
            $(this).css('opacity', '1');
          };
      });
  });
})
/*progressbar
html
$(function(){
  $(window).on('scroll', function move(){
    if (i == 0) {
      i ==1;
    let elmt = $('#html_Bar, #css_Bar, #boot_Bar, #js_Bar, #jquery_Bar, #php_Bar ');
    let topBar = $('#html_Bar, #css_Bar, #boot_Bar, #js_Bar, #jquery_Bar, #php_Bar ').offset().top;
    let scroll = $(window).scrollTop();
    let width = 10;
    // let id = setInterval(frame, 10);
      $(elmt).each(function(){
        let topBar = $(movehtml).offset().top -800;
          if (width >= 85){
            clearInterval(id);
          }else{
            width++;
            html_Bar.style.width = width + "%";
            html_Bar.innerHTML = width + "%";
          };
         }
      )
    }
  })
});
$(function(){
  $(window).on('scroll', function move(){
    if (i == 0) {
      i ==1;
    let elmt = $('#html_Bar');
    let topBar = $('#html_Bar').offset().top;
    let scroll = $(window).scrollTop();
    let width = 10;
    // let id = setInterval(frame, 10);
      $(elmt).each(function(){
        let topBar = $(movehtml).offset().top -800;
          if (width >= 85){
            clearInterval(id);
          }else{
            width++;
            html_Bar.style.width = width + "%";
            html_Bar.innerHTML = width + "%";
          };
         }
      )
    }
  })
});*/
//======
/*let i = 0;
function movehtml(){
  if(i == 0){
    i == 1;
    let html_Bar = document.getElementById('html_Bar');
    let width = 10;
    let id = setInterval(frame, 10);
//=======
    function frame(){
      if (width >= 95){
        clearInterval(id);
        i = 0;
      }else{
        width++;
        html_Bar.style.width = width + '%';
        html_Bar.innerHTML = width + '%';
      };
    };
  };
};
// css

function movecss(){
  if(i == 0){
    i == 1;
    let css_Bar = document.getElementById('css_Bar')
    let width = 10;
    let id = setInterval(frame, 10);
    function frame(){
      if (width >= 85){
        clearInterval(id);
        i = 0;
      }else{
        width++;
        css_Bar.style.width = width + '%';
        css_Bar.innerHTML = width + '%';
      };
    };
  };
};

function moveboot(){
  if(i == 0){
    i == 1;
    let boot_Bar = document.getElementById('boot_Bar')
    let width = 10;
    let id = setInterval(frame, 10);
    function frame(){
      if (width >= 95){
        clearInterval(id);
        i = 0;
      }else{
        width++;
        boot_Bar.style.width = width + '%';
        boot_Bar.innerHTML = width + '%';
      };
    };
  };
};
function movejs(){
  if(i == 0){
    i == 1;
    let js_Bar = document.getElementById('js_Bar')
    let width = 10;
    let id = setInterval(frame, 10);
    function frame(){
      if (width >= 60){
        clearInterval(id);
        i = 0;
      }else{
        width++;
        js_Bar.style.width = width + '%';
        js_Bar.innerHTML = width + '%';
      };
    };
  };
};
function movejquery(){
  if(i == 0){
    i == 1;
    let jquery_Bar = document.getElementById('jquery_Bar')
    let width = 10;
    let id = setInterval(frame, 10);
    function frame(){
      if (width >= 60){
        clearInterval(id);
        i = 0;
      }else{
        width++;
        jquery_Bar.style.width = width + '%';
        jquery_Bar.innerHTML = width + '%';
      };
    };
  };
};
function movephp(){
  if(i == 0){
    i == 1;
    let php_Bar = document.getElementById('php_Bar')
    let width = 10;
    let id = setInterval(frame, 10);
    function frame(){
      if (width >= 0){
        clearInterval(id);
        i = 0;
      }else{
        width++;
        php_Bar.style.width = width + '%';
        php_Bar.innerHTML = width + '%';
      };
    };
  };
};*/
// déplacement en scroll
