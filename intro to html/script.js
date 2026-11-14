// 1. Setup the "camera" to watch your screen
const camera = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    
    // 2. If the box enters the screen...
    if (entry.isIntersecting) {
      
      // 3. Add the 'active' class to make it visible!
      entry.target.classList.add('active'); 
    }
  });
});

// 4. Tell the camera to watch everything labeled "reveal"
document.querySelectorAll('.hero-section').forEach(box => {
  camera.observe(box);
});