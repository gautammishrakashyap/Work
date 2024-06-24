document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('solutionForm');
    const certificateSection = document.getElementById('certificateSection');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        if (validateForm()) {
            submitSolutionForm();
        }
    });

    function validateForm() {
        let isValid = true;

        // Example: Validate required fields
        const name = document.getElementById('name').value.trim();
        const solution = document.getElementById('solution').value.trim();

        if (name === '') {
            isValid = false;
            alert('Please enter your name.');
        }

        if (solution === '') {
            isValid = false;
            alert('Please provide your solution.');
        }

        return isValid;
    }

    function submitSolutionForm() {
        const formData = new FormData(form);

        // Example: AJAX submission
        fetch('submit_solution.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            console.log(data); // Log response from PHP script
            alert('Solution submitted successfully!');
            form.reset(); // Reset the form after successful submission
            certificateSection.style.display = 'block'; // Show certificate download link
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            alert('Error submitting solution. Please try again.');
        });
    }
});
