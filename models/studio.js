const mongoose = require('mongoose');

const studioSchema = new mongoose.Schema ({
    name: String,
    manufacturer: String,
    category: String,
    serial: Number,
    cost: Number,
})

const Studio = mongoose.model('Studio', studioSchema)

module.exports = Studio