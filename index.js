const express = require('express');
const app = express();
const path =require('path')
const exphbs = require('express-handlebars')


const hbs = exphbs.create({
    extname: 'hbs', // расширение файла
    defaultLayout: 'main'
})

app.engine('hbs', hbs.engine); 
app.set('view engine', 'hbs') // регистрация движка
app.set('views', 'views')

app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/about', (req, res)=>{
    res.status = 200;
    res.sendFile(path.join(__dirname, 'views','about.html'))

})







const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`server started on port ${PORT}`);
})

