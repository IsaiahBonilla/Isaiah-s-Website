const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '%', '+', '-']
const element1 = document.getElementById('element1')
buttons.forEach(button => {
    const btn = document.createElement('button')
    var buttonPressed = document.createElement('pressed')
    btn.classList.add('btn')
    btn.innerHTML = button
    btn.addEventListener('click', () => {
        buttonPressed = button;
        document.getElementById('buttons')
        if (btn == buttonPressed){
            element1.classList.add('active')
            element1.innerHTML = buttons.buttonPressed
        }
    })
    document.getElementById('buttons').appendChild(btn)
})
