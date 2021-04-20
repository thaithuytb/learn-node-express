const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Post = new Schema({
    name: { type: String },
    content: { type: String },
});


module.exports = mongoose.model('Post', Post);
