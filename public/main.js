const update = document.querySelector('#update-button')
const deleteButton = document.querySelector('#delete-button')
const messageDiv = document.querySelector('#message')
const submit = document.querySelector('.submit')
const newList = document.querySelector('.quotes')


submit.addEventListener('click', event => {
    event.preventDefault()
    let character = document.querySelector('.character').value
    let quote = document.querySelector('.quote').value
    fetch('/quotes', {     
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: character,
            quote: quote
        })
    })
    .then(() => {
        const spanName = document.createElement('span')
        const spanQuote = document.createElement('span')
        const listItem = document.createElement('li')
        spanName.classList.add('bold')
        spanName.innerText = character + ': '
        spanQuote.innerText = quote
        listItem.appendChild(spanName)
        listItem.appendChild(spanQuote)
        newList.appendChild(listItem)

        return fetch(`https://futuramaapi.herokuapp.com/api/characters/${character}/`)
    })
    .then(res => {
        if (res.ok) return res.json()
    })
    .then(res => {
        console.log(res)
        console.log(res[0].image)
        document.querySelector('img').src = res[0].image
    })
    .catch(error => console.error(error))

})

update.addEventListener('click', _ => {
    fetch('/quotes', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: 'Bender',
            quote: 'Bite my shiny metal ass!'
        })
    })
    .then(res => {
        if (res.ok) return res.json()
    })
    .then (response => {
        window.location.reload(true)
    })
})

deleteButton.addEventListener('click', _ => {
    fetch('/quotes', {
        method: 'delete',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: 'Bender'
        })
    })
        .then(res => {
            if (res.ok) return res.json()
        })
        .then(response => {
            if (response === 'No quote to delete') {
                messageDiv.textContent = 'No Bender quotes left'
            } else {
                window.location.reload(true)
            }
        })
})

