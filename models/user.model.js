const mongoose= require("mongoose");

const User = mongoose.model(
    "User",
    new.mongoose.schema({
        username: String,
        email: String,
        password: String,
        roles: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role"
        }]

    })
);

module.exports = User;