import { findString } from "./strings";
import { stringsAndNotes } from "./notes";

export const printFretboard = (notes) => {
  if (notes.length > 32) {
    const bars = [];
    let i, j;
    for (i = 0, j = notes.length; i < j; i += 32) {
      bars.push(notes.slice(i, i + 32));
    }
    for (let bar of bars) {
      printFretboard(bar);
    }
  } else {
    let fretboard = addAllNotesToFretboard(notes);
    for (let i = 0; i < fretboard.length; i++) {
      return fretboard[i] + "\n";
    }
  }
};

export const addNoteToFretboard = (note, fretboard, beat) => {
  const stringIndex = findString(note);
  // Get the correct guitar string based off the note and return a split copy
  let currentString = fretboard[stringIndex];
  let splitString = currentString.split("");
  // Transcribe the note depending on the string
  let noteToAdd = note - stringsAndNotes[stringIndex][0];
  // Add note to our guitar string copy and convert back to string
  let position = beat + 2;
  splitString.splice(position, 0, `-${noteToAdd.toString()}`);
  currentString = splitString.join("");
  // Add "--" to the other 5 elements(strings) except for the modified string
  for (let i = 0; i < fretboard.length; i++) {
    if (i !== stringIndex) {
      let otherString = fretboard[i];
      let otherSplitString = otherString.split("");
      let space = noteToAdd >= 10 ? "---" : "--";
      otherSplitString.splice(position, 0, space);
      otherString = otherSplitString.join("");
      fretboard[i] = otherString;
    }
  }
  // Add new guitar string to our fretboard
  fretboard[stringIndex] = currentString;

  return fretboard;
};

export const addAllNotesToFretboard = (notes) => {
  let fretboardTemplate = ["e |", "B |", "G |", "D |", "A |", "E |"];
  let fretboard = [];
  for (let i = 0, beat = 1; i < notes.length; i++) {
    let note = notes[i];
    if (note === "-") {
      fretboard.forEach((string, index) => {
        fretboard[index] = string + "--";
      });
    } else {
      fretboard = addNoteToFretboard(note, fretboardTemplate, beat);
    }
    // if ((i + 1) % 8 === 0) {
    // }
    beat += 2;
  }
  // cap off the last section

  fretboard.forEach((string, index) => {
    fretboard[index] = string + "-|";
  });
  return fretboard;
};

printFretboard([
  0,
  0,
  2,
  4,
  0,
  2,
  4,
  7,
  7,
  7,
  6,
  4,
  2,
  0,
  "-",
  0,
  2,
  4,
  0,
  2,
  4,
  7,
  7,
  7,
  9,
  7,
  4,
  2,
]);

// --NOTES FOR NEXT TIME:
// cap off bar
// code beat so its 3 if noteToAdd >=10
