const {Router} = require('express')
const Course = require('../models/course')
const router = Router()

router.get('/', async (req, res)=>{
    res.render('courses', {
        title : 'Курсы',
        isCourses : true,
        courses : await Course.getAll() 
    })
})

router.get('/:id/edit', async (req, res)=>{
    
    if(!req.query.allow){
        console.log(req.query)
        return res.redirect("/")
    }

    const course = await Course.getByID(req.params.id)
    res.render('course-edit',{
        layout : 'main',
        title: `Курс ${course.title}`,
        course : course
    })
})


router.get('/:id', async (req, res)=>{
    const course = await Course.getByID(req.params.id)
    res.render('course', {
        layout : 'empty',
        title : `Курс ${course.title}`,
        course : course
    })
})




module.exports = router;