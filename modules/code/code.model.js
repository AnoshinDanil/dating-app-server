const { Schema, model } = require("mongoose");

const CodeSchema = new Schema(
    {
        email: {
            type: String,
            require: true,
        },
        code: {
            type: String,
            require: true,
        },
    }, { versionKey: false, timestamps: true}
)


module.exports = model("Code", CodeSchema)

