/* Simple gyroscope-based orientation for model-viewer */
window.addEventListener('deviceorientation', (event) => {
  const modelViewer = document.querySelector('model-viewer');
  if (!modelViewer) return;
  const { beta, gamma } = event;
  modelViewer.setAttribute('camera-orbit', `${gamma}deg ${beta}deg auto`);
});
