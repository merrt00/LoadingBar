document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.querySelector(".loading-bar");
  const loadingTitle = document.querySelector(".loading-title");
  const completionIcon = document.querySelector(".completion-icon");
  const completionMessage = document.querySelector(".completion-message");

  setTimeout(() => {
    progressBar.style.opacity = "0"; 
    loadingTitle.style.opacity = "0"; 
    setTimeout(() => {
      progressBar.style.display = "none"; 
      loadingTitle.style.display = "none";
      completionIcon.style.opacity = "1"; 
      completionIcon.style.visibility = "visible";
      completionIcon.style.transform = "scale(1)";
      completionMessage.classList.remove("hidden"); 
    }, 500); 
  }, 3000); 
});
