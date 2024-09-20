const youtubeVideoLink = "https://www.youtube.com/embed/6Q5xqNkCk7w"; // Correct video ID

function checkPassword() {
    const passwordInput = document.getElementById("passwordInput").value;
    if (passwordInput === "bali") {
        document.getElementById("passwordContainer").style.display = "none";
        document.getElementById("mainContainer").style.display = "block";
    } else {
        document.getElementById("errorMessage").innerText = "Incorrect Password";
    }
}

function showMessage() {
    document.getElementById("messageModal").style.display = "block";
}

function closeMessageModal() {
    document.getElementById("messageModal").style.display = "none";
}

function showSong() {
    document.getElementById("songModal").style.display = "block";
}

function closeSongModal() {
    document.getElementById("songModal").style.display = "none";
}

function showGift() {
    closeGiftModal(); // Ensure any existing modals are closed
    showFlowerGif(); // Show the GIF modal
}

function closeGiftModal() {
    document.getElementById("giftModal").style.display = "none";
}

function showFlowerGif() {
    const flowerModal = document.createElement('div');
    flowerModal.style.display = 'block';
    flowerModal.style.position = 'fixed';
    flowerModal.style.zIndex = '2';
    flowerModal.style.left = '0';
    flowerModal.style.top = '0';
    flowerModal.style.width = '100%';
    flowerModal.style.height = '100%';
    flowerModal.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    flowerModal.style.textAlign = 'center';
    flowerModal.innerHTML = 
        `<span class="close" onclick="closeFlowerGif()">&times;</span>
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHh2Z2t2anRmeW51MGQ1OWJydW16ZGthdXVyNXg5Z2RldzIwM3FobiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iB6I46FbLRqsLliGpI/giphy.gif" style="max-width: 80%; margin-top: 100px;" />`;
    document.body.appendChild(flowerModal);
}

function closeFlowerGif() {
    const flowerModal = document.querySelector('div[style*="fixed"]');
    if (flowerModal) {
        document.body.removeChild(flowerModal);
    }
}

function goBack() {
    document.getElementById("mainContainer").style.display = "none";
    document.getElementById("passwordContainer").style.display = "block";
}

function hideButtonTemporarily(buttonId) {
    const button = document.getElementById(buttonId);
    button.style.display = 'none'; // Hide the button temporarily
}
