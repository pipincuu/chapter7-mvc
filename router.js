const express = require("express");
const router = express.Router();

router.get("/products", product.index);
router.get("/products/create", product.create);
router.post("/products", product.store);
router.get("/products/:id", product.show);




module.exports = router;

