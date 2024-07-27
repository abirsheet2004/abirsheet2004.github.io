// Toggle the visibility of sections when headers are clicked
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('main section');
    
    sections.forEach(section => {
        const header = section.querySelector('h2');
        header.style.cursor = 'pointer';
        
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            if (content.style.display === 'none') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});

// Smooth scrolling to sections
document.querySelectorAll('header a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
