function openDoc(type) {
  switch (type) {
    case 'phase':
      alert('Open Phase Document');
      break;
    case 'ppt':
      alert('Open PPT');
      break;
    case 'final':
      alert('Open Final Document');
      break;
    case 'team':
      alert('Open Team Info');
      break;
    default:
      alert('Invalid Option');
  }
}
function openFile(filePath, errorMsg) {
  fetch(filePath, { method: 'HEAD' })
    .then(response => {
      if (response.ok) {
        window.location.href = filePath;
      } else {
        alert(errorMsg);
      }
    })
    .catch(() => {
      alert(errorMsg);
    });
}