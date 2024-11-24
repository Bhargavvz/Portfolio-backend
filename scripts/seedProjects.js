import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from '../models/Project.js';

dotenv.config();

const projects = [
    {
        title: "Communitifx",
        description: "A community issue reporting website that enables users to report and track local issues like drainage leaks or street light failures. Features include interactive maps with color-coded markers and an AI chatbot for user assistance.",
        imageUrl: "/images/communitifx.jpg",
        technologies: ["Vite", "React", "Spring Boot", "PostgreSQL", "Docker"],
        githubLink: "https://github.com/Bhargavvz/Communitfx",
        featured: true,
        order: 1
    },
    {
        title: "Medi Alert",
        description: "A comprehensive web application for medical shops to track medicines, monitor expiry dates, and manage stock. Includes a notification system for expiry alerts and a dashboard for inventory management.",
        imageUrl: "/images/medialert.jpg",
        technologies: ["HTML", "CSS", "Flask", "MySQL"],
        githubLink: "https://github.com/Bhargavvz/Hack-The-Verse",
        featured: true,
        order: 2
    },
    {
        title: "Doctor-Patient Management System",
        description: "A healthcare management platform facilitating appointment scheduling, consultations, and medical record management. Features include patient profiles, appointment booking, and integrated payment system.",
        imageUrl: "/images/healthcare.jpg",
        technologies: ["Angular", "C#", "Microsoft SQL Server"],
        featured: true,
        order: 3
    },
    {
        title: "Modern Portfolio Website",
        description: "A modern, responsive portfolio website built with React and Node.js. Features include smooth animations, contact form functionality, and dynamic project display.",
        imageUrl: "/images/portfolio.jpg",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Styled Components", "Framer Motion"],
        githubLink: "https://github.com/bhargavvz/portfolio",
        order: 4
    },
    {
        title: "Weather Dashboard",
        description: "A real-time weather dashboard that provides current weather conditions and forecasts for multiple locations using OpenWeatherMap API.",
        imageUrl: "/images/weather.jpg",
        technologies: ["JavaScript", "HTML5", "CSS3", "OpenWeatherMap API"],
        githubLink: "https://github.com/bhargavvz/weather-dashboard",
        order: 5
    }
];

async function seedProjects() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');

        // Clear existing projects
        await Project.deleteMany({});
        console.log('Cleared existing projects');

        // Insert new projects
        const createdProjects = await Project.insertMany(projects);
        console.log(`Added ${createdProjects.length} projects`);

        mongoose.connection.close();
        console.log('Database connection closed');
    } catch (error) {
        console.error('Error seeding projects:', error);
        process.exit(1);
    }
}

seedProjects();
