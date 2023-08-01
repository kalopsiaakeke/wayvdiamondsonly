// Get a reference to the video element
const video = document.getElementById('myVideo');

// Function to play or pause the video
function togglePlayPause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Function to handle the play/pause button click
function playPauseHandler() {
  const playPauseButton = document.querySelector('.play-pause-button');
  playPauseButton.addEventListener('click', togglePlayPause);
}

// Function to update the progress bar
function updateProgressBar() {
  const progressBar = document.querySelector('.progress-bar');
  const progress = (video.currentTime / video.duration) * 100;
  progressBar.style.width = progress + '%';
}

// Function to handle video seeking on progress bar click
function seekVideo(event) {
  const progressBar = document.querySelector('.progress-bar');
  const progressBarRect = progressBar.getBoundingClientRect();
  const clickX = event.clientX - progressBarRect.left;
  const percentage = (clickX / progressBarRect.width) * 100;
  const newTime = (percentage * video.duration) / 100;
  video.currentTime = newTime;
}

// Function to handle progress bar click events
function progressBarHandler() {
  const progressBar = document.querySelector('.progress-bar');
  progressBar.addEventListener('click', seekVideo);
}

// Function to handle video end
function videoEndHandler() {
  video.currentTime = 0;
  video.pause();
}

// Attach event listeners
document.addEventListener('DOMContentLoaded', () => {
  playPauseHandler();
  progressBarHandler();
  video.addEventListener('timeupdate', updateProgressBar);
  video.addEventListener('ended', videoEndHandler);
});