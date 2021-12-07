const fs = require("fs");

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log("New note added!");
  } else {
    console.log("Note title taken");
  }
};

const removeNotes = function (title) {
    const n = loadNotes();
    const notesToKeep = n.filter(function (e) {
      return e.title !== title;
    })

    saveNotes(notesToKeep);
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("data.json", dataJSON);
};

const loadNotes = function () {
  try {
    const data_buffer = fs.readFileSync("data.json");
    const dataJSON = data_buffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = { addNote: addNote, removeNotes: removeNotes };
