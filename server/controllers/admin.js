const user = require("../models/user");
const User = require("../models/user");
const Cover = require("../models/cover");

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

exports.postCoverPhotoContent = async (req, res) => {
    try {

    } catch (err) {
        console.log(err);
    }
}

exports.getCoverPhotoContent = async (req, res) => {
    try {
        
    } catch (err) {
        console.log(err);
    }
}

exports.uploadImage = async (req, res) => {
    // console.log(req.body);
    try {
      const { image } = req.body;
      if (!image) return res.status(400).send("No image");
  
      // prepare the image
      const base64Data = new Buffer.from(
        image.replace(/^data:image\/\w+;base64,/, ""),
        "base64"
      );
  
      const type = image.split(";")[0].split("/")[1];
  
      // image params
      const params = {
        Bucket: "artacademy",
        Key: `${nanoid()}.${type}`,
        Body: base64Data,
        ACL: "public-read",
        ContentEncoding: "base64",
        ContentType: `image/${type}`,
      };
  
      // upload to s3
      S3.upload(params, (err, data) => {
        if (err) {
          console.log(err);
          return res.sendStatus(400);
        }
        console.log(data);
        res.send(data);
      });
    } catch (err) {
      console.log(err);
    }
  };
  

  exports.removeImage = async (req, res) => {
    try {
      const { image } = req.body;
      // image params
      const params = {
        Bucket: image.Bucket,
        Key: image.Key,
      };
  
      // send remove request to s3
      S3.deleteObject(params, (err, data) => {
        if (err) {
          console.log(err);
          res.sendStatus(400);
        }
        res.send({ ok: true });
      });
    } catch (err) {
      console.log(err);
    }
  };


  exports.uploadVideo = async (req, res) => {
    try {
      // console.log("req.user._id", req.user._id);
      // console.log("req.params.instructorId", req.params.instructorId);
  
      if (req.user._id != req.params.instructorId) {
        return res.status(400).send("Unauthorized");
      }
  
      const { video } = req.files;
      console.log(video);
      if (!video) return res.status(400).send("No video");
  
      // video params
      const params = {
        Bucket: "artacademy",
        Key: `${nanoid()}.${video.type.split("/")[1]}`, // video/mp4
        Body: readFileSync(video.path),
        ACL: "public-read",
        ContentType: video.type,
      };
  
      // upload to s3
      S3.upload(params, (err, data) => {
        if(err) {
          console.log(err);
          res.sendStatus(400);
        }
        console.log(data);
        res.send(data);
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  
  exports.removeVideo = async (req, res) => {
    try {
  
      if (req.user._id != req.params.instructorId) {
        return res.status(400).send("Unauthorized");
      }
  
      const { Bucket, Key } = req.body;
      // console.log(video);
      // return;
      // if (!video) return res.status(400).send("No video");
  
      // video params
      const params = {
        Bucket,
        Key,
      };
  
      // upload to s3
      S3.deleteObject(params, (err, data) => {
        if(err) {
          console.log(err);
          res.sendStatus(400);
        }
        console.log(data);
        res.send({ ok: true });
      });
    } catch (err) {
      console.log(err);
    }
  };
  

  exports.update = async (req, res) => {
    try {
      const id = req.body.id
      const coverPhoto = await Course.findOne({ id }).exec();
      console.log("COURSE FOUND => ", coverPhoto);
    
      if (req.user._id != user.role === "Admin") {
        return res.status(400).send("Unauthorized");
      }
    
      const updated = await Course.findOneAndUpdate({slug}, req.body, {
        new: true,
      }).exec();
    
      res.json(updated);
    } catch (err) {
      console.log(err);
      return res.status(400).send(err.message);
    }
  };
  

  exports.createCoverContent = async (req, res) => {
    try {
        const cover = await new Cover({
            // title: req.body.title,
            // text: req.body.text,
            ...req.body,
        }).save();

        res.json(cover);
    } catch (err) {
        console.log(err);
        return res.status(400).send("Cover create failed. Try again");
    }
  }

  exports.getCoverContent = async (req, res) => {
    try {
        const covers = await Cover.find().exec();
        res.json(covers);
    } catch(err) {
        console.log(err);
    }
  }