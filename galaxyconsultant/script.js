document.addEventListener("DOMContentLoaded", function () {
  // Initialize Leaflet map
  const map = L.map('map').setView([51.505, -0.09], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  L.marker([51.505, -0.09]).addTo(map)
    .bindPopup('Galaxy Consultant Office')
    .openPopup();

  // Live Chat Button
  const liveChatBtn = document.querySelector(".live-chat-btn");
  const liveChatBox = document.getElementById("live-chat-box");
  const liveChatForm = document.getElementById("liveChatForm");
  const chatResponse = document.getElementById("chat-response");

  liveChatBtn.addEventListener("click", () => {
    liveChatBox.classList.toggle("visible"); // Toggle visibility of live chat box
    liveChatForm.classList.remove("hidden"); // Show form
    chatResponse.classList.add("hidden"); // Hide chat response
  });

  liveChatForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission
    liveChatForm.classList.add("hidden"); // Hide the form
    chatResponse.classList.remove("hidden"); // Show the response message
    chatResponse.innerHTML = `
      <p>Hi, Welcome to Galaxy Consultant!</p>
      <p>Please share your WhatsApp number, so we can contact you ASAP.</p>
    `;
  });

  // WhatsApp Button
  const whatsappBtn = document.querySelector(".whatsapp-btn");
  whatsappBtn.addEventListener("click", () => {
    window.open("https://wa.me/1234567890", "_blank");
  });
});
