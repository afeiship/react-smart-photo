const fs = require('fs');
const path = require('path');
const fileRegExp = require('file-regexp');
const exampleRE = /\/\*===example start===\*\/\n([a-zA-Z\[\].{\s()<="-<_>}?:+0-9\u4e00-\u9fa5`!、，。【】|]*)\/\*===example end===\*\//;
const templateRE = /\/\*===properties start===\*\/([()\[\]\w\s={}:.;,'"=>\u4E00-\u9FA5-，\/\/]*)\/\*===properties end===\*\//;

const targetPropsRE = /## properties:\n```javascript\n(.*)\n```/;
const targetUsageRE = /## usage:\n```jsx\n(.*)\n```/;

let readmeFile = path.join(__dirname,'../README.MD');
let _readmeFile = path.join(__dirname,'../_README.MD');
let exampleFile = path.join(__dirname,'../src/dev.js');
let templateFile = path.join(__dirname,'../src/components/react-smart-photo.js');



let exampleRs = fileRegExp.fileGetContent(exampleFile,exampleRE);
let templateRs = fileRegExp.fileGetContent(templateFile,templateRE);

// set default readme file:
fs.writeFileSync(readmeFile, fs.readFileSync(_readmeFile,'utf-8'));

//do replace:
fileRegExp.fileReplaceContent(readmeFile,targetPropsRE,templateRs);
fileRegExp.fileReplaceContent(readmeFile,targetUsageRE,exampleRs);
