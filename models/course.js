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
                (err, content) => {
                    if(err) reject(err) 
                    else {
                        resolve(content)
                    }
                }
            )
        })
    }


    async save(){
           try {
               const content = await Course.getAll();
               const data = JSON.parse(content) 
               console.log(data)
               
               const course = {
                   title : this.title,
                   price : this.price,
                   imgurl : this.imgurl,
                   uuid : uuid()
               }
               data.push(course)
               fs.writeFile(
                   path.join(__dirname, '..', 'data', 'base.json'),
                   JSON.stringify(data),
                   (err) => {
                       console.log(err)
                   } 
               )



           } catch (err){
               console.log(err)
           }
           
    }

    


}

module.exports = Course