import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/api';

const Register = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // API baseURL already includes /api, so call the route relative to that
      const res = await API.post('/auth/register', form);
      alert(res.data?.msg || 'User registered successfully');
      console.log('register response:', res.data);
      // Redirect to login after successful registration
      navigate('/login');
    } catch (err) {
      // Prefer server-provided messages when available
      const serverMsg = err?.response?.data?.msg || err?.response?.data?.message;
      console.error('Registration error:', err?.response || err.message);
      alert(serverMsg || 'Registration failed — please check the console for details');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <input
        name="username"
        placeholder="Name"
        value={form.username}
        onChange={handleChange}
        required
        className="w-full px-3 py-2 mb-4 border rounded focus:outline-none focus:border-blue-500"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full px-3 py-2 mb-4 border rounded focus:outline-none focus:border-blue-500"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
        className="w-full px-3 py-2 mb-4 border rounded focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? 'Registering…' : 'Register'}
      </button>
    </form>
  );
};

export default Register;