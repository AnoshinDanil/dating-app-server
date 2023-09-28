const { request } = require("express");
const { User, Logger } = require("./dbs");

async function authChecker (req, res, next) {
    console.log(JSON.parse(req.headers.authorization));
    const user = await User.findOne(JSON.parse(req.headers.authorization))
    if (!user) {
        res.status(401).send(JSON.stringify({err : 'User not found'})) 
        return
    }
    req['user'] = user
    next();
}

async function ads (req, res, next) {
    console.log(req.user)
    next();
}

async function logger (req, res, next) {
    const logger = Logger.create({user: req.user._id, path: req.path})
    console.log(logger)
    next();
} // сущность в базе данных, описывающая действия пользователя с аккаунтом

//создать новую сущность, которая в базе данных будет представлять токены

module.exports = { authChecker, ads, logger }