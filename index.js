const express = require('express');
const app = express();
const path =require('path')
const exphbs = require('express-handlebars')

const homeRoutes = require('./routes/home')
const addRoutes = require('./routes/add')
const coursesRoutes = require('./routes/courses')


const hbs = exphbs.create({
    extname: 'hbs', // расширение файла
    defaultLayout: 'main' // main.hbs in views/layouts - точка входа
})

app.engine('hbs', hbs.engine); 
app.set('view engine', 'hbs') // регистрация движка
app.set('views', 'views') // папка с вьюхами

app.use(express.static('public'))
app.use(express.urlencoded({extended : true}))
app.use('/', homeRoutes)
app.use('/add', addRoutes)
app.use('/courses', coursesRoutes)










const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`server started on port ${PORT}`);
})

