//const { response } = require("express")



function putUsuarios(data) {
    let div = document.getElementsByClassName("usuario")[0]
    console.log(data.length)
    console.log(data[0])
    for (let i = 0; i < data.length; i++) {
        let nombre = document.createElement("p")
        nombre.innerText = data[i].name
        div.appendChild(nombre)
        let email = document.createElement("p")
        email.innerText = data[i].email
        div.appendChild(email)
        let phone = document.createElement("p")
        phone.innerText = data[i].phone
        div.appendChild(phone)
        let message = document.createElement("p")
        message.innerText = data[i].message
        div.appendChild(message)
        let texto = document.createElement("p")
        texto.innerText = data[i].name + " " + data[i].email + " " + data[i].phone + " " + data[i].message
        div.appendChild(texto)
    }
}

function getUsuarios() {
    const found = fetch('http://localhost:3000/Usuario')
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            putUsuarios(data.data)
        })
}

getUsuarios()