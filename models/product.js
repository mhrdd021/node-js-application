const db = require("../utils/database");

module.exports = class Product {
  cunstructor(id, name, imageUrl, price, description) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }
  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }
};
