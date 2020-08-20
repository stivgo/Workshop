const express = require('express')
const server = express()
const Info = require("./src/info")

const db = new Info()

server.use(express.json())

server.get("/Usuario", (req, res) => {
    res.json({
        data: db.getInfo()
    })
})

server.post("/Usuario", (req, res) => {
    const { name, email, phone, message } = req.body
    console.log(email)
    console.log(typeof(email))
    if (email.includes("@hotmail.com") || email.includes("@gmail.com") || email.includes("@yahoo.com")) {
        res.json("No se puede agregar el correo, no se permite el dominio")
    } else {
        const newUser = db.createUser(name, email, phone, message)
        res.json(newUser)
    }


})

server.listen(3000, () => {
    console.log("Se esta escuchando el puerto")
})