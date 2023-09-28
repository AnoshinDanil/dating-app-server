const { Schema, model, Types, Mongoose } = require("mongoose");

const UserSchema = new Schema(
    {
        fullName: {
            type: String,
            require: true,
        },
        gender: {
            type: String,
            require: true,
        },
        age: {
            type: String,
            require: true,
            defaultValue: 18,
        },
        phoneNumber: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
        password: {
            type: String,
            require: true,
        },
        isConfirmed: {
            type: Boolean,
            require: false,
            default: false,
        }
    }, { versionKey: false, timestamps: true}
)


module.exports = model("User", UserSchema)

