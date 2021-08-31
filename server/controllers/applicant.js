const User = require("../models/user");


exports.makeApplicant = async (req, res) => {
    try {
        const {phone, website} = req.body;
        const user = await User.findById(req.user._id).exec();
        const applicant = await User.findByIdAndUpdate(
            user._id,
            {
            $addToSet: { role: "Applicant" },
            phone: phone,
            website: website,
            },
            { new: true }
        )
            .select("-password")
            .exec();
        res.json(applicant);
        } catch (err) {
        console.log(err);
    }
}
