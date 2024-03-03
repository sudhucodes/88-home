// Updated JavaScript (home.js)

document.addEventListener("DOMContentLoaded", function () {
    const imageScroller = document.getElementById("imageScroller");
    const images = imageScroller.getElementsByTagName("img");
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].style.display = "none";
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.display = "block";
    }

    // Initial display
    images[currentIndex].style.display = "block";

    // Auto change image every 3 seconds
    setInterval(showNextImage, 3000);
});




document.addEventListener('DOMContentLoaded', function() {
    // Get the elements
    var accountBtn = document.querySelector('.accountbtndiv');

    // Add click event listener to the div with class "accountbtndiv"
    accountBtn.addEventListener('click', function(event) {
        // Prevent the default behavior of the anchor tag
        event.preventDefault();
        
        // Redirect to the specified link
        window.location.href = 'https://sudhucodes.github.io/profile/';
    });
});
