// Projects Data
const projectsData = [
    {
        id: 'electricity-anomaly',
        title: 'Electricity Demand Anomaly Detection',
        description: 'Smart-grid anomaly detection using SARIMA, Isolation Forest, and LSTM',
        emoji: '⚡',
        tags: ['Python', 'ML', 'Deep Learning'],
        category: 'data-science',
        github: 'https://github.com/'
    },
    {
        id: 'credit-default',
        title: 'Credit Default Early-Warning System',
        description: 'Predictive system for loan default risk classification',
        emoji: '💳',
        tags: ['Python', 'ML', 'XGBoost'],
        category: 'data-science',
        github: 'https://github.com/'
    },
    {
        id: 'traffic-analytics',
        title: 'Urban Traffic Congestion Analytics',
        description: 'Clustering and time-series analysis for traffic patterns',
        emoji: '🚗',
        tags: ['Python', 'Analytics', 'Power BI'],
        category: 'analytics',
        github: 'https://github.com/'
    }
];

// Skills Data
const skillsData = {
    'Languages': [
        { name: 'Python', percentage: 95, icon: '🐍' },
        { name: 'JavaScript', percentage: 75, icon: '🟨' },
        { name: 'SQL', percentage: 90, icon: '🗃️' },
        { name: 'Java', percentage: 80, icon: '☕' }
    ],
    'Frameworks & Libraries': [
        { name: 'React.js', percentage: 75, icon: '⚛️' },
        { name: 'Node.js', percentage: 70, icon: '🟩' },
        { name: 'NumPy', percentage: 90, icon: '🔢' },
        { name: 'Pandas', percentage: 90, icon: '🐼' }
    ],
    'Tools & Platforms': [
        { name: 'Git & GitHub', percentage: 88, icon: '🐙' },
        { name: 'Power BI', percentage: 85, icon: '📊' },
        { name: 'MS Excel', percentage: 85, icon: '📗' },
        { name: 'Figma', percentage: 60, icon: '🎨' }
    ]
};

// Typewriter Effect
const roles = ['Data Scientist', 'Data Analyst', 'Full-Stack Developer', 'ML Enthusiast'];
let currentRoleIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function typewriterEffect() {
    const typewriterElement = document.getElementById('typewriter');
    
    // Error handling: return if element doesn't exist
    if (!typewriterElement) {
        console.warn('⚠️ Typewriter element not found in DOM');
        return;
    }

    const currentRole = roles[currentRoleIndex];

    if (isDeleting) {
        currentCharIndex--;
    } else {
        currentCharIndex++;
    }

    typewriterElement.textContent = currentRole.substring(0, currentCharIndex);

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && currentCharIndex === currentRole.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        typeSpeed = 300;
    }

    setTimeout(typewriterEffect, typeSpeed);
}

// Shadow Fighter Canvas Animation
let shadowCanvasRunning = false;

function initShadowCanvas() {
    // Prevent duplicate animation loops
    if (shadowCanvasRunning) {
        console.warn('⚠️ Shadow canvas animation already running');
        return;
    }

    const canvas = document.getElementById('shadowCanvas');
    if (!canvas) {
        console.warn('⚠️ Canvas element not found in DOM');
        return;
    }

    shadowCanvasRunning = true;
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationTime = 0;

    function drawShadowFighter() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw floating shadow particles
        const particleCount = 20;
        for (let i = 0; i < particleCount; i++) {
            const time = animationTime * 0.01 + i;
            const x = Math.sin(time * 0.5) * 200 + canvas.width / 2;
            const y = Math.cos(time * 0.3) * 150 + i * 30;
            const size = Math.sin(time * 0.8) * 10 + 15;

            // Create glowing shadow effect
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
            gradient.addColorStop(0, 'rgba(6, 182, 212, 0.6)');
            gradient.addColorStop(1, 'rgba(6, 182, 212, 0)');

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
        }

        // Draw random slash effects
        if (animationTime % 80 === 0) {
            const slashX = Math.random() * canvas.width;
            const slashY = Math.random() * canvas.height;
            const angle = Math.random() * 360;

            ctx.save();
            ctx.translate(slashX, slashY);
            ctx.rotate((angle * Math.PI) / 180);

            const slashGradient = ctx.createLinearGradient(0, 0, 100, 0);
            slashGradient.addColorStop(0, 'rgba(6, 182, 212, 1)');
            slashGradient.addColorStop(1, 'rgba(6, 182, 212, 0)');

            ctx.strokeStyle = slashGradient;
            ctx.lineWidth = 3;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(80, 0);
            ctx.stroke();

            ctx.restore();
        }

        animationTime++;
        requestAnimationFrame(drawShadowFighter);
    }

    drawShadowFighter();
}

