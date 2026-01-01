// Balloon generation
const balloonContainer = document.querySelector('.balloon-container');
for(let i=0; i<30; i++){
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.backgroundColor = `hsl(${Math.random()*360}, 70%, 60%)`;
    balloon.style.animationDuration = 5 + Math.random() * 5 + 's';
    balloonContainer.appendChild(balloon);
}

// Hearts on flashbacks page
const heartsContainer = document.querySelector('.hearts-container');
if(heartsContainer){
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.backgroundColor = `hsl(${Math.random()*360}, 70%, 60%)`;
        heartsContainer.appendChild(heart);
        setTimeout(()=> heart.remove(), 5000);
    }, 400);
}
// Existing balloon and heart code remains

// Floating flashback images
window.onload = function () {

  const pics = document.querySelectorAll(".pic");

  pics.forEach(pic => {
    let x = Math.random() * (window.innerWidth - 220);
    let y = window.innerHeight + Math.random() * 300;
    let speed = 0.6 + Math.random() * 0.5;

    pic.style.left = x + "px";
    pic.style.top = y + "px";

    function floatUp() {
      y -= speed;
      x += Math.sin(y * 0.03) * 0.6;

      if (y < -260) {
        y = window.innerHeight + 200;
        x = Math.random() * (window.innerWidth - 220);
      }

      pic.style.top = y + "px";
      pic.style.left = x + "px";

      requestAnimationFrame(floatUp);
    }

    floatUp();
  });

};

