
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
    console.log(err)
    const { message, status } = err;
    return res.status(status || 500).json({ error: message });
};

module.exports = errorHandler;
