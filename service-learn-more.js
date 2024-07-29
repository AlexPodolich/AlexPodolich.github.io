document.querySelectorAll('.learn-more-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();

        // Get the parent flip-card
        const flipCard = this.closest('.flip-card');
        
        // Check if card is already active
        if (flipCard.classList.contains('active')) {
            // If active, remove active class to flip back
            flipCard.classList.remove('active');
        } else {
            // If not active, add active class to flip
            // Optionally, you can remove the 'active' class from any other card if needed
            document.querySelectorAll('.flip-card').forEach(card => card.classList.remove('active'));
            flipCard.classList.add('active');
        }
    });
});
