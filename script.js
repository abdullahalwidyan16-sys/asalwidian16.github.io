const form = document.getElementById("contactForm");
const errorBox = document.getElementById("formError");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const fullName = form.fullName.value.trim();
  const email = form.email.value.trim();
  const country = form.country.value;
  const comments = form.comments.value.trim();

  if (fullName === "" || email === "" || country === "" || comments === "") {
    errorBox.textContent = "Please fill in all fields before submitting.";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errorBox.textContent = "Please enter a valid email address.";
    return;
  }

  errorBox.textContent = "";
  alert("Thank you, " + fullName + "! Your form was submitted successfully.");
  form.reset();
});
