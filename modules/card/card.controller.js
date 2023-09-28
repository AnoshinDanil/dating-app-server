let service = require("./card.service")

const createCard = async (req, res) => {
    const {viewed, matched} = req.body
    service.createCard({viewed, matched})
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(500).send({error: err.message}))
}

const likesHistory = async (req, res) => {
    const { matched } = req.body
    service.likesHistory({matched})
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(500).send({error: err.message}))
}

module.exports = { createCard, likesHistory }