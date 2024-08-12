// Select the checkbox group item
const checkboxGroupItem = document.querySelector('.checkbox-group-item');

// Select the checkbox within the group item
const checkbox = document.querySelector('#checkbox-1');

// Add an event listener for the 'click' event on the checkbox group item
checkboxGroupItem.addEventListener('click', function() {
    // Toggle the checkbox's checked state
    checkbox.checked = !checkbox.checked;
    
    // Change the border based on the checkbox state
    if (checkbox.checked) {
        checkboxGroupItem.style.border = '2px solid #0BA5EC';
    } else {
        checkboxGroupItem.style.border = '1px solid #e4e7ec'; // Reset to original border
    }
});
