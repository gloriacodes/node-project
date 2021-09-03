const fs = require('fs');

// reading files
/*fs.readFile('./docs/blog1.txt', (err,data) => {
    if (err){
        console.log(err);
    }
    console.log(data.toString());
});

console.log('last line');*/

// writing files
/*fs.writeFile('./docs/blog1.txt','hello cuties,',() =>{
    console.log('file was changed');
});
fs.writeFile('./docs/blog2.txt','hello cuties,',() =>{
    console.log('file was changed');
});*/

// directories
/*if (!fs.existsSync ('./blogs')) {
    fs.mkdir('./blogs',(err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    });
} else {
    fs.rmdir('./blogs',(err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder deleted');
    });
}*/

// deleting files
if (fs.existsSync('./docs/crazy.txt')) {
    fs.unlink('./docs/crazy.txt', (err) => {
    if (err){
        console.log(err)
    }
    console.log('file deleted');
    })
}