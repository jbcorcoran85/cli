#! /usr/bin/env node
const yargs = require("yargs");
const utils = require('./utils.js')
const chalk = require('chalk');  
const boxen = require('boxen');
const translate = require('@vitalets/google-translate-api');

const usage = "\nUsage: tran <lang_name> sentence to be translated";const options = yargs;const options = yargs  
      .usage(usage)  
      .option("l", {alias:"languages", describe: "List all supported languages.", type: "boolean", demandOption
: false })
      .option("n", {alias: "numbers", describe: "Another flag", type: "string", demandOption: false})                                                                                               
      .help(true)  
      .argv;

var sentence = utils.parseSentence(yargs.argv._);

if(yargs.argv._[0] == null){  
    utils.showHelp();  
    return;  
}

if(yargs.argv.l == true || yargs.argv.languages == true){  
      utils.showAll();  
      return;  
}

if(yargs.argv._[0])
var language = yargs.argv._[0].toLowerCase(); // stores the language.
//parsing the language specified to the ISO-639-1 code.                                                                                              
language = utils.parseLanguage(language);

const translate = require('[@vitalets/google-translate-api](http://twitter.com/vitalets/google-translate-api)');
if(sentence == ""){                                                                                          
    console.error("\nThe entered sentence is like John Cena, I can't see it!\n")  
    console.log("Enter tran --help to get started.\n")  
    return;
} translate(sentence, {to: language}).then(res => {console.log("\n" + boxen(chalk.green("\n" + res.text + "\n"
), {padding: 1, borderColor: 'green', dimBorder: true}) + "\n");}).catch(err => {                            
     console.error(err);  
 });


// console.log(yargs.argv);
// console.log(yargs.argv.l);
// console.log(yargs.argv.numbers);
// console.log("Hello World!");
