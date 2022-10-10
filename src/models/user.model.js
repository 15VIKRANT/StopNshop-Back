const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true , default:"buyer"},
     address :{ type: String, required:false},
     Phone: { type: Number, required: false}
},
    {
        timestamps: true,
        versionKey: false
    }
)

userSchema.pre("save", function (next) {
    const hash = bcrypt.hashSync(this.password, 8);
    this.password = hash
    return next();
})

userSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}

const User = mongoose.model("user", userSchema)
module.exports = User;