const mongoose = require("mongoose");

const coverSchema = new mongoose.Schema({
      image: {
        type: String,
        required: false,
      },
      video: {},
      title: {
          type: String,
          required: false,
      },
      text: {
          type: String,
          required: false,
      }
},
{ timestamps: true },
);

module.exports = mongoose.model("Cover", coverSchema)
