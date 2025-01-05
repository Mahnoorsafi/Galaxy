document.addEventListener("DOMContentLoaded", () => {
    const counters = [
      { id: "clients", target: 78 },
      { id: "projects", target: 100 },
      { id: "years", target: 20 },
    ];
  
    counters.forEach(counter => {
      const element = document.getElementById(counter.id);
      let count = 0;
  
      const interval = setInterval(() => {
        if (count < counter.target) {
          count++;
          element.textContent = `${count}+`;
        } else {
          clearInterval(interval);
        }
      }, 30); // Adjust speed
    });
  });
  // Function to toggle the visibility of the extra content
function toggleContent(section) {
  var content = document.getElementById(section);
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}
