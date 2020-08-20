//const chalk = require('chalk')
//const validator = require('validator')
const yargs = require('yargs')
const notes = require('./notes.js')
const { demandOption } = require('yargs')

//Customised yargs version
//yargs.version('1.1.1')
//console.log(yargs.argv)

//create add comand
yargs.command({
    command : 'add',
    describe : 'Adding a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption:true,
            type: 'string'
        },
        body:{
            describe: 'Note Body',
            demandOption: true,
            type:'string'
        }
    },
    handler : function(argv){
        notes.addNote(argv.title,argv.body)

    }
})

//create a remove command

yargs.command({
    command : 'remove',
    describe : 'Remove a note',
    builder:{
        title:{
            describe: 'Remove note with help of title',
            demandOption: true,
            type: 'string'
        }
    },
    handler : function(argv){
        notes.removeNote(argv.title)
    }
})

//create a list command
yargs.command({
    command : 'list',
    describe : 'List a note',
    handler : function(){
        console.log('Listing a node!')
    }
})

//create a read command
yargs.command({
    command : 'read',
    describe : 'read a note',
    handler : function(){
        console.log('reading a list!')
    }
})
yargs.parse()
//console.log(yargs.argv)



//console.log(process.argv)
//const getNotes = require('./notes.js')

//console.log(chalk.red.bold.inverse('Error'))
//console.log(process.argv)
// command = process.argv[2]
// if(command === 'add'){
//     console.log('Adding note..!')
// }else if(command === 'remove'){
//     console.log('Remove Note!')
// }


//console.log(process.argv[2])

//console.log(process.argv)


//const print = getNotes()
//console.log(getNotes())
//console.log(validator.isEmail('exzapl.com'))
//console.log(validator.isEmail('pulkit@gmail.com'))
//console.log(print)








// const fs = require('fs')
// //const name = require('./utils.js')
// const add = require('./utils.js')
// //fs.writeFileSync('note.txt','Welcome to the class')
// //fs.writeFileSync('note.txt','My name is Pulkit')
// //fs.appendFileSync('note.txt','I m 22 yrs old')
// //const name = 'Pulkit'
// const sum = add(4,-2)
// //console.log(name)
// console.log(sum)