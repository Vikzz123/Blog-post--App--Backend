const Comment = require('../Models/commentModel');
const Post = require('../Models/postModel');

exports.createComment = async (req, res) => {
    try{
        const {post, body, user} = req.body;
        // const comment = await Comment.create({ post, body, user });
        // res.status(201).json({ message: 'Comment created successfully', comment }); 

        //another method to create a comment
        const comment = new Comment({ post, body, user });
        const savedComment = await comment.save();
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $push: { comments: savedComment._id } },
            { new: true }
        ).populate('comments').exec();
        res.status(201).json({ 
            post: updatedPost,
            message: 'Comment created successfully', comment });
    }
    catch(err){
        res.status(500).json({ message: 'Error creating comment', error: err.message });
        }
}