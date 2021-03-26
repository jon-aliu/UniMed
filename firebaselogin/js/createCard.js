


Arr = [{ id: 0, diagnoza: "covid-19", data: "22/02/2021", Trajtimi: "Vitamin C, Aspirin, Paracetamol" }]
var cardPosition = 3
var cardRow = 0

// window.onload = function () {
//     addCards(Arr)
// }

function addCards(Arr) {

    // Arr.forEach(element => {
    //    console.log(cardPosition%=4)
    //    cardPosition++

    // });
    let cardId = 0
    document.getElementById('Homepage').style.height = 754
    Arr.forEach(card => {
        if (window.innerWidth < 1200) {
            document.getElementById('Homepage').style.height += 380
        }
        if (window.innerWidth < 600) {
            document.getElementById('Homepage').style.height += 380
        }
        if (cardPosition == 2) {
            createCard(card, cardId)
        }
        else {
            createCard(card, cardId)
            cardPosition++
        }
        cardId++
    });
}

// function deleteCard(cardId) {
//     console.log(cardId)
//     // document.getElementById(cardId).remove()
// }

function createCard_(card_, cardId) {
    let col33 = document.createElement('div')
    col33.classList = 'col-33'

    // alert('a')
    let card = document.createElement('div')
    let face1 = document.createElement('div')
    let face1content = document.createElement('div')
    let icon = document.createElement('div')
    let closeBtn = document.createElement('button')
    let cardTitle = document.createElement('h1')
    let face2 = document.createElement('div')
    let face2content = document.createElement('div')
    let dateP = document.createElement('p')
    let trajtimiP = document.createElement('p')
    let in_ = document.createElement('div')
    let out = document.createElement('div')
    let closebtn1 = document.createElement('div')
    let closebtn2 = document.createElement('div')
    let closebtn3 = document.createElement('div')
    let closebtn4 = document.createElement('div')
    card.classList = 'card'
    card.id = cardId
    face1.classList = 'face face1'
    face1content.classList = 'content'
    icon.classList = 'icon'
    closeBtn.classList = 'closeButton'
    face2.classList = 'face face2'
    face2content.classList = 'content'
    cardTitle.innerHTML = 'Covid-19'
    dateP.innerHTML = 'Data: 01/01/2021'
    trajtimiP.innerHTML = 'Trajtimi: zoti lasht shnosh'
    in_.classList = 'in'
    out.classList = 'out'
    icon.appendChild(closeBtn)
    closeBtn.appendChild(in_)
    closeBtn.appendChild(out)
    in_.appendChild(closebtn1)
    in_.appendChild(closebtn2)
    out.appendChild(closebtn3)
    out.appendChild(closebtn4)
    icon.appendChild(cardTitle)
    face1content.appendChild(icon)
    face1.appendChild(face1content)
    face2content.appendChild(dateP)
    face2content.appendChild(trajtimiP)
    face2.appendChild(face2content)
    card.appendChild(face1)
    card.appendChild(face2)
    col33.appendChild(card)
    document.getElementById('loggedInContent').appendChild(col33)
    closeBtn.onclick = deleteCard(cardId)


}
var newCards = 0
function createNewCard() {
    let col33 = document.createElement('div')
    col33.classList = 'col-33'
    let card = document.createElement('div')
    let face1 = document.createElement('div')
    let face1content = document.createElement('div')
    let icon = document.createElement('div')
    let closeBtn = document.createElement('button')
    let cardTitle = document.createElement('h1')
    let face2 = document.createElement('div')
    let face2content = document.createElement('div')
    let dateP = document.createElement('p')
    let trajtimiP = document.createElement('p')
    let in_ = document.createElement('div')
    let out = document.createElement('div')
    let closebtn1 = document.createElement('div')
    let closebtn2 = document.createElement('div')
    let closebtn3 = document.createElement('div')
    let closebtn4 = document.createElement('div')
    card.classList = 'card'
    card.id = "New" + newCards
    let cardId = card.id
    face1.classList = 'face face1'
    face1content.classList = 'content'
    icon.classList = 'icon'
    closeBtn.classList = 'closeButton'
    face2.classList = 'face face2'
    face2content.classList = 'content'
    cardTitle.innerHTML = document.getElementById('diagnoza').value
    dateP.innerHTML = document.getElementById('data').value
    trajtimiP.innerHTML = document.getElementById('Trajtimi').value
    in_.classList = 'in'
    out.classList = 'out'
    icon.appendChild(closeBtn)
    closeBtn.appendChild(in_)
    closeBtn.appendChild(out)
    in_.appendChild(closebtn1)
    in_.appendChild(closebtn2)
    out.appendChild(closebtn3)
    out.appendChild(closebtn4)
    icon.appendChild(cardTitle)
    face1content.appendChild(icon)
    face1.appendChild(face1content)
    face2content.appendChild(dateP)
    face2content.appendChild(trajtimiP)
    face2.appendChild(face2content)
    card.appendChild(face1)
    card.appendChild(face2)
    col33.appendChild(card)
    document.getElementById('loggedInContent').appendChild(col33)
    closeBtn.onclick = deleteCard(cardId)
    Arr.push({diagnoza: document.getElementById('diagnoza').value, data: document.getElementById('data').value, Trajtimi: document.getElementById('Trajtimi').value })
}