// Load Projects
function loadProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) {
        console.warn('⚠️ Projects grid element not found in DOM');
        return;
    }

    if (!projectsData || projectsData.length === 0) {
        console.warn('⚠️ Projects data is empty');
        return;
    }

    projectsData.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="project-image">${project.emoji}</div>
            <span class="project-category">${project.category.replace('-', ' ')}</span>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.github}" target="_blank">GitHub →</a>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// Load Skills
function loadSkills() {
    const container = document.getElementById('skillsContainer');
    if (!container) {
        console.warn('⚠️ Skills container element not found in DOM');
        return;
    }

    if (!skillsData || Object.keys(skillsData).length === 0) {
        console.warn('⚠️ Skills data is empty');
        return;
    }

    Object.entries(skillsData).forEach((category, categoryIndex) => {
        const [categoryName, skills] = category;
        
        if (!Array.isArray(skills) || skills.length === 0) {
            console.warn(`⚠️ Skills array for "${categoryName}" is invalid`);
            return;
        }

        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category';
        categoryDiv.style.animationDelay = `${categoryIndex * 0.1}s`;
        
        categoryDiv.innerHTML = `<h3>${categoryName}</h3>`;
        
        const skillGrid = document.createElement('div');
        skillGrid.className = 'skill-grid';
        
        skills.forEach((skill, skillIndex) => {
            const skillItem = document.createElement('div');
            skillItem.className = 'skill-item';
            skillItem.style.animationDelay = `${(categoryIndex * 5 + skillIndex) * 0.05}s`;
            skillItem.style.setProperty('--skill-width', `${skill.percentage}%`);
            
            skillItem.innerHTML = `
                <div class="skill-header">
                    <span class="skill-name">
                        <span class="skill-icon">${skill.icon}</span>
                        ${skill.name}
                    </span>
                    <span class="skill-percentage">${skill.percentage}%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-bar-fill"></div>
                </div>
            `;
            
            skillGrid.appendChild(skillItem);
        });
        
        categoryDiv.appendChild(skillGrid);
        container.appendChild(categoryDiv);
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (!menuToggle || !navLinks) {
        console.warn('⚠️ Mobile menu elements not found in DOM');
        return;
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking on a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
}

// Navbar Scroll Effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) {
        console.warn('⚠️ Navbar element not found in DOM');
        return;
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Scroll Animation
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = entry.target.style.animation || 'fadeInUp 0.8s ease forwards';
                // Delay animation
                const delay = entry.target.dataset.animationDelay || '0s';
                entry.target.style.animationDelay = delay;
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Contact Form
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) {
        console.warn('⚠️ Contact form element not found in DOM');
        return;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(form);
        const { name, email, subject, message } = Object.fromEntries(formData);

        // Validate form data
        if (!name || !email || !subject || !message) {
            showFormMessage('Please fill in all fields', 'error');
            return;
        }

        // Create mailto link
        const mailtoLink = `mailto:adityapandey2479@gmail.com?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\n${message}`
        )}`;

        // Show success message before redirecting
        showFormMessage('✅ Opening your email client...\nIf it doesn\'t open, please copy this text and email it manually.', 'success');

        // Reset form
        form.reset();

        // Redirect to mailto after a short delay
        setTimeout(() => {
            window.location.href = mailtoLink;
        }, 1500);
    });
}

// Helper function to show form messages
function showFormMessage(message, type) {
    const messageEl = document.getElementById('formMessage');
    if (!messageEl) {
        console.warn('⚠️ Form message element not found');
        return;
    }

    messageEl.textContent = message;
    messageEl.className = `form-message form-message-${type}`;
    messageEl.style.display = 'block';

    // Auto-dismiss after 5 seconds
    setTimeout(() => {
        messageEl.style.display = 'none';
    }, 5000);
}

// Initialize all functions when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    typewriterEffect();
    initShadowCanvas();
    loadProjects();
    loadSkills();
    initMobileMenu();
    initNavbarScroll();
    initScrollAnimations();
    initContactForm();
});

// Smooth scroll polyfill for older browsers
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
