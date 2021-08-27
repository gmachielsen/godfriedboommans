const express = require("express");
const router = express.Router();

// middleware
const { requireSignin } = require("../middlewares");


const {
    administrator,
    listOfUsers
} = require("../controllers/admin");

router.get("/admin", requireSignin, administrator);
router.get("/listOfUsers", requireSignin, listOfUsers)


module.exports = router;

