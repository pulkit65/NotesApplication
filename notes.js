const fs = require('fs')
const getNotes = function(){
    return 'Your notes'
}
const addNote= function(title,body){
    const notes = loadNotes()
    const dupilcateNotes = notes.filter(function (notes){
        return notes.title === title
    })
    if(dupilcateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        savedNote(notes)
    }else{
        console.log('title is taken')
    }
}

const savedNote= function(notes){
    const notesJson = JSON.stringify(notes)
    
    fs.writeFileSync('notes.json',notesJson)
}
const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('note.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }catch(e){
        return []
    }
}
const removeNote = function(title){
    console.log('Title of node to be removed' + title)
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}