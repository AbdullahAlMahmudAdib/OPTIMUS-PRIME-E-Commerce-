function toggleSidebar() {
    const sidebar = document.getElementById('categorySidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    if (sidebar.classList.contains('-translate-x-full')) {
        sidebar.classList.remove('-translate-x-full');
        sidebar.classList.add('animate-sidebar-in');
        overlay.classList.remove('hidden');
    } else {
        sidebar.classList.remove('animate-sidebar-in');
        sidebar.classList.add('animate-sidebar-out');
        overlay.classList.add('hidden');
        
        // Reset animation classes after animation completes
        setTimeout(() => {
            sidebar.classList.remove('animate-sidebar-out');
            sidebar.classList.add('-translate-x-full');
        }, 300);
    }
}

// Toggle menu popup
function toggleMenuPopup() {
    const popup = document.getElementById('menuPopup');
    
    if (popup.classList.contains('hidden')) {
        popup.classList.remove('hidden');
        popup.classList.add('animate-fade-in');
    } else {
        popup.classList.add('hidden');
        popup.classList.remove('animate-fade-in');
    }
}

// Close popup when clicking outside
document.addEventListener('click', function(event) {
    const popup = document.getElementById('menuPopup');
    const menuButton = document.querySelector('.fa-ellipsis-v').parentElement;
    
    if (!popup.contains(event.target) && !menuButton.contains(event.target)) {
        popup.classList.add('hidden');
        popup.classList.remove('animate-fade-in');
    }
});

// Category button active state
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Brand button active state
document.querySelectorAll('.brand-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.brand-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Add pulse animation to cart buttons on hover
document.querySelectorAll('.cart-btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.classList.add('pulse-glow');
    });
    
    button.addEventListener('mouseleave', function() {
        this.classList.remove('pulse-glow');
    });
});

// Hide scrollbar for brand navigation
const style = document.createElement('style');
style.innerHTML = `
    .hide-scrollbar::-webkit-scrollbar {
        display: none;
    }
    .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
`;
document.head.appendChild(style);