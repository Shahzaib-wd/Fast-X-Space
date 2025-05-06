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
  