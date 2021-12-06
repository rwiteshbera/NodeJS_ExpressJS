const fs = require('fs');

const addNote = function(title, body) {
    const notes = loadNotes();
    
    notes.push ( {
        title: title,
        body: body
    })

    console.log(notes);
    saveNotes(notes);
}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('data.json', dataJSON);
}

const loadNotes = function() {
    try {
        const data_buffer = fs.readFileSync("data.json");
        const dataJSON = data_buffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

module.exports = {addNote: addNote };