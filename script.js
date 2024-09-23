document.getElementById("review-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collecting form data
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const dob = document.getElementById("dob").value;
    const anniversary = document.getElementById("anniversary").value;
    const phone = document.getElementById("phone").value;
    const mobile = document.getElementById("mobile").value;
    const indianFood = document.querySelector('input[name="indian_food"]:checked') ? document.querySelector('input[name="indian_food"]:checked').value : '';
    const tandoorKababs = document.querySelector('input[name="tandoor_kababs"]:checked') ? document.querySelector('input[name="tandoor_kababs"]:checked').value : '';
    const chineseFood = document.querySelector('input[name="chinese_food"]:checked') ? document.querySelector('input[name="chinese_food"]:checked').value : '';
    const seafood = document.querySelector('input[name="seafood"]:checked') ? document.querySelector('input[name="seafood"]:checked').value : '';
    const serviceQuality = document.querySelector('textarea[name="service_quality"]').value;
    const recommendations = document.querySelector('textarea[name="recommendations"]').value;

    // Sending email using EmailJS
    emailjs.send("service_2od9f3g", "template_ud726yh", {
        name: name,
        address: address,
        dob: dob,
        anniversary: anniversary,
        phone: phone,
        mobile: mobile,
        indian_food: indianFood,
        tandoor_kababs: tandoorKababs,
        chinese_food: chineseFood,
        seafood: seafood,
        service_quality: serviceQuality,
        recommendations: recommendations
    }).then(function(response) {
        // Show success message
        alert("Form submitted successfully!");
        document.getElementById("review-form").reset(); // Optional: Reset form after submission
    }, function(error) {
        // Show error message
        alert("Error in sending the form: " + JSON.stringify(error));
    });
});
