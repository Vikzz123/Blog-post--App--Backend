const Post = require('../Models/postModel');

exports.createPost = async (req, res) => {
    try {
         const{title, body} = req.body;
         const post = new Post({
            title,
            body
         });
         const savedPost = await post.save();
         res.status(201).json({
            post : savedPost});
    }catch(err){
        res.status(500).json({
            error: err.message
        });
    }
};

exports.getAllPosts = async (req, res) => {
    try{
         const posts = await Post.find().populate('comments').populate('likes');
         res.status(200).json({
            posts: posts                    
            }); 
    }catch(err){
        res.status(500).json({
            error: err.message
        });
    }               
};