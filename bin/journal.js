var prompt = require('prompt');

const prompt1 = require('prompt-sync')();

const chalk = require("chalk");
const figlet = require('figlet');

const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '/usr/bin/paivakirja/database.sqlite'
});



class Journal extends Model {}
Journal.init({
  title: DataTypes.STRING,
  overview: DataTypes.STRING,
  timespent: DataTypes.STRING,
  feeling: DataTypes.STRING,
  pitfalls: DataTypes.STRING,
  windfall: DataTypes.STRING,
  tasks: DataTypes.STRING
}, { sequelize, modelName: 'journals' });




var add_journal=function add_journal(){
        
        
var prompt_attributes = [
    {   
        name: 'title',  
    },
    {
        name: 'overview',
    },
    {
        name: 'timespent',
        
    },
    {
        name: 'feeling',
    
    },
    {
        name: 'pitfalls',
    
    },
    {
        name: 'windfall',
    
    },
    {
        name: 'tasks',
    
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
        var overview = result.overview;
        var timespent = result.timespent;
        var feeling = result.feeling;
        var pitfalls = result.pitfalls;
        var windfall = result.windfall;
        var tasks = result.tasks;        
     (async () => {
      await sequelize.sync();
      const journal = Journal.create({
        title: title,
        overview: overview,
        timespent: timespent,
        feeling: feeling,
        pitfalls: pitfalls,
        windfall: windfall,
        tasks: tasks       
      });
      })();

        
        
    }
    
});       
          
}

var get_journal = function get_journal(){


      (async () => {
      await sequelize.sync();
      const journal = await Journal.findAll();
      
        for (let i = 0; i < journal.length; i++)  {
        console.log(chalk.bold.rgb(10, 100, 200)(journal[i].dataValues.title));
        console.log(chalk.bold.rgb(10, 50, 100)(journal[i].dataValues.overview));
        console.log(chalk.bold.rgb(10, 50, 100)(journal[i].dataValues.createdAt.toLocaleDateString()));   
        console.log(chalk.bold.rgb(10, 50, 100)(journal[i].dataValues.timespent));
        console.log(chalk.bold.rgb(10, 50, 100)(journal[i].dataValues.feeling));
        console.log(chalk.bold.rgb(10, 50, 100)(journal[i].dataValues.pitfalls));
        console.log(chalk.bold.rgb(10, 50, 100)(journal[i].dataValues.windfall));
        console.log(chalk.bold.rgb(10, 50, 100)(journal[i].dataValues.tasks));
    }  
    })();
    
}

var query_bydate = function query_bydate(){
    console.log("currently not supported");
}

module.exports  = {add_journal, get_journal, query_bydate};
