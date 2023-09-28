const { confirmUser } = require("../code/code.service")
const { User, Code} = require("../utils/dbs")
const { generate, generateOtp } = require("../utils/generator")
const { sendMail, makeSMTPService } = require("../utils/mailer")

const signUp = async({fullName, gender, signUpDate, phoneNumber, email}) => {
    const user = await User.findOne({email, phoneNumber})
    if (email == null || email == "") throw new Error("No email provided")
    let pass = generate({count: 10})
    let otpCode = generateOtp()
    if (user !== null) throw new Error("User is already created")
    await User.create({fullName, gender, signUpDate, phoneNumber, email, password: pass})
    await Code.create({email, code: otpCode})
    await makeSMTPService()
    sendMail( 'daniilsanoshin@yandex.ru', email , 'password', `Ваш пароль - ${pass}, код для подтверждения - ${otpCode}`)
}

const confirmUserService = async ({email, code}) => {
    let r = await confirmUser({ email, code });
    return r
}

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
    signUp,
    confirmUserService
}