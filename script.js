// Navigation scroll effect
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Projects data
const projects = [
    {
        title: "Learning Management System",
        description: "A comprehensive full-stack LMS platform built with Django REST Framework backend and React frontend. Features include user authentication, course management, student enrollment, progress tracking, assignment submissions, and real-time notifications. Includes admin dashboard for content management.",
        tags: ["Django", "React", "Python", "REST API", "Full Stack", "LMS"],
        github: "https://github.com/marwane2001/Learning-Management-System",
        icon: "📚"
    },
    {
        title: "Shopping Website",
        description: "A complete e-commerce platform built with PHP for academic purposes. Features include product catalog with categories, shopping cart functionality, user authentication, order management, and admin panel for inventory management.",
        tags: ["PHP", "MySQL", "E-commerce", "Full Stack", "HTML/CSS"],
        github: "https://github.com/marwane2001/Shopping_Website",
        icon: "🛒"
    },
    {
        title: "Chat App",
        description: "A real-time chat application built with Flutter for cross-platform mobile development and Firebase for backend services. Features include instant messaging, user authentication, real-time message synchronization, and group chat capabilities.",
        tags: ["Flutter", "Firebase", "Dart", "Mobile", "Real-time"],
        github: "https://github.com/marwane2001/chat_app",
        icon: "💬"
    },
    {
        title: "Spring Boot CRUD Applications",
        description: "Enterprise-grade CRUD applications built with Spring Boot and Java. Implements RESTful APIs, database operations with JPA/Hibernate, and follows MVC architecture. Includes multiple variations demonstrating different patterns and best practices.",
        tags: ["Java", "Spring Boot", "REST API", "JPA", "Backend"],
        github: "https://github.com/marwane2001/Springboot_Crud_2",
        icon: "☕"
    },
    {
        title: "Books CRUD Application",
        description: "A full-stack book management system built with TypeScript. Features Create, Read, Update, and Delete operations with a modern, intuitive interface. Includes efficient data management, search functionality, and responsive design.",
        tags: ["TypeScript", "CRUD", "Full Stack", "Frontend"],
        github: "https://github.com/marwane2001/Books_Crud",
        icon: "📖"
    },
    {
        title: "Students CRUD System",
        description: "A comprehensive student management system built with TypeScript. Handles student data management with advanced features including detailed student profiles, delete functionality directly from the show page, and efficient data operations.",
        tags: ["TypeScript", "CRUD", "Frontend", "Data Management"],
        github: "https://github.com/marwane2001/Students_Crudv2",
        icon: "👨‍🎓"
    },
    {
        title: "Telegram Image Classification ChatBot",
        description: "An intelligent Telegram bot that performs image classification using machine learning. Users can send images to the bot, which classifies them using trained ML models. Built with Python and includes Jupyter notebooks for model training and testing.",
        tags: ["Python", "Machine Learning", "Telegram Bot", "Image Classification", "Jupyter"],
        github: "https://github.com/marwane2001/Telegram_Image_Classification_ChatBot",
        icon: "🤖"
    },
    {
        title: "Hespress Comments Sentiment Analysis",
        description: "An academic project for natural language processing that analyzes sentiment in Hespress (Moroccan news website) article comments. Uses machine learning algorithms to classify comments as positive, negative, or neutral. Built with Python and Jupyter Notebook.",
        tags: ["Python", "Machine Learning", "NLP", "Sentiment Analysis", "Jupyter"],
        github: "https://github.com/marwane2001/Hespress-Comments-Sentiment-Analysis",
        icon: "🤖"
    },
    {
        title: "Analyzing Historical Stock and Revenue Data",
        description: "A data analysis and visualization project using Jupyter Notebook to analyze historical stock prices and company revenue data. Includes data cleaning, statistical analysis, and interactive visualizations to extract insights from financial datasets.",
        tags: ["Python", "Data Analysis", "Jupyter", "Finance", "Data Visualization"],
        github: "https://github.com/marwane2001/Analyzing-Historical-Stock-and-Revenue-Data",
        icon: "📊"
    },
    {
        title: "Python Projects Zero To Hero",
        description: "A comprehensive collection of Python projects demonstrating skills from beginner to advanced levels. Includes various applications covering different domains like web scraping, data processing, automation, and utility tools. Perfect showcase of Python programming progression.",
        tags: ["Python", "Projects", "Learning", "Automation"],
        github: "https://github.com/marwane2001/Python_Projects_Zero_To_Hero",
        icon: "🐍"
    },
    {
        title: "Simpleauth",
        description: "A secure authentication system built with PHP. Provides user registration, login, password hashing, session management, and authentication middleware. Includes security best practices for protecting user credentials and managing user sessions.",
        tags: ["PHP", "Authentication", "Security", "Session Management"],
        github: "https://github.com/marwane2001/Simpleauth",
        icon: "🔐"
    }
];

// Render projects
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.animationDelay = `${index * 0.1}s`;
        projectCard.innerHTML = `
            <div class="project-image">
                <span>${project.icon}</span>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">
                        <i class="fab fa-github"></i>
                        <span>View Code</span>
                    </a>
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    
    // Add fade-in animation to project cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Add scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for scroll animations
document.querySelectorAll('section > .container').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    scrollObserver.observe(section);
});

