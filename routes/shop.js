const path = require('path')
const express = require('express')
const rootDir = require('../util/path')
const admin = require('./admin')

const router = express.Router()

router.use('/', (req, res, next) => {
    // console.log('shop.js:', admin.products)
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'))
    const { products } = admin
    res.render('shop', {
        prods: products,
        pageTitle: "shop",
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
});



module.exports = router;