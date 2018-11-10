#! /usr/bin/env node

const inquirer = require('inquirer');

const questions = [{
  type: 'input',
  name: 'name',
  message: '库名：',
}, {
  type: 'input',
  name: 'version',
  message: '版本号：',
}, {
  type: 'input',
  name: 'description',
  message: '库的描述：',
}, {
  type: 'input',
  name: 'repository',
  message: '库的地址：',
}, {
  type: 'input',
  name: 'keywords',
  message: 'keywords (字符串，以,隔开)'
}, {
  type: 'input',
  name: 'author',
  message: '库的作者'
}, {
  type: 'input',
  name: 'bugs',
  message: '库的bug提交地址'
}, {
  type: 'input',
  name: 'files',
  message: 'files (字符串，以,隔开)'
}, {
  type: 'input',
  name: 'homepage',
  message: '库的主页地址'
}];

inquirer.prompt(questions).then((result) => {
  console.log(result);
});
