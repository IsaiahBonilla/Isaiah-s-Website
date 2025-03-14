const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '%', '+', '-']

buttons.forEach(button => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerHTML = button
    btn.addEventListener('click', () => {
        document.getElementById('buttons')
    })
    document.getElementById('buttons').appendChild(btn)
})
