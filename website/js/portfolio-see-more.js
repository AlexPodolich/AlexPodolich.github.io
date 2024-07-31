document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('toggle-works');
    const hiddenWorks = document.querySelectorAll('.work.hidden');
    
    function toggleWorks() {
        hiddenWorks.forEach(function(work) {
            if (work.classList.contains('hidden')) {
                work.classList.remove('hidden');
                work.classList.add('visible');
            } else {
                work.classList.remove('visible');
                work.classList.add('hidden');
            }
        });

        if (button.textContent === 'See more') {
            button.textContent = 'Hide';
        } else {
            button.textContent = 'See more';
        }
    }
    
    button.addEventListener('click', function (e) {
        e.preventDefault();
        toggleWorks();
    });
});