// Main JavaScript for Resona Model Application

document.addEventListener('DOMContentLoaded', function() {
    // Form validation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('input-error');
                    
                    // Create error message if it doesn't exist
                    let errorMessage = field.parentNode.querySelector('.error-message');
                    if (!errorMessage) {
                        errorMessage = document.createElement('p');
                        errorMessage.classList.add('error-message');
                        errorMessage.textContent = 'This field is required';
                        field.parentNode.appendChild(errorMessage);
                    }
                } else {
                    field.classList.remove('input-error');
                    const errorMessage = field.parentNode.querySelector('.error-message');
                    if (errorMessage) {
                        errorMessage.remove();
                    }
                }
            });
            
            if (!isValid) {
                event.preventDefault();
            }
        });
    });
    
    // Input fields focus/blur effects
    const inputFields = document.querySelectorAll('.input, .textarea, .select');
    inputFields.forEach(field => {
        field.addEventListener('focus', function() {
            this.parentNode.classList.add('focused');
        });
        
        field.addEventListener('blur', function() {
            this.parentNode.classList.remove('focused');
        });
    });
    
    // File input display
    const fileInputs = document.querySelectorAll('.file-input');
    fileInputs.forEach(input => {
        input.addEventListener('change', function(e) {
            const fileName = e.target.files[0] ? e.target.files[0].name : 'No file chosen';
            const fileNameDisplay = document.getElementById(this.id + '_name');
            if (fileNameDisplay) {
                fileNameDisplay.textContent = fileName;
            }
        });
    });
    
    // Tab navigation
    const tabButtons = document.querySelectorAll('.tab');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    if (tabButtons.length > 0 && tabPanes.length > 0) {
        tabButtons.forEach((button, index) => {
            button.addEventListener('click', function() {
                // Remove active class from all tabs and panes
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabPanes.forEach(pane => pane.classList.add('hidden'));
                
                // Add active class to clicked tab and corresponding pane
                button.classList.add('active');
                tabPanes[index].classList.remove('hidden');
                tabPanes[index].classList.add('fade-in');
            });
        });
    }
    
    // Copy to clipboard functionality
    const copyButtons = document.querySelectorAll('[data-copy]');
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-copy');
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                if (targetElement.tagName === 'TEXTAREA' || targetElement.tagName === 'INPUT') {
                    targetElement.select();
                    document.execCommand('copy');
                } else {
                    const range = document.createRange();
                    range.selectNode(targetElement);
                    window.getSelection().removeAllRanges();
                    window.getSelection().addRange(range);
                    document.execCommand('copy');
                    window.getSelection().removeAllRanges();
                }
                
                const originalText = this.textContent;
                this.textContent = 'Copied!';
                
                setTimeout(() => {
                    this.textContent = originalText;
                }, 2000);
            }
        });
    });
    
    // Responsive navigation
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Loading state for buttons
    const actionButtons = document.querySelectorAll('button[type="submit"]');
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Check if the form is valid before showing loading state
            const form = this.closest('form');
            if (form && form.checkValidity()) {
                const originalText = this.innerHTML;
                this.innerHTML = '<svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Processing...';
                this.disabled = true;
                
                // Store original text for restoration if needed
                this.setAttribute('data-original-text', originalText);
            }
        });
    });
});
