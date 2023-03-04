import { stringsAndNotes } from "./notes";

// Function to decide and return the string the note will be added to
export const findString = (note) => {
  const properties = [];
  for (const string in stringsAndNotes) {
    if (stringsAndNotes[string].includes(note)) {
      properties.push(string);
    }
  }

  return properties[0];
};
