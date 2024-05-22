//const { response } = require("../app");
const hasEmptyField = require("../utils/validation")
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {
    newUser: async (req, res) => {
    try{
      const body =req.body
      if (hasEmptyField(req.body)) throw new Error("Campos vacios");
      const hashedPassword = bcryptjs.hashSync(body.password, 10)
      const userToSave = {
         ...req.body,
         password: hashedPassword
      }
      const user = await User.create(userToSave);
      res.json({ success: true, user })
    } catch (error) {
        res.json({ success: false, response: error.message })
    }
    },

    logUser: async (req, res) => {
        try {
            const { email, password } = req.body
            if (hasEmptyField(req.body)) throw new Error("Campos vacios");
            const user = await User.findOne({ email });
            if (!user || !bcryptjs.compareSync(password, user.password)) throw Error("Credenciales incorrectas")
            const payload = {
              _id: user.id,
              email,
              firstname: user.firstname,
              lastname: user.lastname
            }
            const token = jwt.sign(payload, process.env.SECRET_JWT)
            res.json({ success: true, token, userData: { ...payload } }) 
        } catch (error) {
            res.json({ success: false, response: error.message })
        }
    }
}