let x = 0,
    y = 0;

document.addEventListener('keydown',(e)=>{
    if (e.code == 'KeyW') {
        x+=5;
    } else if (e.code == 'KeyS') {
        x-=5;
    } else if (e.code == 'KeyA') {
        y-=5;
    } else if (e.code == 'KeyD') {
        y+=5;
    }
    document.querySelector('.cube').style.transform = `rotateY(${y}deg) rotateX(${x}deg)`;
});