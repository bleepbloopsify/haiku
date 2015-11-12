//Challenge Make it Modular!!
// var mine = require('./mine.js')
// console.log( mine(process.argv[2], process.argv[3]) );
//
//


//Challenge Filtered ls
// var fs = require('fs');
// fs.readdir(process.argv[2], function (err, files){
//   if (err) throw err;
//   for (i = 0; i < files.length; i++){
//     if(files[i].split('.')[1] == process.argv[3]){
//         console.log(files[i]);
//     }
//   }
// });
//
//

  
//Challenge: My first async io!
// var fs = require('fs');
// var lines = 0;
// fs.readFile(process.argv[2], 'utf8', function ( err, data ){
//   if (err) throw err;
//   lines = data.split('\n').length - 1;
//   console.log(lines);
// });


// var lines = file.split('\n').length - 1;
// console.log(lines);



// //Challenge: Basic I/O
// var fs = require('fs')
//
// var filebuffer = fs.readFileSync(process.argv[2]).toString()
// console.log(filebuffer.split('\n').length - 1)



//Challenge : Baby Steps
// var n = 0;
// for (var i = 2; i < process.argv.length; i++){
//   n += Number(process.argv[i]);
// }
//
// console.log(n)
