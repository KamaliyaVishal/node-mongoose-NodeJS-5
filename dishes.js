const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

//var Dishes = mongoose.model('Dish', dishSchema);

module.exports = mongoose.model('Dish', dishSchema);