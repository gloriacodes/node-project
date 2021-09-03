const http = require('http');
const fs = require('fs');
const _ = require('lodash');


const server = http.createServer((req,res) => {
// lodash
const num = _.random(0,20);
console.log(num);
   
const greet = _.once(() => {
    console.log('hello');
});
greet();

    // set header content type
    res.setHeader('Content-Type','text/html');
   /*res.write('<p>hello, peeps</p>');
    res.write('<p>hello again, peeps</p>');
    res.end();*/

    let path = './htmlagain/';

    switch(req.url) {
        case '/':
        path += 'index.html';
        res.statusCode = 200;
        break;
        case '/about':

            path += 'about.html';
            res.statusCode = 200;
            break;
        // redirecting a former page to a new one i.e if you changed the name of the page.
        case '/about-me':
        res.statusCode = 301;
        res.setHeader('Location', '/about');
        res.end();
        break;
        default:
        path += '404.html';
        res.statusCode = 404;
            break;
    }

    // send an html file
   fs.readFile(path, (err,data) =>{
        if (err) {
            console.log(err);
            res.end();
         } else {
            // res.write(data);
            res.end();
            // you can also use it as res.end(data) if you are passing in one thing
        }
    })
});

// listen for request
server.listen(3000,'localhost', () => {
    console.log('listening for requests');
});