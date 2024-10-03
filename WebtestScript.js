document.addEventListener('DOMContentLoaded', function() {
            setTimeout(function() {
                document.querySelector('.falling-div').classList.add('visible');
            }, 100);
        });const button = document.getElementById('glowButton');

button.addEventListener('mouseenter', () => {
            button.style.boxShadow = '0 10px 15px -3px rgba(96, 165, 250, 0.5)';
        });

     button.addEventListener('mouseleave', () => {
            button.style.boxShadow = 'none';
        });
