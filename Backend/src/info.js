const Usuario = require("./Usuario")

class Info {
    constructor() {
        const usuario1 = new Usuario({
            name: "Luis Carlos",
            email: "luis@misena.edu.co",
            phone: "123456778",
            message: "BLABLABLABLABLA"
        })
        const usuario2 = new Usuario({
            name: "Luis Mendienta",
            email: "luis@distrital.edu.co",
            phone: "123456778",
            message: "BLABLABLABLABLA"
        })
        const usuario3 = new Usuario({
            name: "Carlos Ruiz",
            email: "cRuiz@nacional.edu.co",
            phone: "123456778",
            message: "BLABLABLABLABLA"
        })

        this.info = [usuario1, usuario2, usuario3]
    }

    getInfo() {
        return this.info
    }

    createUser(name, email, phone, message) {
        const info = this.getInfo()
        const newUser = new Usuario({
            name,
            email,
            phone,
            message
        })
        this.info.push(newUser)
        return (newUser)
    }

}

module.exports = Info