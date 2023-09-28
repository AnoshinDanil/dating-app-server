
let service = require("./user.service")

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
    try{
        service.getAll()
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(500).send({error: err}))
    }catch(err){
        res.status(500).send({error: err})
    }
}
const update = async (req, res) => {
    try{
        const {_id, email} = req.body
        service.update({_id,email})
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(500).send({error: err}))
    }catch(err){
        res.status(500).send({error: err})
    }
}

module.exports = {
    get,
    getAll,
    update,
}