 // Cookie helpers
    function setCookie(name, value, days) {
      const d = new Date();
      d.setTime(d.getTime() + (days*24*60*60*1000));
      const expires = "expires="+ d.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    function getCookie(name) {
      const cname = name + "=";
      const decodedCookie = decodeURIComponent(document.cookie);
      const ca = decodedCookie.split(';');
      for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(cname) === 0) {
          return c.substring(cname.length, c.length);
        }
      }
      return "";
    }

// Track if popup has already been shown
let popupDisplayed = false;

// Show popup on scroll halfway
window.onscroll = function() {
  if (window.scrollY > window.innerHeight / 2) {
    // Show only if not already shown AND no cookie yet
    if (!popupDisplayed && getCookie("popupShown") !== "yes") {
      const popup = document.getElementById("popup");
      popup.style.display = "block";
      popup.classList.add("animate__animated", "animate__fadeInUp");

      // Prevent showing again on this page load
      popupDisplayed = true;

      // Remember for 1 day
      setCookie("popupShown", "yes", 1);

      // Auto-hide after 3 seconds
      setTimeout(() => {
        closePopup();
      }, 15000);
    }
  }
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
  popupDisplayed = true; // ✅ Make sure it won't trigger again
}


  document.getElementById('comingSoon').addEventListener('click', function (e) {
    e.preventDefault();
    alert('Coming Soon');
  });