const User = require("../models/user");

exports.administrator = async (req, res) => {
    try {
        let user = await User.findById(req.user._id).select("-password").exec();
        if (!user.role.includes("Instructor")) {
            return res.sendStatus(403);
        } else {
            res.json({ ok: true });
        }
      } catch (err) {
          console.log(err);
    }
}


exports.listOfUsers = async (req, res) => {
    try {
        let users = await User.find().exec();
        // let users = await User.find({ "email": { $ne: req.user.email }}).exec();
        // { "Country": { $ne: "Netherlands" } }
        res.json(users)
    } catch (err) {
        console.log(err);
    }
}