const element1 = document.getElementById('element1')
const element2 = document.getElementById('element2')
const element3 = document.getElementById('element3')
const element4 = document.getElementById('element4')

element1.addEventListener('click',()=>{
    element1.innerHTML = "I've been clicked! <br> Try double clicking me."
})
element1.addEventListener('dblclcik', ()=>{
    element1.ineerHTML = "I've been double clicked! <br> Try single clicking me."
})

element2.addEventListener('mouseover', ()=>{
    element2.style.color = "green"
    element2.style.backgroundColor = "blue"
})

element2.addEventListener('mouseout', ()=>{
    element2.style.color = "white"
    element2.style.backgroundColor = "#BB33BB"
})
document.addEventListener('keyup', (event)=>{
    console.log(event.key)

    if (event.key == 'ArrowDown'){
        positionY = positionY + 10
    }
    else if (event.key == 'ArrowUp') {
        positionY = positionY - 10
    }
    else if (event.key == 'ArrowLeft') {
        positionX = positionX - 10
    }
    else if (event.key == 'ArrowRight') {
        positionX = positionX + 10
    }
    element3.style.top = `${positionY}px`
    element3.style.right = `${positionX}px`
})



element4.addEventListener('click', ()=>{
    element4.style.width = "10px"
    element4.style.height = "10px"
    element4.innerHTML = ""
    element4.style.opacity = .3
})

document.addEventListener('keyup',(event)=>{
    console.log(event.key)
})
