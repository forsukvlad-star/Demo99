// function myTask(callback) {
//   console.log('Hello Vlad!');

//   callback();
//  }

// async function myTask2() {
//   console.log('Task2: Hello Vlad!');

//  }

// exports.myTask = myTask;
// exports.myTask2 = myTask2;

// exports.myTask3 = async function () {
    // console.log('Task3: Hello Vlad!');
// }

// exports.myTask4 = async() => {
    // console.log('Task4: Hello Vlad HPM!');
// }

const gulp = require('gulp');

exports.cloneFiles = async () => {
 return gulp.src('app/*.html') //копіювання всіх html файлів з папки app
 .pipe(gulp.dest('public')); //виведення в public
}