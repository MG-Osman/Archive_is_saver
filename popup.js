document.addEventListener('DOMContentLoaded', function() {
  // Save custom URL button
  document.getElementById('save-url').addEventListener('click', function() {
    const urlInput = document.getElementById('url-input').value.trim();
    if (urlInput) {
      archiveUrl(urlInput);
    }
  });

  // Save current tab URL button
  document.getElementById('save-current').addEventListener('click', function() {
    browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
      if (tabs && tabs[0] && tabs[0].url) {
        archiveUrl(tabs[0].url);
      }
    });
  });

  // Auto-populate input with current URL
  browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
    if (tabs && tabs[0] && tabs[0].url) {
      document.getElementById('url-input').value = tabs[0].url;
    }
  });
});

// Function to archive a URL
function archiveUrl(url) {
  // Encode the URL properly
  const encodedUrl = encodeURIComponent(url);
  
  // Create archive.is URL
  const archiveUrl = `https://archive.is/?run=1&url=${encodedUrl}`;
  
  // Open archive.is in a new tab
  browser.tabs.create({ url: archiveUrl });
}