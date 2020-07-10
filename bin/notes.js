var prompt = require('prompt');
const chalk = require("chalk");
const figlet = require('figlet');

const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '/usr/bin/paivakirja/database.sqlite'
});


class Notes extends Model {}
Notes.init({
  title: DataTypes.STRING,
  description: DataTypes.STRING,
}, { sequelize, modelName: 'notes' });


var insert_notes = function insert_notes(){
        
var prompt_attributes = [
    {   
        name: 'title',  
    },
    {
        name: 'description',
    }
  
];


prompt.start();
   prompt.get(prompt_attributes, function (err, result) {
    if (err) {
        console.log(err);
        return 1;
    }else {
        console.log('Command-line received data:');

        // Get user input from result object.
        var title = result.title;
        var overview = result.description;
             
           (async () => {
      await sequelize.sync();
      const note = await Notes.create({
        title: name,
        description: description,
      });
     
     })();

        
        
    }
    
});       
          
}


var get_notes = function get_notes(){


    (async () => {
      await sequelize.sync();
      const note = await Notes.findAll();
        for (let i = 0; i < note.length; i++)  {
        console.log('\t\t'+i+' Title '+chalk.bold.rgb(10, 100, 200)(note[i].dataValues.title));
        console.log('')
        console.log('\t\t\t\t\t\t\t createAt '+chalk.bold.rgb(10, 100, 200)(note[i].dataValues.createdAt.toLocaleDateString()));   
        console.log('')
        console.log(note[i].dataValues.description)
        console.log('')
        console.log('')
    }  
    })();
    
}

var query_bydate = function query_bydate(){
    console.log("currently not supported");
}

module.exports = {insert_notes, get_notes, query_bydate};
