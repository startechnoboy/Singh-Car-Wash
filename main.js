document.addEventListener("DOMContentLoaded", () => {
  // const menuBtn = document.getElementById("menu-btn");
  // const navLinks = document.getElementById("navLinks");
  // const menuBtnIcon = document.getElementById("nav__menu__icon");
  const menuBtn = document.querySelector(".nav__menu__btn");
  const menuBtnIcon = document.querySelector(".nav__menu__icon"); // Icon inside button
  const navLinks = document.getElementById("nav-links");

  if (menuBtn && navLinks && menuBtnIcon) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");

      const isOpen = navLinks.classList.contains("open");
      menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-3-line"
      );
    });
  } else {
    // console.error("One or more elements are missing from the DOM.");
    // console.log("menuBtn:", menuBtn);
    // console.log("menuBtnIcon:", menuBtnIcon);
    // console.log("navLinks:", navLinks);

  }
});


// Close Navbar on Link Click
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line"); // Reset to menu icon
  }
});

// ScrollReveal Animations (if using ScrollReveal.js)
if (typeof ScrollReveal !== "undefined") {
  const scrollRevealOptions = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  ScrollReveal().reveal(".section_container", scrollRevealOptions);
}


const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOptions,
});

ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOptions,
  delay: 500,
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOptions,
  interval: 500,
});

// price container
ScrollReveal().reveal(".price__card", {
  ...scrollRevealOptions,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});
function sendMessage(event) {
  event.preventDefault();

  // Collect form data
  const name = document.getElementById('userName').value;
  const address = document.getElementById('userAddress').value;
  const phone = document.getElementById('userPhone').value;
  const email = document.getElementById('userEmail').value;
  const message = document.getElementById('userMessage').value;

  // Prepare the EmailJS template parameters
  const templateParams = {
    user_name: name,
    user_address: address,
    user_phone: phone,
    user_email: email,
    user_message: message,
  };

  // Send email using EmailJS
  emailjs
    .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
    .then(
      (response) => {
        alert("Message sent successfully!");
        console.log("SUCCESS!", response.status, response.text);
        document.getElementById('contactForm').reset(); // Clear the form
      },
      (error) => {
        alert("Failed to send message. Please try again later.");
        console.error("FAILED...", error);
      }
    );
}
function sendMessage(event) {
  event.preventDefault(); // Prevent form submission

  // Show success notification
  const notification = document.getElementById("notification");
  notification.style.display = "block";
  notification.style.color = "green";
  notification.textContent = "Message sent successfully!";
  
  // Optionally, reset the form
  document.getElementById("contactForm").reset();

  // Hide the notification after 3 seconds
  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count");

  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target"); // Convert string to number
    const increment = target / 100; // Adjust speed by dividing target
    let current = 0;

    const updateCount = () => {
      current += increment;

      if (current < target) {
        counter.textContent = Math.ceil(current); // Round up for smoother count
        requestAnimationFrame(updateCount); // Smooth animation
      } else {
        counter.textContent = target; // Set final value
      }
    };

    updateCount(); // Start the count
  });
});



