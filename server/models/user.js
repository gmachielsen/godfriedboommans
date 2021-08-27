const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    picture: {
      type: String,
      default: "/avatar.png",
    },
    role: {
      type: [String],
      default: ["Subscriber"],
      enum: ["Subscriber", "Instructor", "Applicant", "Admin"],
    },
    stripe_account_id: "",
    stripe_seller: {},
    stripeSession: {},
    // passwordResetCode: {
    //   data: String,
    //   default: "",
    // },
    courses: [{ type: ObjectId, ref: "Course" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);