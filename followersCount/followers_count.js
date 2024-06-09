let count = 0; // Initialize count to 0

function displayCount() {
    // to display the count in the HTML
    document.getElementById('countDisplay').innerHTML = count;
}

function increaseCount() {
    count++; // increment the count by 1
    displayCount(); // Display the count
    checkCountValue(); // Check count value and display messages
}

function checkCountValue() {
    if (count === 10) {
        alert("Your post gained 10 followers!");
    } else if (count === 20) {
        alert("Your post gained 20 followers! Keep it up!")
    }
}






