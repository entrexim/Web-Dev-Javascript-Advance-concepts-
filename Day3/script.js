const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); 
    const page = link.getAttribute('href').slice(1) + '.html'; 
    
    window.location.assign(page);
    
  });
});

