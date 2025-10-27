// routes/categoryRoutes.js
const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController.js');
const { protectRoute } = require('../controllers/authController.js'); // You can move it to middleware later

// Public Routes
router.get('/', categoryController.getCategories);
router.get('/:id', categoryController.getCategoryById);

// Protected/Admin Routes
router.post('/', protectRoute, categoryController.createCategory);
router.put('/:id', protectRoute, categoryController.updateCategory);
router.delete('/:id', protectRoute, categoryController.deleteCategory);

module.exports = router;
