const { Schema, model, Types } = require("mongoose");

const CardSchema = new Schema(
    {
        viewed: {
            type: Types.ObjectId,
            required: true,
            ref: "User",
        },
        name: {
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
        },
        distance: {
            type: String,
            require: true,
        },
        matched: {
            type: Types.ObjectId,
            required: true,
            ref: "User",
        },
        isLiked: {
            type: Boolean,
            require: true,
        },
    }, { versionKey: false, timestamps: true}
)


module.exports = model("Card", CardSchema)

