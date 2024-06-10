// fetch
const username = document.getElementById('name').value;
const age = document.getElementById('age').value;
const email = document.getElementById('email').value;
const job = document.getElementById('job').value;
const designation = document.getElementById('designation').value;
const productType = document.getElementById('productType').value;
const feedback = document.getElementById('feedbackText').value;


// submit function
function submitFeedback() {
    alert('Thank you for your valuable feedback.');
    // show
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    // display div element to be visible only after the user clicks on the submit button
    document.getElementById('userInfo').style.display = 'block';
}

// implement button click to submit feedback
const submitButton = document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;

// implement key press to submit feedback
document.addEventListener('keydown', function(event){
    if (event.key === 'Enter') {
        submitFeedback();
    }
});


