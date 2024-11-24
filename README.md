# Portfolio Backend

Backend server for the portfolio website, handling contact form submissions and other dynamic features.

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB
- Nodemailer (for contact form)

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account
- npm or yarn

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update the variables in `.env` with your values:
     ```
     PORT=5000
     MONGODB_URI=your_mongodb_connection_string
     ```

4. Start the server:
   ```bash
   npm start
   ```

## 📁 Project Structure

```
backend/
├── models/         # Database models
├── routes/         # API routes
├── scripts/        # Utility scripts
├── .env.example    # Example environment variables
├── .gitignore     # Git ignore rules
├── package.json    # Project dependencies
└── server.js      # Main server file
```

## 🔐 Environment Variables

- `PORT`: Server port (default: 5000)
- `MONGODB_URI`: MongoDB connection string

## 📡 API Endpoints

- POST `/api/contact` - Submit contact form
- Additional endpoints to be documented

## 🔧 Development

Run the server in development mode:
```bash
npm run dev
```

## 🚀 Deployment

1. Set up your deployment platform (e.g., Heroku, DigitalOcean)
2. Configure environment variables
3. Deploy the application

## 🔒 Security

- Environment variables are used for sensitive data
- CORS is configured for the frontend domain
- Request validation is implemented
- MongoDB connection is secured

## 👨‍💻 Developer

**Adepu Vaatsava Sri Bhargav**
- GitHub: [@Bhargavvz](https://github.com/Bhargavvz)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
