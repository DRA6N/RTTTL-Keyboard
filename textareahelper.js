//Function to be called after each note has been played to update the textarea.

var playedNotes = [];
var noteObj = {
    note: "note",
    octave: "octave",
    duration: "duration"
};

function updateTextarea() {

    var textarea = document.getElementById("textoutput");
    textarea.value = "";

    playedNotes.forEach(nte => {
        textarea.value = textarea.value + nte.note + nte.octave + " " + nte.duration + " ";
    });

}

function playAndSave(note, octave) {

    playedNotes.push(
    noteObj = {
        note: note,
        octave: octave,
        duration: 4
    });

    updateTextarea();
}

function removeNote() {

    playedNotes.pop();
    updateTextarea();

}

function clearPlayedNotes() {
    playedNotes = [];
    updateTextarea();
}