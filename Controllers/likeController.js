const Like = require('../Models/likeModel');

exports.createLike = async (req, res) => {
    try{
        const {post, user} = req.body;
        const like = new Like({
            post,
            user
        });
        const savedLike = await like.save();
        res.status(201).json({
            like: savedLike
        });     
    }catch(err){
        res.status(500).json({
            error: err.message
        });
    }       
};

exports.unlikePost = async (req, res) => {
    try{
         const {post, like} = req.body;
         const unlike = await Like.findOneAndDelete({post, _id : like});
         const updatePost = await Post.findByIdAndUpdate(post, {$pull: {likes: unlike._id}}, {new: true});
         res.status(200).json({
            message: 'Post unliked successfully',               
            post: updatePost
            });
    }catch(err){
        res.status(500).json({
            error: err.message
        });
    }       
};