document.getElementById('waitlist-form').addEventListener('click', function() {
    
    event.preventDefault();
    fetch('http://localhost:8080/api/Waitlist', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonObject)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse response body as JSON
    })
    .then(data => {
        console.log('Waitlist registration successful', data);
        alert('Thank you for signing up! We will notify you when we launch. 👊🏿');
        // Redirect to another page, show success message, or perform other actions
    })
    .catch(error => {
        console.error('Error registering:', error);
        alert('Error registering: ' + error.message);
        // Handle registration errors or display error messages to the user
    });
});

