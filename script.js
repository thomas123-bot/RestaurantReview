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

    // Constructing email body
    const emailBody = `
        Hello,

        You have received a new review submission. Below are the details:

        **Name:** ${name}
        **Address:** ${address}
        **Date of Birth:** ${dob}
        **Wedding Anniversary:** ${anniversary}
        **Phone:** ${phone}
        **Mobile:** ${mobile}

        **Quality of Food:**
        - Indian: ${indianFood}
        - Tandoor & Kababs: ${tandoorKababs}
        - Chinese: ${chineseFood}
        - Seafood: ${seafood}

        **Quality of Service:**
        ${serviceQuality}

        **Additional Recommendations:**
        ${recommendations}

        Thank you for your feedback!

        Best regards,
        Gold Coin Family Deluxe Restaurant-N-Bar
    `;

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
        recommendations: recommendations,
        email_body: emailBody // Optional: if you want to include the full email body
    }).then(function(response) {
        alert("Form submitted successfully!");
    }, function(error) {
        alert("Error in sending the form: " + error);
    });
});
