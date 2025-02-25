// Create context menu items when extension is installed
browser.runtime.onInstalled.addListener(() => {
  createContextMenus();
});

// Firefox requires menu creation separately
function createContextMenus() {
  // Context menu for links
  browser.contextMenus.create({
    id: "archive-link",
    title: "Archive this link with archive.is",
    contexts: ["link"]
  });
  
  // Context menu for pages
  browser.contextMenus.create({
    id: "archive-page",
    title: "Archive this page with archive.is",
    contexts: ["page"]
  });
}

// Ensure menus are created - Firefox sometimes needs this
createContextMenus();

// Listen for context menu clicks
browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "archive-link" && info.linkUrl) {
    // Archive the clicked link
    archiveUrl(info.linkUrl);
  } else if (info.menuItemId === "archive-page") {
    // Archive the current page
    archiveUrl(tab.url);
  }
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

// Add listener for browser action (toolbar icon click)
browser.browserAction.onClicked.addListener((tab) => {
  // This will only trigger if no popup is defined
  archiveUrl(tab.url);
});