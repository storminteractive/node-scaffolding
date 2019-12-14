'use strict'
var fs = require('fs');

class Config{

    constructor(settingsFile){
        this.settings = {};
        this.settingsFile = settingsFile;
        if (fs.existsSync(this.settingsFile)){
            console.log('File %s exists, reading settings',this.settingsFile)
            this.load(this.settingsFile);
        } else {
            this.settings = {};
            console.log('Empty settings file %s, creating',settingsFile);
            this.save(this.settingsFile);
        }
    }

    setVal(name, val){ this.settings[name] = val; return true; }
    unsetVal(name){ delete this.settings[name]; }
    getVal(name){ return this.settings[name]; }
    getAll(){ return this.settings; }

    save(){
        fs.writeFileSync(this.settingsFile,JSON.stringify(this.settings,null,2),function(err){
            if(err){ console.log('Couldnt save settings file'); return false; };
            console.log('Config saved')
        });
    }

    load(){
        let fileContents = fs.readFileSync(this.settingsFile);
        console.log('File %s reads successfully, data: %s',this.settingsFile,fileContents);
        this.settings = JSON.parse(fileContents);
    }
}

module.exports = Config;
