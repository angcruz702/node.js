var fs= require('fs');


fs.writeFile('mynewFile2.txt', 'Hello Content!', function(err){
    if (err) throw err;
    console.log('Saved!');
})