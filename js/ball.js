const windowHeight = window.innerHeight // calculates height of screen
const windowWidth = window.innerWidth // calculates width

const ball = document.createElement('div')
document.body.appendChild(ball)
const LPaddle = document.createElement('div')
document.body.appendChild(LPaddle)
let LPaddleWidth = 20
let LPaddleHeight = 200
let LPaddleYPosition = windowHeight / 2 - LPaddleHeight / 2
let LPaddleXPosition = 70
let LPaddleSpeed = 15

const ballRadius = 20
let ballXPosition = windowWidth / 2 - ballRadius
let ballSpeed = 5
let ballXDirection = 1
let ballYPosition = windowHeight / 2 - ballRadius
let ballYDirection = 1

const scre = document.createElement('div')
document.body.appendChild(scre)
let score = 0 // Display Score, increase score by 1 every 'hit', if ball passes paddle, game should end, make ball disapear, let user know game is over
let level = 1 // Display Level, increase level by 1 every time the score increases by 10, as level increases, increase ball speed
const scoreEl = document.getElementById('score')
const levelEl = document.getElementById('level')
const message = document.getElementById('message')
const bgMusic = document.getElementById('bgmusic')
const startbtn = document.getElementById('start-button')

startbtn.addEventListener('click', () => {
    startbtn.style.display = 'none'
    bgMusic.play()
    bgMusic.loop = true
    createBall()
    createLPaddle()
})


function moveBall() {
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.left = `${ballXPosition}px`
    ball.style.top = `${ballYPosition}px`
    if (ballXPosition < 0 || ballXPosition > windowWidth - 2 * ballRadius) {
        ballXDirection = ballXDirection * -1
    }
    if (ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius) {
        ballYDirection = ballYDirection * -1
    }

    let ballTop = ballYPosition
    let ballBottom = ballYPosition + 2 * ballRadius
    let ballLeft = ballXPosition
    let LPaddleTop = LPaddleYPosition
    let LPaddleBottom = LPaddleYPosition + LPaddleHeight
    let LPaddleRight = LPaddleXPosition + LPaddleWidth
    let LPaddleLeft = LPaddleXPosition
    if (
        (ballBottom >= LPaddleTop) &&
        (ballTop <= LPaddleBottom) &&
        (ballLeft <= LPaddleRight) &&
        (ballXDirection == -1)
        ) {
            ballXDirection = ballXDirection * -1
            increaseScore()
            }
    else if ((ballLeft < LPaddleLeft) && (ballXDirection == -1)) {
        ballXDirection = 0
        ballYDirection = 0
        message.innerHTML = `Game Over!`
        stopSongs()
    }
}

function createBall(){
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "red"
    ball.style.position = "absolute"
    ball.style.top = `${windowHeight / 2 - ballRadius}px`
    ball.style.left = `${ballXPosition}px`
}

function createLPaddle() {
    LPaddle.style.height = `${LPaddleHeight}px`
    LPaddle.style.width = `${LPaddleWidth}px`
    LPaddle.style.backgroundColor = 'blue'
    LPaddle.style.position = 'absolute'
    LPaddle.style.left = '50px'
    LPaddle.style.top = `${LPaddleYPosition}px`
}

wKey = false
sKey = false
document.addEventListener('keydown', (event) => {
    if (event.key == 'w') {
        wKey = true
    }
    if (event.key == 's') {
        sKey = true
    }

})
document.addEventListener('keyup', (event) => {
    if (event.key == 'w') {
        wKey = false
    }
    if (event.key == 's') {
        sKey = false
    }
})

function moveLPaddle() {
    if (wKey == true && LPaddleYPosition > 0) {
        LPaddleYPosition = LPaddleYPosition - LPaddleSpeed
    }
    if (sKey == true && LPaddleYPosition < windowHeight - LPaddleHeight) {
        LPaddleYPosition = LPaddleYPosition + LPaddleSpeed
    }
    LPaddle.style.top = `${LPaddleYPosition}px`
}

function animate() {
    moveBall()
    moveLPaddle()
    requestAnimationFrame(animate)
}
animate()

function increaseScore() {
    score = score + 1
    if (score == 10 || score == 20 || score == 30 || score == 40 || score == 50){
        increaseLevel()
    }
    scoreEl.innerHTML = `Score: ${score}`
}

function increaseLevel() {
    level = level + 1
    levelEl.innerHTML = `Level: ${level}`
    increaseBallSpeed()
}

function increaseBallSpeed() {
    ballSpeed = ballSpeed * 1.2
}
