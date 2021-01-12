
const express = require('express')
const router = express.Router()

router.get('/products', (req, res)=>{
    res.render('leaveit/products.ejs', {products: ['nars makeup', 'hydroflasks']})
})
router.get('/movies', (req, res)=>{
    res.render('leaveit/movies.ejs', {movies: ['Bring It On 2', 'Mean Girls 2']})
})

module.exports = router