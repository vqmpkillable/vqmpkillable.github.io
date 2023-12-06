// Function to remove '.html' extension from the URL
function removeHtmlExtension() {
  var currentPage = window.location.href;

  if (currentPage.endsWith('.html')) {
    var newURL = currentPage.slice(0, -5); // Remove the last 5 characters ('.html')
    history.replaceState({}, document.title, newURL);
  }
}

// Call the function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
  removeHtmlExtension();
});
