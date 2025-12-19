// Function to open the modal
function openModal() {
    document.getElementById("myModal").style.display = "flex";
}

// Function to close the modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
        closeModal();
    }
}

// Function to open the off-canvas menu
function openOffCanvas() {
    document.getElementById("offCanvasMenu").style.width = "250px";

    // Add an event listener to close the menu if clicking outside
    document.addEventListener("click", handleOutsideClick);
}

// Function to close the off-canvas menu
function closeOffCanvas() {
    document.getElementById("offCanvasMenu").style.width = "0";
    
    // Remove the outside click listener to avoid unnecessary checks
    document.removeEventListener("click", handleOutsideClick);
}

// Function to handle clicks outside the off-canvas menu
function handleOutsideClick(event) {
    const offCanvasMenu = document.getElementById("offCanvasMenu");
    const cornerButton = document.querySelector(".corner-button");

    // Check if the click was outside the menu and not on the button
    if (!offCanvasMenu.contains(event.target) && !cornerButton.contains(event.target)) {
        closeOffCanvas();
    }
}

// Function to open the discount modal
function openDiscountModal() {
    document.getElementById("discountModal").style.display = "flex";
}

// Function to close the discount modal
function closeDiscountModal() {
    document.getElementById("discountModal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("topLeftButton");
    const homeSection = document.getElementById("homeSection");

    // Hide the button if "homeSection" is found on the page
    if (homeSection) {
        button.style.display = "none";
    }
});


// Function to open the off-canvas menu and scroll to "Contact Us"
function openContactSection() {
    // Open the off-canvas menu
    document.getElementById("offCanvasMenu").style.width = "250px";

    // Scroll to the "Contact Us" link in the off-canvas menu after a short delay
    setTimeout(() => {
        document.getElementById("contactLink").scrollIntoView({ behavior: "smooth" });
    }, 300);
}

function goHome() {
    window.location.href = "/The-Edge-v1-6-Template"; // Redirects to the home page
  }
  
  // Display the button only if not on the home page
  document.addEventListener("DOMContentLoaded", () => {
    const homeButton = document.getElementById("homeButton");
    
    // Check if the current page is the home page
    if (window.location.pathname !== '/') {
      homeButton.style.display = "block"; // Show the button on non-home pages
    }
    
  
  });
  