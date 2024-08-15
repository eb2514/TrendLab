document.getElementById('contactButton').addEventListener('click', function() {
    alert('Thank you for your interest! Please contact us at contact@example.com');
});
// Add any interactive JavaScript you need for the website here

// Example: Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

