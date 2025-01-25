function checkPassword(event) {
  event.preventDefault(); // Prevent the default link behavior
  const password = prompt("Enter the password to access the portfolio:");
  if (password === "janeausten") {
    // Redirect if the password is correct
    window.location.href = "portfolio.html";
  } else {
    // Alert if the password is incorrect
    alert("Incorrect password. Contact skdoyle@ymail.com to access.");
  }
}
