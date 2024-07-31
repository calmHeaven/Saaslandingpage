document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('waitlistForm').addEventListener('submit', function (event) {
        document.getElementById('waitlistForm').addEventListener('submit', function () {
        let submission = document.getElementById('submission-button');
        submission='';
        });
            //event.preventDefault(); // Prevent the default form submission

            var formData = new FormData(this); // Get form data
            var jsonObject = {}; // Convert form data to JSON object
            formData.forEach(function (value, key) {
                jsonObject[key] = value;
            });


            // Send form data to backend API
            fetch('http://localhost:8080/api/v1/Waitlist', {
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
                    console.log('Waitlist entry successful:', data);
                    alert('Successfully joined the waitlist!');
                })
                .catch(error => {
                    console.error('Error joining waitlist:', error);
                    alert('Error joining waitlist: ' + error.message);
                });
    });
});
