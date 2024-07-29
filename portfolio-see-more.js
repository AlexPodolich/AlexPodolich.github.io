document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('toggle-works');
    const hiddenWorks = document.querySelector('.work-list.hidden');
    
    function toggleWorks() {
        if (hiddenWorks.classList.contains('hidden')) {
            hiddenWorks.classList.remove('hidden');
            hiddenWorks.classList.add('visible');
            button.textContent = 'Hide';
        } else {
            hiddenWorks.classList.remove('visible');
            hiddenWorks.classList.add('hidden');
            button.textContent = 'See more';
        }
    }
    
    button.addEventListener('click', function (e) {
        e.preventDefault();
        toggleWorks();
    });
});
