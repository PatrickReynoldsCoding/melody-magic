const { printFretboard } = require("./utils/fretboard");
const { melodies } = require("./data/melodies");

printFretboard(melodies[melodies.length - 1]);
