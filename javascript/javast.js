
    let currentIndex = 0;
    const track = document.getElementById("carouselTrack");
    const cards = document.querySelectorAll(".card");
  
    function moveSlide(direction) {
      const totalCards = cards.length;
      currentIndex += direction;
  
      if (currentIndex < 0) {
        currentIndex = 0;
      } else if (currentIndex >= totalCards) {
        currentIndex = totalCards - 1;
      }
  
      const offset = -currentIndex * 100;
      track.style.transform = `translateX(${offset}%)`;
    }
  
  


  
    function flipCard(card) {
      card.classList.toggle('flipped');
    }
  