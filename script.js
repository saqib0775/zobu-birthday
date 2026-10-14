function toggleSong() {
    const song = document.getElementById("newBirthdaySong");

    if (!song) {
        alert("Audio element not found.");
        return;
    }

    if (song.paused) {
        song.volume = 0.7;
        song.play().catch(error => {
            alert("Browser blocked the audio. Click once on the page and try again.");
        });
    } else {
        song.pause();
    }
}
