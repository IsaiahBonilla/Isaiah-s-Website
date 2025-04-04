const ball = document.createElement('div')
const ballRadius = 30
const windowHeight = window.innerHeight // calculates height of screen
const windowWidth = window.innerWidth // calculates width
let ballXPosition = windowWidth / 2 - ballRadius
let ballSpeed = 5

setInterval(moveBall, 10)

createBall()


function moveBall() {
    ballXPosition = ballXPosition + ballSpeed
    ball.style.left = `${ballXPosition}px`

}

function createBall(){
    document.body.appendChild(ball)
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "red"
    ball.style.position = "absolute"
    ball.style.top = `${windowHeight / 2 - ballRadius}px`
    ball.style.left = `${windowWidth / 2 - ballRadius}px`
}


