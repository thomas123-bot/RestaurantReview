document.getElementById("review-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collecting form data
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const dob = document.getElementById("dob").value;
    const anniversary = document.getElementById("anniversary").value;
    const phone = document.getElementById("phone").value;
    const mobile = document.getElementById("mobile").value;
    const serviceQuality = document.querySelector('textarea[name="service_quality"]').value;
    const recommendations = document.querySelector('textarea[name="recommendations"]').value;

    // Sending email using EmailJS
    emailjs.send("service_id", "template_id", {
        name: name,
        address: address,
        dob: dob,
        anniversary: anniversary,
        phone: phone,
        mobile: mobile,
        service_quality: serviceQuality,
        recommendations: recommendations
    }).then(function(response) {
        alert("Form submitted successfully!");
    }, function(error) {
        alert("Error in sending the form: " + error);
    });
});
