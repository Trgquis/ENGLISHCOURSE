const mongoose = require('mongoose');

// Định nghĩa schema cho bảng User
const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    image: {
        data: Buffer,
        contentType: String
      }
}, { timestamps: true });
// Tạo model User từ schema trên
const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;
