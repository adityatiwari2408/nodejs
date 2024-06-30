const mongoose = require('mongoose');


const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Add the name'],
    },
    email: {
        type: String,
        required: [true, 'Please Add the email id'],
    },
    phone: {
        type: String,
        required: [true, 'Please Add the Contact Number'],
    },

}, {
    timestamps: true,
});

module.exports = mongoose.model('Contact', contactSchema);