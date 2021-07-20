const mongoose = require("mongoose");

const Role = mongoose.model(
    "Role",
    new mongoose.Schem({
        name:string
    })
);

module.exports = Role;