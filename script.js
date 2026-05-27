
document.addEventListener("DOMContentLoaded", function() {
    // Get modal elements
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modal-img");
    var modalDesc = document.getElementById("modal-desc");
    var closeBtn = document.getElementsByClassName("close")[0];

    // Get all clickable images
    var images = document.getElementsByClassName("clickable-img");

    for (var i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        modalDesc.innerHTML = this.getAttribute("data-desc");
    }
}

// Close modal when clicking X or outside
closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
});