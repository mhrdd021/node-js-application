const express = require("express");
const router = express.Router();

// Controllers
const shopController = require("../controllers/Shop");

router.get("/", shopController.getProducts);

router.get("/products", shopController.getProducts);

router.get("/product", shopController.getProduct);

module.exports = router;
