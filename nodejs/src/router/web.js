const userController = require('../controller/userController')
const courseController = require('../controller/courseController')
const contactController = require('../controller/contactController')
const multer = require('multer')
const path = require('path')
const UserDB = require('../models/user');
const CourseDB = require('../models/course');
const express = require('express');
const router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', (req, res) => {
        res.send('hello')
    })
    const storage = multer.memoryStorage()
    const upload = multer({
        storage: storage,
        limits: {fileSize: '1000000'},
        fileFilter: (req, files, cb) => {
            const fileTypes = /jpg|png|jpeg|gif/
            const mimeType = fileTypes.test(files.mimetype)
            const extname = fileTypes.test(path.extname(files.originalname))
            
            if(mimeType && extname) {
                return cb(null, true)
            } cb('Give proper file format to upload')
        }
    }).single('image');
    const uploadAvatar = multer({
        storage: storage,
        limits: {fileSize: '1000000'},
        fileFilter: (req, files, cb) => {
            const fileTypes = /jpg|png|jpeg|gif/
            const mimeType = fileTypes.test(files.mimetype)
            const extname = fileTypes.test(path.extname(files.originalname))
            
            if(mimeType && extname) {
                return cb(null, true)
            } cb('Give proper file format to upload')
        }
    }).single('avatar');
    
// TƯƠNG TÁC THÊM SỬA XÓA NGƯỜI DÙNG || ĐĂNG NHẬP ĐĂNG KÝ

    router.post('/user/login', userController.login)
    router.post('/user/regrist', userController.regrist)

    router.post('/user', uploadAvatar,userController.create)
    router.get('/user', userController.find)
    app.get('/user/avatar/:userId', async (req, res) => {
        try {
          const user = await UserDB.findById(req.params.userId);
          if (!user || !user.avatar) {
            return res.status(404).send('Avatar not found');
          }
          res.set('Content-Type', user.avatar.contentType);
          res.send(user.avatar.data);
        } catch (error) {
          console.error(error);
          res.status(500).send('Server error');
        }
      });
      app.get('/course/image/:courseId', async (req, res) => {
        try {
          const data = await CourseDB.findById(req.params.courseId);
          if (!data || !data.image) {
            return res.status(404).send('Image not found');
          }
          res.set('Content-Type', data.image.contentType);
          res.send(data.image.data);
        } catch (error) {
          console.error(error);
          res.status(500).send('Server error');
        }
      });
    router.put('/user/', userController.update)
    router.delete('/user/:id', userController.delete)
    
// TƯƠNG TÁC THÊM SỬA XÓA KHÓA HỌC
    router.post('/course', upload,courseController.create)
    router.get('/course', courseController.find)
    router.put('/course/', courseController.update)
    router.delete('/course/:id', courseController.delete)
    

// TƯƠNG TÁC THÊM SỬA XÓA ĐĂNG KÝ KHÓA HỌC
    router.post('/contact', contactController.create)
    router.get('/contact', contactController.find)
    router.put('/contact', contactController.update)
    router.delete('/contact/:id', contactController.delete)
    return app.use('/', router)
}

module.exports = initWebRoutes










