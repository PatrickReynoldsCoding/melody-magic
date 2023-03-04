const {
  addNoteToFretboard,
  addAllNotesToFretboard,
} = require("../utils/fretboard");

describe("the addFretToString function adds a note and returns a fretboard", () => {
  beforeEach(() => {
    // Reset the fretboard array before each test
    fretboard = ["e |", "B |", "G |", "D |", "A |", "E |"];
    beat = 1;
  });
  it("takes the note 0", () => {
    const result = addNoteToFretboard(0, fretboard, beat);
    expect(result).toEqual([
      "e |--",
      "B |--",
      "G |--",
      "D |--",
      "A |--",
      "E |-0",
    ]);
  });

  it("takes the note 4", () => {
    const result = addNoteToFretboard(4, fretboard, beat);
    expect(result).toEqual([
      "e |--",
      "B |--",
      "G |--",
      "D |--",
      "A |--",
      "E |-4",
    ]);
  });
  it("takes the note 5", () => {
    const result = addNoteToFretboard(5, fretboard, beat);
    expect(result).toEqual([
      "e |--",
      "B |--",
      "G |--",
      "D |--",
      "A |-0",
      "E |--",
    ]);
  });
  it("takes the note 6", () => {
    const result = addNoteToFretboard(6, fretboard, beat);
    expect(result).toEqual([
      "e |--",
      "B |--",
      "G |--",
      "D |--",
      "A |-1",
      "E |--",
    ]);
  });
  it("takes the note 10", () => {
    const result = addNoteToFretboard(10, fretboard, beat);
    expect(result).toEqual([
      "e |--",
      "B |--",
      "G |--",
      "D |-0",
      "A |--",
      "E |--",
    ]);
  });
  it("takes the note 15", () => {
    const result = addNoteToFretboard(15, fretboard, beat);
    expect(result).toEqual([
      "e |--",
      "B |--",
      "G |-0",
      "D |--",
      "A |--",
      "E |--",
    ]);
  });
  it("takes the note 19", () => {
    const result = addNoteToFretboard(19, fretboard, beat);
    expect(result).toEqual([
      "e |--",
      "B |-0",
      "G |--",
      "D |--",
      "A |--",
      "E |--",
    ]);
  });
  it("takes the note 34", () => {
    const result = addNoteToFretboard(34, fretboard, beat);
    expect(result).toEqual([
      "e |-10",
      "B |---",
      "G |---",
      "D |---",
      "A |---",
      "E |---",
    ]);
  });
});

describe("the addAllNotesToFretboard function adds all notes and returns a fretboard", () => {
  it("takes the notes [0,2,3]", () => {
    const result = addAllNotesToFretboard([0, 2, 3]);
    expect(result).toEqual([
      "e |-------|",
      "B |-------|",
      "G |-------|",
      "D |-------|",
      "A |-------|",
      "E |-0-2-3-|",
    ]);
  });
  it("takes the notes [0,2,3,5,7,8,10,12]", () => {
    const result = addAllNotesToFretboard([0, 2, 3, 5, 7, 8, 10, 12]);
    expect(result).toEqual([
      "e |-----------------|",
      "B |-----------------|",
      "G |-----------------|",
      "D |-------------0-2-|",
      "A |-------0-2-3-----|",
      "E |-0-2-3-----------|",
    ]);
  });
  it("takes the notes [0,2,3,5,7,8,10,12, '-']", () => {
    const result = addAllNotesToFretboard([0, 2, 3, 5, 7, 8, 10, 12, "-"]);
    expect(result).toEqual([
      "e |-------------------|",
      "B |-------------------|",
      "G |-------------------|",
      "D |-------------0-2---|",
      "A |-------0-2-3-------|",
      "E |-0-2-3-------------|",
    ]);
  });
});
