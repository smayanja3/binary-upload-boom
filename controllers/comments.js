const Comment = require('../models/Comment')

module.exports = {
    createComment: async (req, res) => {
        try {
            console.log('Request body,', req.body)
            await Comment.create({
               comment: req.body.comment,
               likes: 0,
               post: req.params.id
            });
            console.log("Thanks for the Comment!");
            res.redirect(`/post/${req.params.id}`); // <--- maybe need comma
        } catch (err) {
            console.log(err);
        }
    },
};