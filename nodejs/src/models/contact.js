const mongoose = require('mongoose');

// Định nghĩa schema cho bảng User
const ContactSM = new mongoose.Schema({
    customername: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    message: {
        type: String
    }
}, { timestamps: true });
// Tạo model User từ schema trên
const Contact = mongoose.model('Contact', ContactSM);

module.exports = Contact;
