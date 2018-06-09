console.log('Starting app');

// const fs = require('fs');
// const os = require('os');
const notes = require('./note.js');


// let ans = notes.add(9, -2);
// console.log(ans);

//const user = os.userinfo();
// fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);

/*
const _ = require('lodash');

console.log(_.isString(true));
console.log(_.isString('Kim'));

let filteredArray = _.uniq(['Kim', 1, 'Kim', 1, 'kim', 2 , 3, 3]);
console.log(filteredArray);*/
const yargs = require('yargs');

const argv = yargs.argv;
/*let command = process.argv[2];
console.log('Process: ',command);
console.log('Yargs: ', argv);*/
let command = argv._[0];

if (command === 'add') {
    const note = notes.addNote(argv.title, argv.body);
    if (note){
        console.log('Success!');
        console.log(`Title: ${note.title} is created!`);
    }
    else {
        console.log('Err: Title is already taken!');
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('not recognize')
}
