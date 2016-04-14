const gulp     = require('gulp'); // the gulp running the tasks with gulp
const inquirer = require('inquirer'); // ask the question
const template = require('gulp-template'); // get templates
const install  = require('gulp-install'); // install packages

const defaultSettings = require('./questions.json');

gulp.task('default', (done) => {
  // ask the questions
  inquirer.prompt(defaultSettings,
  (answers) => {
    gulp.src(__dirname + '/template/**')
    .pipe(template(answers))
    .pipe(gulp.dest('./'))
    .pipe(install())
    .on('finish', () => {
      done();
    });
  });
});
