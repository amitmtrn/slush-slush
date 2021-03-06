var gulp = require('gulp'); // the gulp running the tasks with gulp
var inquirer = require('inquirer'); // ask the question
var template = require('gulp-template');
var install = require('gulp-install');

gulp.task('default', function(done) { // build the package

  // ask the questions
  inquirer.prompt([
    {type: 'input', name: 'name', message: 'What do you want to name your app?', default: getNameProposal()},
    {type: 'input', name: 'description', message: 'Write a short description about your app?', default: ''},
    {type: 'input', name: 'author', message: 'How is the author of this app?', default: ''}
  ],
  function(answers) { // get the answers
    gulp.src(__dirname + '/templates/app/**')
    .pipe(template(answers))
    .pipe(gulp.dest('./'))
    .pipe(install())
    .on('finish', function() {
      done();
    });
  });
});

function getNameProposal() {
  var path = require('path');
  try {
    return require(path.join(process.cwd(), 'package.json')).name;
  } catch (e) {
    return path.basename(process.cwd());
  }
}
