const {userType} = require("./user.constants")
const { User} = require("../utils/dbs")
const get = async () => {
    return true
}
const update = async ({_id, email}) => {
    const user = await User.findOne({_id})
    if (!user) throw new Error();
    user.email = email;
    await user.save();
    return user;
}
const getAll = async () => {
    let usrs = await User.find({})
    return usrs
}

module.exports = {
    get,
    getAll,
    update,
}