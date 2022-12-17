function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function doPlayback(start) {

    if (playedNotes.length > start) {

        AudioSynth.prototype.play("piano", playedNotes[start].note, playedNotes[start].octave, playedNotes.duration)

        sleep(playedNotes[start].duration * 100).then(() => {
            doPlayback(start + 1)
        });
    }

}