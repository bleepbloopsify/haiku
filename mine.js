// var fs = require('fs')
// module.exports = function(filename, extension, callback){
//   fs.readdir(filename, function(err, files){
//     if (err) return callback(err, null);
//     list = []
//     for (i = 0; i < files.length; i++){
//       if (files[i].split('.')[1] == extension){
//         list.push(files[i]);
//       }
//     }
//     callback(null, list);
//   })
//
// }

//   var fs = require('fs');
//   fs.readdir(process.argv[2] , function (err, files){
//     if (err) throw err;
//     for (i = 0; i < files.length; i++){
//       if( files[i].split('.')[1] == process.argv[3] ){
//         callback( null, ( files[i] ) ) ;
//       }
//     }
//   });
// }
