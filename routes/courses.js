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

// router.get('/:id', async (req, res)=>{
//     res.render('')
// })

module.exports = router;