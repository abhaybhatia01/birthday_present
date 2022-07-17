
(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this site every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "07/17/",
        birthday = dayMonth + yyyy;

    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }


    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("pagestyle").setAttribute("href","style2.css"); 
            document.getElementById("countdown").style.display = "none";
            document.getElementById("extra").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());


    



    // window.setInterval(function(){
    //   randomColor();
    // }, 1000);
    
    // function randomColor() {
    //   document.querySelector('.emoji').style.background = '#'+ Math.floor(Math.random()*16777215).toString(16);


    // }









    console.clear();

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





