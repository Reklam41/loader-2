document.addEventListener("DOMContentLoaded", () => {
  const outerElement = document.querySelector(".outer");
  outerElement.classList.add("active-loader");

  let progress = 0;
  const innerSpan = document.querySelector(".inner span");

  const interval = setInterval(() => {
    progress += 1;
    innerSpan.textContent = `${progress}%`;

    if (progress >= 100) {
      clearInterval(interval);
      outerElement.classList.remove("active-loader"); // Stops the animation after reaching 100%
    }
  }, 30); // Adjust speed as needed
});
