#! /usr/bin/env node

const Git = require("nodegit");
const templateGitUrl = 'https://github.com/stevenwujianpeng/js-min-template.git';

Git.Clone(templateGitUrl, 'template').then(function () {
  console.log('success');
});
