const chalk = require ('chalk');
const yargs = require('yargs');
const notes = require('./notes');


//Create add command

yargs.command({
    command:'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe:'Your note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }

});

// Create remove command

yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
      title:{
          describe:'Note title',
          demandOption: true,
          type: 'string'
      }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }

});

// Create list command

yargs.command({
    command:'list',
    describe:'lists all notes',
    handler(){
        notes.listNotes()
    }

});

// Create read command

yargs.command({
    command:'read',
    describe:'Display single note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
});


yargs.version('1.2.0');
yargs.parse();