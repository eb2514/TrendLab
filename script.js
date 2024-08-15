document.getElementById('contactButton').addEventListener('click', function() {
    alert('Thank you for your interest! Please contact us at contact@example.com');
});

//Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

