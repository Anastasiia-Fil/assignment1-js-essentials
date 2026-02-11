// Shows the profile image after 10 seconds and prints the current date in the footer
(function () {
  // Create date object
  const now = new Date();

  // Get footer elements
  const yearEl = document.getElementById("year");
  const todayEl = document.getElementById("today");

  // Set footer year
  if (yearEl) {
    yearEl.textContent = now.getFullYear();
  }

  // Set formatted date (Canada / English)
  if (todayEl) {
    todayEl.textContent = now.toLocaleDateString("en-CA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  // Delayed image (10 seconds)
// This code shows the profile image after a 10-second delay

var img = document.getElementById("profileImage");

if (img) {
  setTimeout(function () {
    img.style.display = "block";
  }, 10000);
}

})();
