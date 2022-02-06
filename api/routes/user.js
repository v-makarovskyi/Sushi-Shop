const router = require("express").Router()
const User = require('../models/User')
const CryptoJS = require('crypto-js')

//Update
router.put('/:id', async (req, res) => {
    if(req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
    }

    try {
       const updateUser = await User.findByIdAndUpdate(
           req.params.id,
           {
               $set: req.body
           },
           {new: true}
       ) 
       res.status(200).json(updateUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

//Delete
router.delete('/:id', async (req, res) => {
    try {
       await User.findByIdAndDelete(req.params.id) 
       res.status(200).json('Аккаунт удален')
    } catch (error) {
        res.status(500).json(error)
    }
})

//Get
router.get('/find/:id', async (req, res) => {
    try {
       const user = await User.findById(req.params.id)
       const { ...other } = user._doc
       res.status(200).json(other) 
    } catch (error) {
        res.status(500).json(error)
    }
})


//getAllUsers
router.get('/', (req, res) => {
    const query = req.query.new
    try {
        const users = query 
        ? User.find().sort({_id: - 1}).limit(5) 
        : User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router