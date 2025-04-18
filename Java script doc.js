// Function to expand the bio text when the "Read More" button is clicked
function expandBio() {
  const bio = document.getElementById('bio'); // Get the bio paragraph element by ID

  // Replace the existing short bio with the full detailed bio
  bio.innerHTML = `Hi, I'm Abel Odhiambo, passionate about the intersection of technology and nature. Abel combines a love for innovation with a deep appreciation for the environment. They explore ways to use technology to enhance sustainability and protect the planet. Whether developing eco-friendly tech solutions or spending time in nature, Abel strives to make a positive impact on both the digital and natural worlds. I enjoy building impactful projects and solving real-world problems.`;

  // Disable the "Read More" button after it has been clicked once
  document.querySelector("#profile button").disabled = true;
}

// Function to validate the newsletter form before submission
function validateForm() {
  const name = document.getElementById("name").value;           // Get the value of the name input field
  const email = document.getElementById("email").value;         // Get the value of the email input field
  const errorMessage = document.getElementById("error-message"); // Get the element for showing error messages

  // Check if either the name or email field is empty
  if (name === "" || email === "") {
    errorMessage.textContent = "Please fill out both fields."; // Show error message
    return false; // Prevent form submission
  }

  // Regular expression to validate email format
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // If email does not match the valid format
  if (!emailRegex.test(email)) {
    errorMessage.textContent = "Please enter a valid email address."; // Show error message
    return false; // Prevent form submission
  }

  // If all validations pass
  errorMessage.textContent = ""; // Clear any previous error messages
  alert("Thank you for subscribing!"); // Show a success message
  return true; // Allow form to submit
}
