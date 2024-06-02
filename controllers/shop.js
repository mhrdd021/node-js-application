const Product = require("../models/Product");

exports.getProducts = (req, res) => {
  Product.fetchAll()
    .then((response) => {
      res.json({
        products: response[0]
      })
    })
    .catch((error) => {
      console.error(error);
    });
};

exports.getProduct = (req, res) => {
  res.send("app get single product");
};
