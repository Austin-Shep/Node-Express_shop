const express = require('express')

const bodyParser = require('body-parser')
const path = require('path')

const app = express();

app.set('view engine', 'ejs')
app.set('views', 'views')

const shop = require('./routes/shop')
const admin = require('./routes/admin')
//custom mods
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', admin.routes);
app.use(shop);


app.use((req, res, next)=>{
    res.status(404).render('404', {pageTitle: "Page Not Found"})
});


app.listen(3000);