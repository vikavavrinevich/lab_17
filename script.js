document.addEventListener("DOMContentLoaded", function() {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach(function(block) {
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'х';
        deleteButton.addEventListener('click', function() {
            block.remove();
        });
        block.appendChild(deleteButton);
    });
});