const fs = require('fs').promises;
import Cosmetics from 'cosmetics.js';
var logFile;
var cosmetics;
async function createLogFile(){
    try{
        logFile = "./logs/"+Date.now.toString+".txt";
        await fs.writeFile(logFile,Date.now.toString+":Created New Logfile",'utf8');

    }catch (err){
        console.log(Date.now.toString+": Error creating log file: ",err);
    }
}

async function appendLogFile(logMessage){
    try{
        const logEntry = '${new Date().toISOString}: ' + logMessage + '\n';
        await fs.appendFile(logFile, logEntry, 'utf8');
    }catch (err){
        console.log('Error writing to log file: ',err);
    }
}

async function readCosmetics(fileToRead){
    this.cosmetics =  new Cosmetics();
    
}