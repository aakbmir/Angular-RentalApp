const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentalSchema = new Schema({
    title: { type: String, require: true, max: [128, "Too long, max is 128 characters"] },
    city: { type: String, require: true },
    street: { type: String, require: true, min: [4, 'Too Short, min is 4 characters'] },
    category: { type: String, require: true },
    image: { type: String, require: true },
    bedrooms: { type: Number, require: true },
    shared: Boolean,
    description: { type: String, require: true },
    dailyRate: Number,
    createdAt: { type: Date, defaults: Date.now }
});

module.exports = mongoose.model('Rental', rentalSchema);