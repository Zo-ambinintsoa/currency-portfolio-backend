import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        index: true
    },
    password: String,
    role: Boolean,
    portfolio: [{
        address: String,
        currency : [{
            type: Schema.Types.ObjectId,
            ref: 'Currency'
        }]
    }]
});

const User = model("User", UserSchema);

export { User, UserSchema };
