document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if(name === "" || email === "" || message === "") {
        document.getElementById("result").innerHTML =
        "Please fill in all required fields.";
    } else {
        document.getElementById("result").innerHTML =
        "Thank you! Your message has been sent.";
    }

});
function showGreeting() {
    alert("Hello! Welcome to my personal website. I hope you find it informative and enjoyable.");
}


