window.addEventListener("scroll", function () {
    const stickyDiv = document.getElementById("sticky-div");

    if (window.scrollY > 100) {
      stickyDiv.classList.remove("before:opacity-0");
      stickyDiv.classList.add("before:opacity-100", "before:border-0");
    } else {
      stickyDiv.classList.remove("before:opacity-100", "before:border-0");
      stickyDiv.classList.add("before:opacity-0");
    }
  });
  const displayElement1 = document.querySelector(".display");
  const dialogElement1 = document.querySelector(".dialog");

  let isHovered1 = false; 

  // Function to show dialog
  function showDialog1() {
    isHovered1 = true;
    dialogElement1.style.opacity = "1";
    dialogElement1.style.visibility = "visible";
  }

  // Function to hide dialog
  function hideDialog1() {
    isHovered1 = false;
    setTimeout(() => {
      if (!isHovered1) {
        // Only hide if still not hovered
        dialogElement1.style.opacity = "0";
        dialogElement1.style.visibility = "hidden";
      }
    }, 100); 
  }

  // When mouse enters display, show dialog
  displayElement1.addEventListener("mouseenter", showDialog1);

  // When mouse enters dialog, keep it open
  dialogElement1.addEventListener("mouseenter", () => {
    isHovered1 = true; 
  });

  // When mouse leaves both elements, hide dialog
  displayElement1.addEventListener("mouseleave", () => {
    isHovered1 = false;
    hideDialog1();
  });

  dialogElement1.addEventListener("mouseleave", () => {
    isHovered1 = false;
    hideDialog1();
  });

  const displayElement2 = document.querySelector(".display2");
  const dialogElement2 = document.querySelector(".dialog2");

  let isHovered2 = false; 

  // Function to show dialog
  function showDialog2() {
    isHovered2 = true;
    dialogElement2.style.opacity = "1";
    dialogElement2.style.visibility = "visible";
  }

  // Function to hide dialog
  function hideDialog2() {
    isHovered2 = false;
    setTimeout(() => {
      if (!isHovered2) {
        // Only hide if still not hovered
        dialogElement2.style.opacity = "0";
        dialogElement2.style.visibility = "hidden";
      }
    }, 100); 
  }

  // When mouse enters display, show dialog
  displayElement2.addEventListener("mouseenter", showDialog2);

  // When mouse enters dialog, keep it open
  dialogElement2.addEventListener("mouseenter", () => {
    isHovered2 = true; 
  });

  // When mouse leaves both elements, hide dialog
  displayElement2.addEventListener("mouseleave", () => {
    isHovered2 = false;
    hideDialog2();
  });

  dialogElement2.addEventListener("mouseleave", () => {
    isHovered2 = false;
    hideDialog2();
  });

  
  const displayElement3 = document.querySelector(".display3");
  const dialogElement3 = document.querySelector(".dialog3");

  let isHovered3 = false; 

  // Function to show dialog
  function showDialog3() {
    isHovered3 = true;
    dialogElement3.style.opacity = "1";
    dialogElement3.style.visibility = "visible";
  }

  // Function to hide dialog
  function hideDialog3() {
    isHovered3 = false;
    setTimeout(() => {
      if (!isHovered3) {
        // Only hide if still not hovered
        dialogElement3.style.opacity = "0";
        dialogElement3.style.visibility = "hidden";
      }
    }, 100); 
  }

  // When mouse enters display, show dialog
  displayElement3.addEventListener("mouseenter", showDialog3);

  // When mouse enters dialog, keep it open
  dialogElement3.addEventListener("mouseenter", () => {
    isHovered3 = true; 
  });

  // When mouse leaves both elements, hide dialog
  displayElement3.addEventListener("mouseleave", () => {
    isHovered3 = false;
    hideDialog3();
  });

  dialogElement3.addEventListener("mouseleave", () => {
    isHovered3 = false;
    hideDialog3();
  });

  document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".absolute.grid.h-full");
    let currentIndex = 0;
  
    function updateSlides() {
      slides.forEach((slide, index) => {
        slide.classList.remove("z-20", "opacity-100", "translate-x-0", "scale-100");
        slide.classList.remove("z-10", "opacity-60", "translate-x-[100%]", "-translate-x-[100%]");
        slide.classList.remove("z-0", "opacity-0");
  
        if (index === currentIndex) {
          slide.classList.add("z-20", "opacity-100", "translate-x-0", "scale-100");
        } else if (index === (currentIndex + 1) % slides.length) {
          slide.classList.add("z-10", "opacity-60", "translate-x-[100%]");
        } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
          slide.classList.add("z-10", "opacity-60", "-translate-x-[100%]");
        } else {
          slide.classList.add("z-0", "opacity-0");
        }
      });
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlides();
    }
  
    updateSlides();
    setInterval(nextSlide, 5000);
  });
  

// Select the button, the 'ham' div, the 'visible' element, and the hamburger icon div
const hamburgerButton = document.querySelector('.harmburger');
const ham = document.querySelector('.ham');
const visible = document.querySelector('.visible');
const hamburgerIconDiv = document.querySelector('.harmburger div');

// Add an event listener to the button
hamburgerButton.addEventListener('click', () => {
  // Toggle the 'ham' div visibility
  if (ham.style.display === 'block') {
    ham.style.display = 'none';
    ham.style.opacity = '0';
    ham.style.height = '0px';
  } else {
    ham.style.display = 'block';
    ham.style.opacity = '1';
    ham.style.height = '100vh'; // Or any height you prefer
  }

  // Change the opacity of the 'visible' element
  if (visible.style.opacity === '1') {
    visible.style.opacity = '0'; // Hide it if it's already visible
    visible.style.height = '100%'; // Reset the height if needed
  } else {
    visible.style.opacity = '1'; // Set it to visible
    visible.style.height = '100%'; // Adjust the height to whatever you need
  }

  // Toggle the hamburger icon between the two states (hamburger or "X")
  if (hamburgerIconDiv.innerHTML.includes('rotate-45')) {
    // Change to the original hamburger state
    hamburgerIconDiv.innerHTML = `
      <span class="absolute left-0 top-0 h-[1.5px] w-4 transform transition-all duration-300 bg-black rotate-0"></span>
      <span class="absolute left-0 top-[7px] h-[1.5px] w-4 transition-all duration-300 bg-black opacity-100"></span>
      <span class="absolute left-0 top-[14px] h-[1.5px] w-4 transform transition-all duration-300 bg-black rotate-0"></span>
    `;
    ham.classList.add('pointer-events-none');


  } else {
    // Change to the "X" state (when clicked)
    hamburgerIconDiv.innerHTML = `
      <span class="absolute left-0 top-0 h-[1.5px] w-4 transform transition-all duration-300 bg-black top-[7px] rotate-45"></span>
      <span class="absolute left-0 top-[7px] h-[1.5px] w-4 transition-all duration-300 bg-black opacity-0"></span>
      <span class="absolute left-0 top-[14px] h-[1.5px] w-4 transform transition-all duration-300 bg-black top-[7px] -rotate-45"></span>
    `;
    ham.classList.remove('pointer-events-none');
  }
});



