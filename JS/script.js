window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

const navLinks = document.querySelectorAll(".link");

        // Add click event listener to each link
        navLinks.forEach(link => {
            link.addEventListener("click", function() {
                // Remove 'active' class from all links
                navLinks.forEach(item => item.classList.remove("clicked"));
                
                // Add 'active' class to clicked link
                this.classList.add("clicked");
            });
        });

document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.getElementById("burger-menu");
  const burgerIcon = document.getElementById("burger-icon");
  const mobileNav = document.querySelector(".mobile-nav");

  let isMenuOpen = false;

  burgerMenu.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;
    
    // Toggle menu visibility
    mobileNav.classList.toggle("show");

    // Swap burger menu icon
    if (isMenuOpen) {
      burgerIcon.src = "../ASSET/icon-close.svg"; // Change to "X" icon when open
    } else {
      burgerIcon.src = "../ASSET/icon-hamburger.svg"; // Change back to burger icon
    }
  });

  // Close menu when a link is clicked
  document.querySelectorAll(".mobile-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("show");
      burgerIcon.src = "../ASSET/icon-hamburger.svg"; // Reset to burger icon
      isMenuOpen = false;
    });
  });
});
        