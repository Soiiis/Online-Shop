const path = require('path');
const errControllers = require('./controllers/404')
const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');
const app = express();

// app.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout : 'main-layout', extname: 'hbs'}));
app.set('view engine', 'ejs');
app.set('views', 'views')

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))
app.use ('/admin', adminRouter);
app.use (shopRouter);

app.use (errControllers.get404)



app.listen(3000);
