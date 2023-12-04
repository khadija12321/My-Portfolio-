// Get all the progress circles
const progressCircles = document.querySelectorAll('.progress-circle');

// Update the progress text and fill based on the data-progress attribute
progressCircles.forEach(circle => {
  const progress = parseInt(circle.dataset.progress);
  const progressText = circle.querySelector('.progress-text');
  const progressFill = circle.querySelector('.progress-fill');
  let currentProgress = 0;

  const incrementProgress = () => {
    if (currentProgress < progress) {
      currentProgress++;
      progressText.textContent = currentProgress + '%';
      progressFill.style.transform = `scale(${currentProgress / 100})`;
      requestAnimationFrame(incrementProgress);
    }
  };

  incrementProgress();
});
