const links = document.querySelectorAll('.nav-link');




links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); 
    const page = link.getAttribute('href').slice(1) + '.html'; // getattribute kaam ki cheej hai
    window.location.assign(page); // Navigate
  });
});

function setActiveLink() {
  links.forEach(link => {
    link.classList.remove('active'); // Clear active
    const linkPage = link.getAttribute('href').slice(1) + '.html'; // e.g., #contact -> contact.html ()yaad rakhna ise
    if (window.location.pathname.split('/').pop() === linkPage) {
      link.classList.add('active'); // Set active
    }
  });
}

// Run on page load
setActiveLink();