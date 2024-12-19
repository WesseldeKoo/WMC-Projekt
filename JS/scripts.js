// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll-to-Top Button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Check if there's a hash in the URL
const hash = window.location.hash;
if (hash) {
    // Try to find the element with the corresponding ID
    const modalElement = document.querySelector(hash);
    if (modalElement) {
        // If the element is a modal, show it
        const modal = new bootstrap.Modal(modalElement);
        modal.show();

        // Remove the hash from the URL without reloading the page
        history.replaceState(null, null, ' ');
    }
}