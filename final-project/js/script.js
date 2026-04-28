console.log("Page loaded");

document.querySelectorAll(".start-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Started!");
  });
});