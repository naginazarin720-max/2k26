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
