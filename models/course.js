const uuid = require('uuid/v4')
const fs = require('fs')
const path = require('path')


class Course {
    constructor(title, price, imgurl){
        this.title = title
        this.price = price
        this.imgurl = imgurl
        this.uuid = null

    }

    static getAll(){
        return new Promise((resolve, reject)=>{
            fs.readFile(path.join(__dirname, '..', 'data', 'base.json'),
                'utf-8',
                (err, content) => {
                    if(err) reject(err) 
                    else {
                        resolve(JSON.parse(content))
                    }
                }
            )
        })
    }

    static async getByID(id){
        const courses = await Course.getAll()    
        return new Promise((res, rej) =>{
            res(courses.find( el => el.uuid == id ))
        })
    }

    async save(){
               const content = await Course.getAll();
               
               const course = {
                   title : this.title,
                   price : this.price,
                   imgurl : this.imgurl,
                   uuid : uuid()
               }
               content.push(course)
               return new Promise((resolve, reject)=>{
                    fs.writeFile(
                        path.join(__dirname, '..', 'data', 'base.json'),
                        JSON.stringify(content),
                        (err) => {
                            if(err){
                                reject(err)
                            } else {
                                resolve()
                            }
                        }) 
                    
               })
              
    }

    


}

module.exports = Course