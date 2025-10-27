const Category = require('../models/category.js');

// ✅ Get all categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Internal server error' });
  }
};

// ✅ Get category by ID
exports.getCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({ msg: 'Category not found' });
    }
    res.status(200).json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Internal server error' });
  }
};

// ✅ Create new category
exports.createCategory = async (req, res) => {
  try {
    let { name } = req.body;

    if (!name) {
      return res.status(400).json({ msg: 'Name is required' });
    }

    // Generate slug from name
    const slug = name.toLowerCase().replace(/ /g, '-');

    const existing = await Category.findOne({ slug });
    if (existing) {
      return res.status(400).json({ msg: 'Category already exists' });
    }

    const newCategory = new Category({ name, slug });
    await newCategory.save();

    res.status(201).json(newCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Internal server error' });
  }
};

// ✅ Update category
exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const slug = name.toLowerCase().replace(/ /g, '-');
    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { name, slug },
      { new: true }
    );

    if (!updatedCategory) {
      return res.status(404).json({ msg: 'Category not found' });
    }

    res.status(200).json(updatedCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Internal server error' });
  }
};

// ✅ Delete category
exports.deleteCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Category.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ msg: 'Category not found' });
    }
    res.status(200).json({ msg: 'Category deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Internal server error' });
  }
};
