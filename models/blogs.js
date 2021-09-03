const mongoose = require('mongoose');
// schema defines the structure of the document stored in the collection, it is a thing that the model wraps around
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    }
},{ timestamps: true});
// model surronds the schema and provides an interface by which to communicate with the database for the specific collection
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;