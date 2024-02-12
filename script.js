
const h1 = document.querySelector('h1')      
                  
h1.style.color = 'red';    

const bodyDiv = document.createElement('div')

const text = document.createTextNode('hey i am zainab')

bodyDiv.append(text)

document.body.appendChild(bodyDiv)