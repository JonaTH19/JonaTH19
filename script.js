// Form validation function
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields');
      return false;
    }
  
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return false;
    }
  
    return true;
  }
  
  // Apply form validation on form submission
  const submitButton = document.getElementById('submit-btn');
  if (submitButton) {
    submitButton.addEventListener('click', function(event) {
      event.preventDefault();
      if (validateForm()) {
        // Process form submission (you can add your code here)
        alert('Form submitted successfully!');
        document.getElementById('contact-form').reset();
      }
    });
  }
  
  // Simple animation - example (can be customized)
  const heroSection = document.querySelector('.hero');
  
  if (heroSection) {
    heroSection.addEventListener('mouseover', function() {
      heroSection.style.backgroundColor = '#ffcc00';
      heroSection.style.transition = 'background-color 0.5s ease';
    });
  
    heroSection.addEventListener('mouseout', function() {
      heroSection.style.backgroundColor = '#333';
    });
  }
  