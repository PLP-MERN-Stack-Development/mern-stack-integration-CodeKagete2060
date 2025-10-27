# MERN Stack Blog Platform

A modern, full-stack blogging platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that demonstrates seamless integration between front-end and back-end components.

## Author

**Hope Griffins** (CodeKagete2060)  
Full Stack Developer  
PLP MERN Stack Development Program, 2025

## ✨ Completed Features

### Authentication & Security
- ✅ Secure user registration with proper validation
- ✅ JWT-based authentication system
- ✅ Protected routes with middleware
- ✅ Role-based access control
- ✅ Secure password hashing with bcrypt

### User Interface
- ✅ Responsive navigation with authentication state
- ✅ Clean, modern UI using Tailwind CSS
- ✅ Form validation and error handling
- ✅ Loading states and user feedback
- ✅ Mobile-friendly design

### Category Management
- ✅ Protected category creation
- ✅ Category listing and organization
- ✅ Automatic slug generation
- ✅ Error handling with user-friendly messages

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn
- Git

### Installation Steps

1. Clone the repository:
```bash
git clone https://github.com/PLP-MERN-Stack-Development/mern-stack-integration-CodeKagete2060.git
cd mern-stack-integration-CodeKagete2060
```

2. Set up the server:
```bash
cd server
npm install
```

3. Configure environment variables:
Create a `.env` file in the server directory:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

4. Set up the client:
```bash
cd ../client
npm install
```

5. Start the application:

In the server directory:
```bash
npm run dev
```

In the client directory:
```bash
npm run dev
```

The application will be running at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## 📁 Project Structure

The project follows a clean, modular architecture:

### Client Structure
```
client/
├── src/
│   ├── api/          # API integration
│   ├── components/   # Reusable UI components
│   ├── pages/        # Page components
│   └── App.jsx       # Main application
```

### Server Structure
```
server/
├── controllers/      # Business logic
├── models/          # Database schemas
├── routes/          # API endpoints
├── middleware/      # Custom middleware
└── server.js        # Entry point
```

## 🔗 API Endpoints

### Authentication
```
POST /api/auth/register  - Register new user
POST /api/auth/login     - Login user
```

### Categories
```
GET    /api/categories     - List all categories
POST   /api/categories     - Create category (protected)
PUT    /api/categories/:id - Update category (protected)
DELETE /api/categories/:id - Delete category (protected)
```

## 🎯 Key Features Implementation

### Authentication Flow
- Registration with field validation
- Secure password hashing
- JWT token generation and storage
- Protected route middleware
- Automatic token inclusion in API requests

### User Experience
- Responsive navigation bar
- Form validation and error messages
- Loading states during API calls
- Automatic redirects after actions
- Clear success/error feedback

### Data Management
- MongoDB with Mongoose schemas
- RESTful API architecture
- Proper error handling
- Consistent response format

## 🚧 Upcoming Features

- Blog post creation and management
- User profiles
- Rich text editor
- Image upload support
- Comments system
- Search functionality
- Tags management
- Social sharing

## 📚 Technologies Used

- **Frontend:**
  - React 18
  - React Router v6
  - Axios
  - Tailwind CSS
  - Vite

- **Backend:**
  - Node.js
  - Express
  - MongoDB
  - Mongoose
  - JWT
  - Bcrypt

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## 📜 License

This project is open source and available under the MIT License.

---

### 🌟 About the Author

This project was developed by **Hope Griffins** (CodeKagete2060) as part of the PLP MERN Stack Development Program. It demonstrates proficiency in full-stack development, including:

- Modern React practices
- REST API design
- Authentication & Authorization
- Database modeling
- UI/UX considerations
- Security best practices

Connect with me:
- GitHub: [CodeKagete2060](https://github.com/CodeKagete2060)

---

*Built with ❤️ by Hope Griffins | PLP MERN Stack Development 2025*