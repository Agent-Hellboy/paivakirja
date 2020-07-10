#!/usr/bin/env node


/*
    diary
    ------>

    dev-journal
    ------>
    Title
    Date and time (started, ended or both)
    1 – 2 paragraph overview
        What was I doing?
        Where was I planning on going next?
        Wins or trouble areas in the work today?
    Duration spent working – Because you can get distracted!
    Mood – How was I feeling the whole way through?
    Pitfalls – Did anything slow me down or cause unexpected problems?
    Windfalls – What went exceptionally well? Did something get done faster or better than anticipated?
    Tasks – What needs to be finished? What is going to be started next?

  logbook
  ------->

  register/notes
  ------>
  Title
  Description
  Added On

*/

var journal = require("./journal.js");
var note = require("./notes.js");
const chalk = require("chalk");
const figlet = require('figlet');
const prompt1 = require('prompt-sync')();


function journals(){
    console.log(
      chalk.yellow(
        figlet.textSync('paivakirja', { horizontalLayout: 'full' })
      )
    );
        console.log("choose one of the option \n 1 getPrevious journals \n 2 Insert newJournal \n 3 Query JournalsbyDate");
        const option = prompt1();
        
        if(option==1){
            journal.get_journal();
        }
        if(option==2){
            journal.add_journal();
        }
        if(option==3){
            journal.query_bydate();
        }
       
}



function notes(){
    console.log(
      chalk.yellow(
        figlet.textSync('paivakirja', { horizontalLayout: 'full' })
      )
    );
        console.log("choose one of the option \n 1 getPrevious Notes \n 2 Insert newNotes \n 3 Query NotesbyDate");
        const option = prompt1();
        
        if(option==1){
            note.get_notes();
        }
        if(option==2){
            note.insert_notes();
        }
        if(option==3){
            note.query_bydate();
        }
       
}

const yargs = require("yargs");

const options = yargs
 .usage("Usage: -m <mode>")
 .option("m", { alias: "mode", describe: "It should be diary ,dev-journal,logbook, register/notes ", type: "string", demandOption: true })
 .argv;

if(options.mode=='notes'){
    notes();
    }

else{
    journals();
}



