window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const hero = document.getElementById('hero');
  const video = document.getElementById('hero-video');

  // Wait for scanner animation to finish
  setTimeout(() => {
    preloader.style.display = 'none';
    hero.style.display = 'block';
    video.play();
  }, 3000); // scanner animation duration
});


function changeSlide(element) {
  const title = element.getAttribute('data-title');
  const btnText = element.getAttribute('data-btn');
  const bgImage = element.getAttribute('data-bg');
  const link = title.toLowerCase() + ".html";

  document.getElementById('heroTitle').textContent = title;
  const heroBtn = document.getElementById('heroButton');
  heroBtn.textContent = btnText;
  heroBtn.href = link;

  document.getElementById('hero').style.backgroundImage = `url(${bgImage})`;
}




  window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
      preloader.style.display = 'none';
      document.querySelector('.main-content').style.display = 'block';
    }, 1600); // Matches slideDown timing
  });
  



   // Show/hide button
   window.onscroll = function () {
    const btn = document.getElementById("backToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  // Scroll to top smoothly
  document.getElementById("backToTop").addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });



  // form submission

  const form = document.getElementById("myForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();

    if (email === "") {
      alert("Please enter your email.");
    } else {
      alert("Thank you, We got your email: " + email);
      emailInput.value = ""; 
    }
  });



const glow = document.getElementById("cursorGlow");
const img = document.getElementById("cursorImg");

let timeout;

document.addEventListener("mousemove", (e) => {
  glow.style.left = img.style.left = e.clientX + "px";
  glow.style.top = img.style.top = e.clientY + "px";

  glow.style.opacity = 1;

  clearTimeout(timeout);
  timeout = setTimeout(() => {
    glow.style.opacity = 0; // Hide glow if idle
  }, 1000);
});

document.addEventListener("mousedown", () => {
  glow.classList.add("cursor-click");
});

document.addEventListener("mouseup", () => {
  glow.classList.remove("cursor-click");
});
