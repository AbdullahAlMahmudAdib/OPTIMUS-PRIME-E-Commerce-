document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const phone = document.getElementById('signup-phone').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm').value;
    const terms = document.getElementById('terms').checked;
    
    // Simple validation
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    if (!terms) {
        alert('Please agree to the terms and conditions');
        return;
    }
    
    // In a real app, this would send data to a server
    if (name && email && phone && password) {
        // Redirect to dashboard after successful signup
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