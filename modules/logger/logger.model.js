const { Schema, model, Types } = require("mongoose");

const LoggerSchema = new Schema(
    {
        user: {
            type: Types.ObjectId,
            required: true,
            ref: "User",
        },
        path: {
            type: String,
            require: true,
        },
    }, { versionKey: false, timestamps: true}
)


module.exports = model("Logger", LoggerSchema)

