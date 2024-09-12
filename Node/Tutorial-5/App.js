const notes = require("./notes.js");
const yargs = require("yargs");

yargs.version("1.1.1");

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
      title: {
          describe: 'Note title',
          demandOption: true,
          type: 'string'
      },
      body: {
          describe: 'Note body',
          demandOption: true,
          type: 'string'
      }
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: 'remove',
  description: 'remove a note',
  builder: {
    title: {
      describe: 'Note a title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    notes.removeNotes(argv.title);
  }
})

yargs.parse();

