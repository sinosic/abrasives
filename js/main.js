document.addEventListener('DOMContentLoaded', function() {
    // Banner slider functionality
    const slides = document.querySelector('.slides');
    const controls = document.querySelectorAll('.slide-control');
    let currentSlide = 0;
    const slideCount = 4;
    
    function updateControls() {
        controls.forEach((control, index) => {
            if (index === currentSlide) {
                control.classList.add('active');
            } else {
                control.classList.remove('active');
            }
        });
    }
    
    function goToSlide(index) {
        currentSlide = index;
        slides.style.transform = `translateX(-${currentSlide * 25}%)`;
        updateControls();
    }
    
    controls.forEach((control, index) => {
        control.addEventListener('click', () => {
            goToSlide(index);
        });
    });
    
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slideCount;
        goToSlide(currentSlide);
    }, 5000);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                document.querySelectorAll('nav a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
    
    // Set active navigation item based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        const linkPage = link.getAttribute('href');
        if ((linkPage === currentPage) || 
            (linkPage === 'index.html' && currentPage === '')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});