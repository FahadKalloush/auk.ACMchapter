// Simple form submission handler (for demo; in production, connect to a backend like EmailJS, Formspree, or a server)
document.addEventListener('DOMContentLoaded', function() {
    const enrollForm = document.getElementById('enrollForm');
    if (enrollForm) {
        enrollForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here, you could add form validation, collect data, and send to a server
            alert('Enrollment submitted! We\'ll contact you soon.');
            // Optional: Reset form after submission
            // enrollForm.reset();
        });
    }
});
