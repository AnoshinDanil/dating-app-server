const { Code, User } = require("../utils/dbs");

const confirmUser = async({email, code}) => {
    const user = await User.findOne({email})
    const userCode = await Code.findOne({code})
    if (!user) throw new Error('User not found');
    if (!userCode) throw new Error('Code not found');
    try {
        if (userCode.code === code) {
        user.isConfirmed = true;
        await user.save();
        await Code.deleteOne({_id: userCode._id})
        return user
    }
    } catch (e) {
        console.log(e);
    }
    return false;
}

module.exports = {confirmUser}