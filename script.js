function changeSlide(element) {
    const img = element.querySelector('img').src;
    const title = element.getAttribute('data-title');
    const button = element.getAttribute('data-btn');
  
    document.getElementById('hero').style.backgroundImage = `url(${img})`;
    document.getElementById('heroTitle').innerText = title;
    document.getElementById('heroButton').innerText = button;
    document.getElementById('heroContent').style.display = "block";
  }