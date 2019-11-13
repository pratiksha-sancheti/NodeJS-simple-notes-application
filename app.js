const chalk = require('chalk')
const yargs = require('yargs')
const validator = require('validator')
const notes = require('./notes.js')

// Customize yargs version
//yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder :{
        title:{
            describe: 'Note title',
            type: 'string',
            demandOption : 'true'
        },
        body:{
            describe: 'Note body',
            type: 'string',
            demandOption: 'true'
        }
    },
    handler(argv) {
        //console.log('Adding a new note!')
        //console.log('Title: ' + argv.title)
        //console.log('Body:' + argv.body)
        notes.addNote(argv.title,argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe : 'Note title',
            type: 'string',
            demandOption: 'true'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        console.log('Listing out all notes')
        notes.listNote()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title:{
            describe : 'Note title',
            type: 'string',
            demandOption: 'true'
        }
    },
    handler(argv) {
        console.log('Reading a note')
        notes.readNote(argv.title)
    }
})

yargs.parse()

