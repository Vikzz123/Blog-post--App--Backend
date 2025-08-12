const express = require('express');
const router = express.Router();

const {createComment} = require('../Controllers/commentController');
const {createPost, getAllPosts} = require('../Controllers/postController');
const {createLike, unlikePost} = require('../Controllers/likeController');

router.post('/comment', createComment);                            
router.post('/post', createPost);
router.post('/like', createLike);   
router.get('/posts', getAllPosts);
router.post('/unlike', unlikePost);

module.exports = router;