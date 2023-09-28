
let service = require("./signUp.service")

const get = async (req, res) => {
    try{
        service.get()
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(500).send({error: err}))
    }catch(err){
        res.status(500).send({error: err})
    }
}

const getAll = async (req, res) => {
        service.getAll()
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(500).send({error: err}))
}
const update = async (req, res) => {
    try{
        const {_id, email} = req.body
        service.update({_id,email})
        .then((data) => res.status(200).send(data))
        .catch((err) => {
            console.log(err)
            res.status(500).send({error: err.message})
        })
    }catch(err){
        res.status(500).send({error: err.message})
    }
}

const signUp = async(req, res) => {
    try {
        const {fullName, gender, signUpDate, phoneNumber, email} = req.body
        service.signUp({fullName, gender, signUpDate, phoneNumber, email})
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(500).send({error: err.message}))
    } catch (err) {
        res.status(500).send({error: err.message});
    }
}

const userConfirmation = async(req, res) => {
    try {
        const {email, code} = req.body
        service.confirmUserService({email, code})
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(500).send({error: err}))
    } catch (err) {
        res.status(500).send({error: err});
    }
}

module.exports = {
    get,
    getAll,
    update,
    signUp,
    userConfirmation
}