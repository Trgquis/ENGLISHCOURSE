const CourseDB = require('../models/course')

exports.create = (req, res) => {
    let course = req.body
    if(!course) {
        return res.status(400).send({message: 'Missing parameters'})
    }
    const newCourse = new CourseDB({
        name: course.name,
        description: course.description,
        price: course.price,
        image: {
            data: req.file.buffer,
            contentType: req.file.mimetype
        },
    })
    newCourse.save(newCourse)
        .then(data=>{res.send(data)})
        .catch(e => {
            res.status(500).send({message: err.message || 'Error while creating course'})
        })
}
exports.find = (req, res) => {
    if(req.query.id) {
        const id = req.query.id
        CourseDB.findById(id)
            .then(data => {
                if(!data) {
                    res.status(404).send({message: "course not found with id" + id})
                }else {
                    res.send(data)
                }
            })
    }else {
        CourseDB.find()
        .then(course=> {
            res.send(course)
        }).catch(err => {
            res.status(500).send({message: err.message || 'Error while getting course'})
        })
    }
}
exports.update = (req, res) => {
    let course = req.body
    if(!course) {
        return res.status(400).send({message: 'Missing parameters'})
    }
    const id = req.body.id
    CourseDB.findByIdAndUpdate(id, req.body, {useFindAndModify: false, new: true})
        .then(data => {
            if(!data) {
                res.status(404).send({message: `Cannot Update course With id ${id}. course not found!`})
            }else {
                res.send(data)
            }
        }).catch(err => {
            res.status(500).send({message: 'Error while updating course'})
        })
}
exports.delete = (req, res) => {
    const id = req.params.id

    CourseDB.findByIdAndDelete(id)
        .then(data => {
            if(!data) {
                res.status(404).send({message: `Cannot delete with id ${id}`})
            } else {
                res.send({
                    message: 'course was deleted Successfully!'
                })
            }
        }). catch(e => {
            res.status(500).send({message: 'Error while deleting course', e})
        })
}