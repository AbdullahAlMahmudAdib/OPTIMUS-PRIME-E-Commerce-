// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Simple validation (in a real app, this would be server-side)
    if (email && password) {
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
    } else {
        alert('Please fill in all fields');
    }
});

// Add pulse animation to buttons on hover
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.classList.add('pulse-glow');
    });
    
    button.addEventListener('mouseleave', function() {
        this.classList.remove('pulse-glow');
    });
});