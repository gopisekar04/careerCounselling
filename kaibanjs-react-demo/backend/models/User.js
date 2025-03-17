const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  contactNo: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  tenthMarks: { type: Number, required: true },
  twelfthMarks: { type: Number, required: true },
  twelfthStream: { type: String, required: true },
  otherStream: { type: String },
});

// Hash password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model("User", UserSchema);
