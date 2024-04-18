document.addEventListener("DOMContentLoaded", function() {
    const headings = document.querySelectorAll('.accordion-heading');

    headings.forEach(function(heading) {
      heading.addEventListener('click', function() {
        const content = this.nextElementSibling;
        content.classList.toggle('active');
        this.classList.toggle('active');
        
        // Toggle arrow icon
        const icon = this.querySelector('i');
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-up');
      });
    });
  });