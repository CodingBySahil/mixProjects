let yourPlayer,opponent,gameOver,score;
yourPlayer=document.querySelector("#yourPlayer");
opponent = document.querySelector("#opponent");
gameOver = document.querySelector(".gameOver");
document.onkeydown = (e)=>{
    {
        if (e.keyCode == 38) {
            yourPlayer.classList.add('goatAni')
        }
        setTimeout(() => {
            yourPlayer.classList.remove('goatAni')
        }, 300);
        console.log(e.keyCode)
    }
    {
        if (e.keyCode == 39) {
            
        }
    }
    setInterval(() => {
        gx = parseInt(window.getComputedStyle(yourPlayer, null).getPropertyValue('left'))
        gy = parseInt(window.getComputedStyle(yourPlayer, null).getPropertyValue('top'))
        lx = parseInt(window.getComputedStyle(opponent, null).getPropertyValue('left'))
        ly = parseInt(window.getComputedStyle(opponent, null).getPropertyValue('top'))

        overValueX = Math.abs(gx - lx)
        overValuey = Math.abs(gy - ly)

        if (overValueX < 60 && overValuey < 52) {
            gameOver.style.visibility = 'visible'
            opponent.classList.remove('opponentAni')
            
        }
    }, 10);
}
