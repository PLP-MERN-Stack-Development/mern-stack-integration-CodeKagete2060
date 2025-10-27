import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/api';

const CreateCategory = () => {
  const [form, setForm] = useState({ name: '', description: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await API.post('/categories', {
        ...form,
        // Generate a URL-friendly slug from the name
        slug: form.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      });
      alert('Category created successfully!');
      navigate('/categories');
    } catch (err) {
      console.error('Failed to create category:', err);
      // Check specifically for unauthorized error
      if (err?.response?.status === 401) {
        alert('Please login to create categories');
        navigate('/login');
        return;
      }
      const serverMsg = err?.response?.data?.msg || err?.response?.data?.message;
      alert(serverMsg || 'Error creating category');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">Create New Category</h2>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">
            Category Name
          </label>
          <input
            id="name"
            name="name"
            placeholder="Category Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Category Description"
            value={form.description}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? 'Creating...' : 'Create Category'}
        </button>
      </form>
    </div>
  );
};

export default CreateCategory;
