

var videoEl = document.querySelector('.actual-video');
document.querySelector('.video-button').addEventListener('click', 
                                                            function(){
  if(this.dataset.aperture === 'open') {
    this.dataset.aperture = 'closed';
    videoEl.pause();
    videoEl.progress = 0;
  } else {
    this.dataset.aperture = 'open';
    videoEl.play();
  }
});


var videoE2 = document.querySelector('.actual-video2');
document.querySelector('.video-button2').addEventListener('click', 
                                                            function(){
  if(this.dataset.aperture === 'open') {
    this.dataset.aperture = 'closed';
    videoE2.pause();
    videoE2.progress = 0;
  } else {
    this.dataset.aperture = 'open';
    videoE2.play();
  }
});

var videoE3 = document.querySelector('.actual-video3');
document.querySelector('.video-button3').addEventListener('click', 
                                                            function(){
  if(this.dataset.aperture === 'open') {
    this.dataset.aperture = 'closed';
    videoE3.pause();
    videoE3.progress = 0;
  } else {
    this.dataset.aperture = 'open';
    videoE3.play();
  }
});

var videoE4 = document.querySelector('.actual-video4');
document.querySelector('.video-button4').addEventListener('click', 
                                                            function(){
  if(this.dataset.aperture === 'open') {
    this.dataset.aperture = 'closed';
    videoE4.pause();
    videoE4.progress = 0;
  } else {
    this.dataset.aperture = 'open';
    videoE4.play();
  }
})







var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}





