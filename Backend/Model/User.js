const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true, //this will convert the entire string to lower case
      unique: true, //this is done so that no other user can have the same login info
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is invalid");
        }
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (!validator.isLength(value, { min: 6 })) {
          throw new Error("Password too short");
        }

        if (value.toLowerCase().includes("password")) {
          throw new Error('The password cannot contain the word "password"');
        }
      },
    },

    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    // this will create a timestamp whenever we create a new user

    timestamps: true,
  }
);

userSchema.methods.generateAuthToken = async function () {
  const user = this;

  const token = jwt.sign(
    { _id: user._id.toString() },
    process.env.JSON_WEB_TOKEN_SECRET
  );

  user.tokens = user.tokens.concat({ token });

  await user.save();

  return token;
};

// this is used to get only that data which should be given publicly
userSchema.methods.toJSON = function () {
  const user = this;

  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.tokens;
  delete userObject.avatar;

  return userObject;
};

// this will create a function by name as findByCredentials
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) throw new Error("Unable to login");

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) throw new Error("Unable to login");

  return user;
};

// this is a middleware
userSchema.pre("save", async function (next) {
  const user = this;

  // here we will hash the password
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

userSchema.pre("remove", async function (next) {
  const user = this;

  await Task.deleteMany({ owner: user._id });

  next();
});

// middleware to delete user tasks when user is removed from the database

// if we didn't create userSchema as a separate variable the above functions would not work
const User = mongoose.model("User", userSchema);

module.exports = User;
