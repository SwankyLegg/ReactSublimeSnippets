var find = require('find');
var fs = require('fs');


var filename = process.cwd() + '/README.md';
var readmeHeader = `#React Snippets
Edited and changed from Joe Maddalone's [ReactSublimeSnippets](https://github.com/joemaddalone/ReactSublimeSnippets).

This README isn't accurate because I haven't updated the README files for each section. I made the ES6 snippets the default in all cases.

`;

// Make ./README.md
fs.writeFile(filename, readmeHeader);

// Concat other files
find.file(/\.md$/, __dirname + '/../snippets', function(files) {
  if (files.length) {
    files.forEach(function(file) {
      fs.readFile(file, function(err, data) {
        fs.appendFile(filename, '##' + data + '\n', function (err) {});
      });
    })
  }
});

