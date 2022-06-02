const { Product } = require("./models"); 

module.exports = {
    index: (req, res) => {
        Product.findAll()
        .then(products => {
            res.render('products/index', {
                products
            });
        });
    },


create: (req, res) => {
    res.render('products/create')
    },

store: (req, res) => {
    Product.create({
        productname: req.body.productname,
        productprice: req.body.productprice,
        quantity: req.body.quantity,
        type: req.body.type,
        keterangan: req.body.keterangan
    })
        .then(product => {
            res.redirect('/products')
        });
},

show: (req, res) => {
    Product.findOne({
        where: { id: req.params.id }
    })
        .then(product => {
            res.render('products/show', product.dataValues)
        });
}
};
