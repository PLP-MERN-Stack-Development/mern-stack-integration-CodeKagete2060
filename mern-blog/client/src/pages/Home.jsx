import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to MERN Blog</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder for blog posts */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Sample Blog Post</h2>
          <p className="text-gray-600 mb-4">
            This is a placeholder for blog posts. Posts will be loaded from the API.
          </p>
          <Link
            to="/login"
            className="text-blue-600 hover:text-blue-800"
          >
            Login to read more →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;