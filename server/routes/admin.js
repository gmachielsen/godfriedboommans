const express = require("express");
const router = express.Router();
const formidable = require("express-formidable");

// middleware
const { requireSignin } = require("../middlewares");


const {
    administrator,
    listOfUsers,
    createCoverContent,
    getCoverContent,
    uploadImage,
    removeImage,
    uploadVideo,
    removeVideo,
    update,
    getCover,
    createCategory,
    getCategory,
    putCategory,
    removeCategory,
    listCategories,
} = require("../controllers/admin");
router.get("/get-covercontent", getCoverContent)

router.get("/admin", requireSignin, administrator);
router.get("/listOfUsers", requireSignin, listOfUsers);

router.post("/post-covercontent", requireSignin, createCoverContent)
router.put("/put-covercontent", requireSignin, update);
router.post("/post-coverphoto", requireSignin, uploadImage)
router.delete("/remove-coverphoto", requireSignin, removeImage)
router.post("/post-covervideo", requireSignin, formidable(), uploadVideo);
router.delete("/remove-covervideo", requireSignin, removeVideo);

// categories
router.post("/admin/create-category", requireSignin, createCategory);
router.get("/admin/get-category/:categoryId", requireSignin, getCategory);
router.put("/admin/update-category/:categoryId", requireSignin, putCategory);
router.delete("/admin/remove-category/:categoryId", requireSignin, removeCategory);
router.get("/admin/categories", requireSignin, listCategories)

// router.get("/getcover", getCover)


module.exports = router;

