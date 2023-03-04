(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const { addAllNotesToFretboard } = require("./utils/fretboard");

document.addEventListener("DOMContentLoaded", function () {
  let notes = addAllNotesToFretboard([0, 2, 3, 5, 7, 8, 10, 12]);

  const fretboardEl = document.getElementById("fretboard");

  notes.forEach((note) => {
    const stringEl = document.createElement("div");
    stringEl.classList.add("string");
    stringEl.textContent = note;
    fretboardEl.appendChild(stringEl);
  });
});

},{"./utils/fretboard":2}],2:[function(require,module,exports){
const { findString } = require("./strings");
const { stringsAndNotes } = require("./notes");

const printFretboard = (note) => {
  let beat = 1;
  let fretboardTemplate = ["e |", "B |", "G |", "D |", "A |", "E |"];
  const fretboard = addNoteToFretboard(note, fretboardTemplate, beat);
  for (let i = 0; i < fretboard.length; i++) {
    console.log(fretboard[i] + "\n");
  }
};

const addNoteToFretboard = (note, fretboard, beat) => {
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

const addAllNotesToFretboard = (notes) => {
  let fretboardTemplate = ["e |", "B |", "G |", "D |", "A |", "E |"];
  for (let i = 0, beat = 1; i < notes.length; i++) {
    fretboard = addNoteToFretboard(notes[i], fretboardTemplate, beat);

    // Create bar sections after every 4th note
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
addAllNotesToFretboard([0, 2, 3]);

// --NOTES FOR NEXT TIME:
// cap off bar
// code beat so its 3 if noteToAdd >=10

module.exports = {
  addNoteToFretboard,
  addAllNotesToFretboard,
  printFretboard,
};

},{"./notes":3,"./strings":4}],3:[function(require,module,exports){
const stringsAndNotes = {
  0: [
    24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
    43, 44, 45, 46, 47, 48,
  ],
  1: [
    19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
    38, 39, 40, 41, 42, 43,
  ],
  2: [
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
    34, 35, 36, 37, 38, 39,
  ],
  3: [
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
    29, 30, 31, 32, 33, 34,
  ],
  4: [
    5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29,
  ],
  5: [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24,
  ],
};

module.exports = {
  stringsAndNotes,
};

},{}],4:[function(require,module,exports){
const { stringsAndNotes } = require("./notes");

// Function to decide and return the string the note will be added to
const findString = (note) => {
  const properties = [];
  for (const string in stringsAndNotes) {
    if (stringsAndNotes[string].includes(note)) {
      properties.push(string);
    }
  }

  return properties[0];
};

module.exports = {
  findString,
};

},{"./notes":3}]},{},[1]);
