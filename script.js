document.addEventListener('DOMContentLoaded', () => {
    const modalOverlay = document.getElementById('projectModal');
    const modalCloseBtn = document.getElementById('modalClose');
    const projectCards = document.querySelectorAll('.project-trigger');

    // Modal elements
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalDetails = document.getElementById('modalDetails');
    const modalTags = document.getElementById('modalTags');
    const modalLink = document.getElementById('modalLink');

    // Open modal on card click
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            // Populate modal with data attributes
            modalTitle.textContent = card.getAttribute('data-title');
            modalDesc.textContent = card.getAttribute('data-desc');
            modalDetails.innerHTML = card.getAttribute('data-details');
            modalLink.href = card.getAttribute('data-link');

            // Handle tags
            const techStr = card.getAttribute('data-tech');
            modalTags.innerHTML = '';
            if (techStr) {
                const tags = techStr.split(',');
                tags.forEach(t => {
                    const span = document.createElement('span');
                    span.className = 'tag';
                    span.textContent = t.trim();
                    modalTags.appendChild(span);
                });
            }

            // Show modal
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });

    // Close modal function
    const closeModal = () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    // Close events
    modalCloseBtn.addEventListener('click', closeModal);
    
    modalOverlay.addEventListener('click', (e) => {
        // If clicking outside the modal window, close it
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Escape key support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
});
