const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const shopSchema = new Schema({
    name: {
        type: String,
        unique: true,
        trim: true
    },
    owner: {
        type: String,
        trim: true
    },
    category: {
        type: String,
        trim: true
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports.Shop = mongoose.model('Shop', shopSchema);