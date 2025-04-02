window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
function getFeedback() {
    let nameInput = document.getElementById("youremail").value;
    
    if (nameInput.trim() === "") {
        alert("Please enter your name.");
    } else {
        alert(`Your email "${nameInput}" has been submitted.`);
    }
}
