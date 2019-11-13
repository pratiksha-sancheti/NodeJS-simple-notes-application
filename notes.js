const fs = require('fs')
const chalk = require('chalk')
const addNote = (title,body)=>{
    const notes = loadNotes()
   // const duplicateNotes = notes.filter((note)=>note.title === title)
    const duplicatenote = notes.find((note)=> note.title === title)
    if(!duplicatenote){
        notes.push({
            title: title,
            body: body
        })
       
        saveNotes(notes)
        console.log(notes)
    }else{
        console.log('Title alreday present')
    }
   
}
const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes = ()=>{
    try{
        const databuffer = fs.readFileSync('notes.json')
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
    
}

const removeNote = (title)=> {
    const notes = loadNotes()
    const NotesToKeep = notes.filter((note)=>note.title !== title)
    if(notes.length > NotesToKeep.length){
        console.log(chalk.bgBlue('Title removed'))
    }else{
        console.log(chalk.bgRed('Title not found!!')) 
    }
    saveNotes(NotesToKeep)
}
const listNote = ()=>{
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(note.title)
        
    });
}
const readNote = (title)=>{
    const notes = loadNotes()
    const present = notes.find((note)=>note.title === title)
    if(present)
    {
        console.log(chalk.italic(present.title))
        console.log(present.body)
    }else{
        console.log(chalk.bold.red('Title not Found'))
    }
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}
