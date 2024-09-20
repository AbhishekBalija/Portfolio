document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this); // Create a FormData object

    fetch('https://script.google.com/macros/s/AKfycbwPPfaczTTDgLuG-Aqpq8XdLnBJfRZVWcZ8wXGbV08sr2q2mKUdnTKpz6FZoIVchom5OA/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            const confirmationMessage = document.getElementById('confirmationMessage');
            confirmationMessage.classList.remove('d-none'); // Remove hide class
            confirmationMessage.classList.add('show'); // Add class to trigger animation

            // Reset the form
            this.reset();
            
            // Remove the 'show' class after the animation duration
            setTimeout(() => {
                confirmationMessage.classList.remove('show'); // Remove animation class to hide smoothly
            }, 1000); // This can be adjusted
        } else {
            alert('There was an error submitting the form. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form. Please try again.');
    });
});
