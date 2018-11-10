#! /usr/bin/env node

const program = require('commander');

program
  .command('create <project>')
  .action((project) => {
    console.log(project);
  });

program.parse(process.argv);
