const dropdownButton = document.getElementById('dropdownButton');
        const dropdownContent = document.getElementById('dropdownContent');
        const chevron = document.querySelector('.chevron');

        dropdownButton.addEventListener('click', function(event) {
            event.stopPropagation();
            dropdownContent.classList.toggle('hide');
            chevron.classList.toggle('down');
        });

        dropdownContent.addEventListener('click', function(event) {
            event.stopPropagation();
        });