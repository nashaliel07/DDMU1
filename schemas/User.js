const { Schema, model } = require("monngoose");

const loginSchema = Schema({
  username: {
    type: String,
    required: [true, "Email requerido"],
    unique: true,
  },
  passowrd: {
    type: Number,
    required: [true, "Password requerido"],
  },
});

module.exports = model("user", loginSchema);
