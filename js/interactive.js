const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '%', '+', '-']
const element1 = document.getElementById('element1')
buttons.forEach(button => {
    const btn = document.createElement('button')
    const buttonPressed = document.createElement('pres')
    btn.classList.add('btn')
    btn.innerHTML = button
    btn.addEventListener('click', () => {
        document.getElementById('buttons')

        element1.innerHTML = "button"
    })
    document.getElementById('buttons').appendChild(btn)
})
