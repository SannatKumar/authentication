const mongoose = require("mongoose");

const Role = mongoose.model(
    "Role",
    new mongooser.Schem({
        name:string
    })
);

module.exports = Role;