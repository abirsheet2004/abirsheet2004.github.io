// Add to your existing script.js
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '20px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards
    document.querySelectorAll('.skill-category, .education-card, .experience-card, .project-card').forEach(el => {
        observer.observe(el);
    });

    const skillBoxes = document.querySelectorAll('.skill-box');
    
    skillBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            // Remove active class from all other boxes
            skillBoxes.forEach(otherBox => {
                if(otherBox !== box) {
                    otherBox.classList.remove('active');
                }
            });
            box.classList.add('active');
        });
    });

    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active link highlighting
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Mouse tracking for ambient light effect
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        document.documentElement.style.setProperty('--mouse-x', `${x}%`);
        document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    });

    // Optional: Add parallax effect to background elements
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        
        document.querySelector('.gradient-sphere').style.transform = 
            `translate(${moveX}px, ${moveY}px)`;
    });

    document.querySelector('.profile-frame').addEventListener('mousemove', (e) => {
        const bounds = e.target.getBoundingClientRect();
        const x = ((e.clientX - bounds.left) / bounds.width) * 100;
        const y = ((e.clientY - bounds.top) / bounds.height) * 100;
        
        e.target.style.setProperty('--mouse-x', `${x}%`);
        e.target.style.setProperty('--mouse-y', `${y}%`);
    });

    // Optional: Add tilt effect
    document.querySelector('.profile-frame').addEventListener('mousemove', (e) => {
        const bounds = e.target.getBoundingClientRect();
        const xRotation = ((e.clientY - bounds.top) / bounds.height - 0.5) * 20;
        const yRotation = ((e.clientX - bounds.left) / bounds.width - 0.5) * 20;
        
        e.target.style.transform = `
            perspective(1000px)
            rotateX(${xRotation}deg)
            rotateY(${yRotation}deg)
        `;
    });

    document.querySelector('.profile-frame').addEventListener('mouseleave', (e) => {
        e.target.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });

    document.querySelector('.cv-download-btn').addEventListener('click', function(e) {
        const button = this;
        
        // Add downloading state
        button.classList.add('downloading');
        const buttonText = button.querySelector('.button-text');
        const originalText = buttonText.textContent;
        buttonText.textContent = 'Downloading...';
        
        // Simulate download process
        setTimeout(() => {
            // Remove downloading state
            button.classList.remove('downloading');
            
            // Add success state
            button.classList.add('success');
            buttonText.textContent = 'Downloaded!';
            
            // Reset button after animation
            setTimeout(() => {
                button.classList.remove('success');
                buttonText.textContent = originalText;
            }, 2000);
        }, 1500);
    });

    // Optional: Add hover effect for desktop devices
    if (window.matchMedia('(hover: hover)').matches) {
        const button = document.querySelector('.cv-download-btn');
        
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            button.style.setProperty('--mouse-x', `${x}%`);
            button.style.setProperty('--mouse-y', `${y}%`);
        });
    }

    // Interactive glow effect
    document.querySelector('.border-animation').addEventListener('mousemove', (e) => {
        const bounds = e.target.getBoundingClientRect();
        const x = ((e.clientX - bounds.left) / bounds.width) * 100;
        const y = ((e.clientY - bounds.top) / bounds.height) * 100;
        
        e.target.style.setProperty('--mouse-x', `${x}%`);
        e.target.style.setProperty('--mouse-y', `${y}%`);
    });

    // Optional: Add subtle rotation on hover
    document.querySelector('.border-animation').addEventListener('mousemove', (e) => {
        const bounds = e.target.getBoundingClientRect();
        const centerX = bounds.left + bounds.width / 2;
        const centerY = bounds.top + bounds.height / 2;
        const rotateX = (e.clientY - centerY) * 0.05;
        const rotateY = (e.clientX - centerX) * 0.05;
        
        e.target.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    document.querySelector('.border-animation').addEventListener('mouseleave', (e) => {
        e.target.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });

    // Add mouse movement effect
    document.querySelector('.title-row').addEventListener('mousemove', (e) => {
        const words = document.querySelectorAll('.title-word');
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;

        words.forEach((word, index) => {
            const factor = (index + 1) * 0.2;
            word.style.transform = `translate(${x * 10 * factor}px, ${y * 5 * factor}px)`;
        });
    });

    // Reset position on mouse leave
    document.querySelector('.title-row').addEventListener('mouseleave', () => {
        const words = document.querySelectorAll('.title-word');
        words.forEach(word => {
            word.style.transform = 'translate(0, 0)';
        });
    });

    // Handle card interactions
    document.querySelectorAll('.edu-card').forEach(card => {
        // Touch events
        card.addEventListener('touchstart', function(e) {
            this.classList.add('active');
        });

        card.addEventListener('touchend', function(e) {
            this.classList.remove('active');
        });

        // Mouse events
        card.addEventListener('mouseenter', function(e) {
            // Add ripple effect
            const ripple = document.createElement('div');
            ripple.className = 'ripple';
            this.appendChild(ripple);

            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = `${size}px`;
            
            ripple.style.left = `${e.clientX - rect.left - size/2}px`;
            ripple.style.top = `${e.clientY - rect.top - size/2}px`;

            ripple.addEventListener('animationend', () => {
                ripple.remove();
            });
        });

        // Add click handler for mobile devices
        card.addEventListener('click', function(e) {
            const wasActive = this.classList.contains('active');
            
            // Remove active class from all cards
            document.querySelectorAll('.edu-card').forEach(c => {
                c.classList.remove('active');
            });

            // Toggle active state for clicked card
            if (!wasActive) {
                this.classList.add('active');
            }
        });
    });

    // Close active card when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.edu-card')) {
            document.querySelectorAll('.edu-card').forEach(card => {
                card.classList.remove('active');
            });
        }
    });

    // Optional: Add staggered entrance animation
    const cards = document.querySelectorAll('.project-card, .strength-card');
    
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Mouse tracking for gradient effect
    document.querySelectorAll('.project-box').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            card.style.setProperty('--mouse-x', `${x}%`);
            card.style.setProperty('--mouse-y', `${y}%`);
        });

        // Optional: Add 3D tilt effect
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            
            const tiltX = (y - 0.5) * 10;
            const tiltY = (x - 0.5) * -10;
            
            card.style.transform = `
                perspective(1000px)
                rotateX(${tiltX}deg)
                rotateY(${tiltY}deg)
                scale(1.02)
            `;
        });

        // Reset transform on mouse leave
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // Intersection Observer for entrance animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `floatCard 6s ease-in-out infinite`;
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-box').forEach(card => {
        observer.observe(card);
    });

    // Mouse tracking for gradient effect
    document.querySelectorAll('.experience-box').forEach(box => {
        box.addEventListener('mousemove', (e) => {
            const rect = box.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            box.style.setProperty('--mouse-x', `${x}%`);
            box.style.setProperty('--mouse-y', `${y}%`);
        });
    });

    // Intersection Observer for entrance animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `floatCard 6s ease-in-out infinite`;
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.experience-box').forEach(box => {
        observer.observe(box);
    });
});
