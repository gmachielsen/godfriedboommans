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
    website: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: false,
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
      enum: ["Subscriber", "ApprovedApplicant", "Applicant", "Instructor", "Admin"],
    },
    stripe_account_id: "",
    stripe_seller: {},
    stripeSession: {},
    // passwordResetCode: {
    //   data: String,
    //   default: "",
    // },
    courses: [{ type: ObjectId, ref: "Course" }],
    application: [{ type: ObjectId, ref: "Application"}],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);