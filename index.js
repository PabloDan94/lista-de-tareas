const form = document.getElementById('form')
const submit = document.getElementById('button')
const text = document.getElementById('text')
const lista = document.getElementById('list')


form.addEventListener('submit', e=> {
    const item = document.createElement('LI')
    const buttonDelete= document.createElement('BUTTON')
    const buttonDone= document.createElement('BUTTON')
    item.textContent = text.value
    buttonDelete.textContent = "X"
    buttonDone.textContent = "✔"
    buttonDelete.classList.add('button-delete')
    buttonDone.classList.add('button-done','clean')
    item.classList.add('list-item')
    if(text.value.length > 0){
        lista.appendChild(item)
        item.appendChild(buttonDelete)
        item.appendChild(buttonDone)
    }else alert("Escribi pto");
    
    buttonDone.addEventListener('click', e=> {
        if(buttonDone.classList.contains('clean')){
            buttonDone.classList.replace('clean','green')
        }else{
            buttonDone.classList.replace('green','clean')
        }
    })


    buttonDelete.addEventListener('click',e => {
        item.parentElement.removeChild(item)
    })

    form.reset()
    e.preventDefault()
})



