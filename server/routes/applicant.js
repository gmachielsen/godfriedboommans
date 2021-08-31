const express = require("express");

const router = express.Router();

// middleware 
const { requireSignin } = require("../middlewares");

// controller
const { makeApplicant } = require("../controllers/applicant");

router.post("/application", requireSignin, makeApplicant);

module.exports = router;
