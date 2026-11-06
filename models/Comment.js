const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    // commentBy: {
    //     type: PostSchema.user,
    //     ref:'User'
    // },
    comment: {
        type: String,
        required: true,
    },
    likes: {
        type: Number,
        default: 0,
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post', // <- refernce another module
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    // delete: {
    //     default: false
    // },
});

module.exports = mongoose.model('Comment', CommentSchema);

// need to create a link and delete button for ever comment like auth
// in the for loop and then add the like and dislike logic in server or...
// is that MVC or would it go somewhere else.