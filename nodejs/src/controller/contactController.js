const ContactDB = require('../models/contact')
exports.create = (req, res) => {
    let course = req.body
    if(!course) {
        return res.status(400).send({message: 'Missing parameters'})
    }
    const newCourse = new ContactDB({
        customername: course.customername,
        phone: course.phone,
        address: course.address,
        message: course.message
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
        ContactDB.findById(id)
            .then(data => {
                if(!data) {
                    res.status(404).send({message: "contact not found with id" + id})
                }else {
                    res.send(data)
                }
            })
    }else {
        ContactDB.find()
        .then(course=> {
            res.send(course)
        }).catch(err => {
            res.status(500).send({message: err.message || 'Error while getting contact'})
        })
    }
}
exports.update = (req, res) => {
    let course = req.body
    if(!course) {
        return res.status(400).send({message: 'Missing parameters'})
    }
    const id = req.body.id
    ContactDB.findByIdAndUpdate(id, req.body, {useFindAndModify: false, new: true})
        .then(data => {
            if(!data) {
                res.status(404).send({message: `Cannot Update contact With id ${id}. contact not found!`})
            }else {
                res.send(data)
            }
        }).catch(err => {
            res.status(500).send({message: 'Error while updating contact'})
        })
}
exports.delete = (req, res) => {
    const id = req.params.id

    ContactDB.findByIdAndDelete(id)
        .then(data => {
            if(!data) {
                res.status(404).send({message: `Cannot delete with id ${id}`})
            } else {
                res.send({
                    message: 'contact was deleted Successfully!'
                })
            }
        }). catch(e => {
            res.status(500).send({message: 'Error while deleting contact', e})
        })
}