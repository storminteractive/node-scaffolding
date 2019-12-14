'use strict' 
var fs = require('fs');

/// Classes, modules
var Config = require('./config');

//if(fs.existsSync('settings.txt')) fs.unlinkSync('settings.txt');

try{ 
    var c = new Config("settings.txt")
} catch(e){
    console.log('Error reading settings %s',e);
    process.exit(-1);
}

c.setVal("myname","paul3");
c.unsetVal("friend");
c.save();

console.log('Current settings: ');
console.log(c.getAll());

//if (!c.load("setting.txt")) { console.log('Cannot read settings file, cannot proceed'); };

