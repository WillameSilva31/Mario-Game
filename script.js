const mario = document.querySelector('img#mario')
const pipe = document.querySelector('img#pipe')
const gameOver = document.querySelector('img#gameover')

function jump (){
    mario.classList.add('jump')

    setTimeout(()=>{
        mario.classList.remove('jump')
    },500)
}

const loop = setInterval(()=> {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    Number(marioPosition)

console.log(marioPosition)

    if(pipePosition <= 104 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = './images/mario-death.png'
        mario.style.width = '86px'
        mario.style.marginLeft = '20px'

        gameOver.src = './images/gameover.png'
        gameOver.style.position = 'absolute'
        gameOver.style.width = '1500px'
        gameOver.style.left = '25%'
        gameOver.style.top = '30%'
        

        clearInterval(loop)
    } 
}, 10)

document.addEventListener('keydown', jump)