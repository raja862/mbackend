const mongoose = require('mongoose');

//Schema definition
const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    incom: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    expence: {
        type: String,
        required: true,
        trim: true
    },
    
    
});

//Model creation
module.exports = mongoose.model('employees', employeeSchema);