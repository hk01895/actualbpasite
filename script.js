const carousel = document.querySelector(".carousel"); 
const arrowBtn = document.querySelectorAll(".wrapper i"); 
const firstCardWidth = carousel.querySelector(".card").offsetWidth; 

arrowBtn.forEach(btn => {
  btn.addEventListener("click", ()=>{
    carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth; 

  })
})

//https://www.youtube.com/watch?v=6QE8dXq9SOE


document.querySelectorAll('.merch-card').forEach(card => {
  card.addEventListener('click', function() {
    // Remove 'active' class from all cards
    document.querySelectorAll('.merch-card').forEach(c => c.classList.remove('active'));
    // Add 'active' class to the clicked card
    this.classList.add('active');
  });
});
