const randomNumber = (value1, value2) => {
    let rand = value1 + Math.random() * (value2 + 1 - value1);
    return Math.floor(rand);
}

const generate = ({count}) => {
    let res = ''
    let alphabet = '012345G7Fc14fGGHq'
    for (let i = 0; i < count; i++) {
        res += alphabet[randomNumber(0, alphabet.length - 1)] 
    }
    
    return res
}

const generateOtp = () => {
    let res = ''
    let numbers = "0123456789"
    for (let i = 0; i < 4; i++) {
        res += numbers[randomNumber(0, numbers.length-1)] 
    }
    
    return res
}

module.exports = {generate, generateOtp}