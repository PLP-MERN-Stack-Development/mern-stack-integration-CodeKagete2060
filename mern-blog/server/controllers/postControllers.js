const Post = require('../models/Post');

// @desc Get all posts
exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find().populate('author', 'username').populate('category', 'name');
    res.json(posts);
  } catch (error) {
    next(error);
  }
};

// @desc Get single post
exports.getPostById = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id).populate('author').populate('category');
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (error) {
    next(error);
  }
};

// @desc Create post
exports.createPost = async (req, res, next) => {
  try {
    const post = new Post({ ...req.body, author: req.user.id });
    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (error) {
    next(error);
  }
};

// @desc Update post
exports.updatePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(post);
  } catch (error) {
    next(error);
  }
};

// @desc Delete post
exports.deletePost = async (req, res, next) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    next(error);
  }
};
