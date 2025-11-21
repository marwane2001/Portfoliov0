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
        description: "A comprehensive LMS built with JavaScript for managing courses, students, and educational content. Features include user authentication, course management, and progress tracking.",
        tags: ["JavaScript", "Full Stack", "LMS"],
        github: "https://github.com/marwane2001/Learning-Management-System",
        icon: "📚"
    },
    {
        title: "Portfolio Website",
        description: "A modern portfolio website built with Vue.js showcasing projects and skills. Features responsive design, animations, and interactive components.",
        tags: ["Vue.js", "Frontend", "Portfolio"],
        github: "https://github.com/marwane2001/Portfolio",
        icon: "💼"
    },
    {
        title: "Books CRUD Application",
        description: "A TypeScript-based book management system with Create, Read, Update, and Delete operations. Features a clean interface and efficient data management.",
        tags: ["TypeScript", "CRUD", "Full Stack"],
        github: "https://github.com/marwane2001/Books_Crud",
        icon: "📖"
    },
    {
        title: "Students CRUD System",
        description: "A comprehensive student management system built with TypeScript. Handles student data with delete functionality on the show page.",
        tags: ["TypeScript", "CRUD", "Backend"],
        github: "https://github.com/marwane2001/Students_Crudv2",
        icon: "👨‍🎓"
    },
    {
        title: "Hespress Comments Sentiment Analysis",
        description: "An academic project for analyzing sentiment in Hespress article comments using machine learning. Built with Jupyter Notebook.",
        tags: ["Python", "Machine Learning", "NLP", "Jupyter"],
        github: "https://github.com/marwane2001/Hespress-Comments-Sentiment-Analysis",
        icon: "🤖"
    },
    {
        title: "Shopping Website",
        description: "An e-commerce platform built with PHP for academic purposes. Features product catalog, shopping cart, and user management.",
        tags: ["PHP", "E-commerce", "Full Stack"],
        github: "https://github.com/marwane2001/Shopping_Website",
        icon: "🛒"
    },
    {
        title: "Spring Boot CRUD Applications",
        description: "Multiple CRUD applications built with Spring Boot and Java. Demonstrates REST API development and database operations.",
        tags: ["Java", "Spring Boot", "REST API", "Backend"],
        github: "https://github.com/marwane2001/Springboot_Crud_2",
        icon: "☕"
    },
    {
        title: "Telegram Image Classification ChatBot",
        description: "An intelligent Telegram bot that classifies images using machine learning. Built with Python and Jupyter Notebook.",
        tags: ["Python", "Machine Learning", "Telegram Bot", "Image Classification"],
        github: "https://github.com/marwane2001/Telegram_Image_Classification_ChatBot",
        icon: "🤖"
    },
    {
        title: "Python Projects Zero To Hero",
        description: "A collection of Python projects ranging from beginner to advanced level. Includes various applications and utilities.",
        tags: ["Python", "Projects", "Learning"],
        github: "https://github.com/marwane2001/Python_Projects_Zero_To_Hero",
        icon: "🐍"
    },
    {
        title: "Chat App",
        description: "A real-time chat application built with Flutter and Firebase. Features messaging, user authentication, and real-time updates.",
        tags: ["Flutter", "Firebase", "Mobile", "Real-time"],
        github: "https://github.com/marwane2001/chat_app",
        icon: "💬"
    },
    {
        title: "Simpleauth",
        description: "A PHP-based authentication system. Provides secure user authentication with login and registration features.",
        tags: ["PHP", "Authentication", "Security"],
        github: "https://github.com/marwane2001/Simpleauth",
        icon: "🔐"
    },
    {
        title: "Analyzing Historical Stock Data",
        description: "A data analysis project using Jupyter Notebook to analyze historical stock and revenue data. Includes data visualization and insights.",
        tags: ["Python", "Data Analysis", "Jupyter", "Finance"],
        github: "https://github.com/marwane2001/Analyzing-Historical-Stock-and-Revenue-Data",
        icon: "📊"
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

