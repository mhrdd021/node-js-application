exports.getAddProduct = (req, res) => {
  res.render("addProduct");
};

exports.postAddProduct = (req, res) => {
  res.send("add product controller reached");
};
