function copyToClipboard(element) {
    const text = element.innerText;
    navigator.clipboard.writeText(text)
      .then(() => {
        alert("Copied to clipboard: " + text);
      })
      .catch(err => {
        alert("Failed to copy: " + err);
      });
  }