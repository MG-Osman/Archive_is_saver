# 📦 Archive.is Saver

A lightweight Firefox browser extension to quickly save web pages to archive.is.
![image](https://github.com/user-attachments/assets/01401414-ed2d-455c-86d8-6f6e781f7615) ![image](https://github.com/user-attachments/assets/989a6937-b38b-4ab0-9392-71531fc8bd1e)



## Features

- **Quick Save** - Save current page with a single click
- **Custom URL** - Enter and save any URL to archive.is 
- **Context Menu** - Right-click on links or pages to archive
- **Lightweight** - Minimal impact on browser performance

## Installation

### Temporary Install
1. Download the files
2. Open Firefox and navigate to `about:debugging`
3. Click "This Firefox"
4. Click "Load Temporary Add-on"
5. Select the `manifest.json` file

### Permanent Install
1. Package the extension files into a .zip file
2. Rename the .zip to .xpi
3. In Firefox, go to `about:addons`
4. Click the gear icon and select "Install Add-on From File..."
5. Select your .xpi file

## Usage

**Toolbar Button**
- Click the extension icon to open the popup
- Archive the current page or enter a custom URL

**Context Menu**
- Right-click on any webpage or link
- Select "Archive this page/link with archive.is"

## Project Structure

```
archive-is-saver/
├── manifest.json     # Extension configuration
├── popup.html        # User interface
├── popup.js          # Interface functionality
├── background.js     # Background processes
└── icons/            # Extension icons
    └── icon48.svg    # Main extension icon
```

## About

This is a simple hobby project to make archiving web pages easier. The extension sends the URL to archive.is with the appropriate parameters and opens the archiving process in a new tab.
