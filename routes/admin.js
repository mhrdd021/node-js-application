const express = require("express");
const router = express.Router();

// Controller
const adminController = require("../controllers/Admin");

router.get("/add-product", adminController.getAddProduct);
router.post("/add-product", adminController.postAddProduct);

module.exports = router;