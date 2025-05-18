window.addEventListener('load', () => {
  const hero = document.getElementById('hero');
  const video = document.getElementById('hero-video');

  hero.style.display = 'block';
  video.play();
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



