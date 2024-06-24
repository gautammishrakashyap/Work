document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reportForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        if (validateForm()) {
            submitForm();
        }
    });

    function validateForm() {
        let isValid = true;

        // Example: Validate required fields
        const name = document.getElementById('name').value.trim();
        const caseProblem = document.getElementById('caseProblem').value.trim();
        const age = document.getElementById('age').value.trim();
        const details = document.getElementById('details').value.trim();

        if (name === '') {
            isValid = false;
            alert('Please enter your name.');
        }

        if (caseProblem === '') {
            isValid = false;
            alert('Please describe the type of cybercrime.');
        }

        if (age === '' || isNaN(age)) {
            isValid = false;
            alert('Please enter a valid age.');
        }

        if (details === '') {
            isValid = false;
            alert('Please provide additional details.');
        }

        return isValid;
    }

    function submitForm() {
        const formData = new FormData(form);

        // Example: AJAX submission (you can modify this based on your backend setup)
        fetch('submit_report.php', {
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
            // Assuming the PHP script returns a message or redirects
            console.log(data); // Log response from PHP script
            alert('Report submitted successfully!');
            form.reset(); // Reset the form after successful submission
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            alert('Error submitting report. Please try again.');
        });
    }
});
