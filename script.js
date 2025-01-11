function disappearRandomly() {
    const cards = document.querySelectorAll('.card'); 
  
    function hideAndShowRandomCard() {
      const randomIndex = Math.floor(Math.random() * cards.length); 
      
      cards[randomIndex].style.visibility = 'hidden';
  
      setTimeout(() => {
        cards[randomIndex].style.visibility = 'visible';
        hideAndShowRandomCard(); 
      }, 1800);
    }
  
    hideAndShowRandomCard(); 
  }
  

  window.onload = disappearRandomly;
  