document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const leadForm = document.getElementById('leadForm');
    const formFeedback = document.getElementById('formFeedback');

    // 1. Mobile Menu Toggle
    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside or on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburgerBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // 2. Interactive Lead Capture Form Submission
    leadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = leadForm.querySelector('input[type="email"]');
        
        if (emailInput.value) {
            // Simulate API Request sending phase
            formFeedback.style.color = '#34d399'; // Success green
            formFeedback.textContent = `🚀 Success! ${emailInput.value} has been added to the waitlist.`;
            emailInput.value = '';
            
            // Clear message after 5 seconds
            setTimeout(() => {
                formFeedback.textContent = '';
            }, 5000);
        }
    });
});
