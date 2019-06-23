/**
 * Created by Grucha on 20/06/2019.
 */
const fs = require('fs');
const chalk = require('chalk');

//Main functions

const addNote =(title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find(note=>note.title===title);

    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });

        saveNotes(notes);

        console.log(chalk.bgGreen.yellow('New note added!'))
    }else console.log(chalk.bgRed('Note title taken!'));

};

const removeNote = (title) => {
    const notes = loadNotes();

    const notesAfterRemoval = notes.filter((note)=>note.title !== title);

    saveNotes(notesAfterRemoval);

    if (notesAfterRemoval.length ===notes.length) console.log(chalk.bgRed('Note not found!'));
    else console.log(chalk.bgGreen.yellow('Note removed!'))
};


const listNotes = ()=>{
    console.log(chalk.bold.green.inverse('Here are your notes list:'));
    const notes = loadNotes();
    notes.forEach(note=> console.log(note.title));
};

const readNote = (title) =>{
    const notes = loadNotes();
    const foundNote = notes.find(note=>note.title===title);

    if(foundNote) console.log(chalk.bold(foundNote.title)+"\n"+foundNote.body);
    else console.log(chalk.red.inverse('Note not found!'));
};

// Helper functions

const saveNotes =(notes)=>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};


const loadNotes =() => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e){
        return [];
    }
};

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};