const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () =>{
    navLinks.classList.toggle('active');
}

app.get('/Projects', (req, res) => {
    res.send('Your response here');
});


function sendMail() {
    // Get the message from the input field
    const message = document.getElementById('messageInput').value;
  
    // Open mailto link with the message
    const mailtoLink = `mailto:anshul.15.vish@gmail.com?subject=Contact%20Form&body=${encodeURIComponent(message)}`;
  
    // Open the mail client with the pre-filled message
    window.location.href = mailtoLink;
  }
  