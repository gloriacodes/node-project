const express = require('express');
const { constant, result } = require('lodash');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blogs');


// express app
const app = express();

// connect to mangodb
const mangodb = 'mongodb+srv://FoodBlog:7WVbxVcachi3aaH@cluster0.cc4ji.mongodb.net/nodejs?retryWrites=true&w=majority';
mongoose.connect(mangodb, {useNewUrlParser: true, useUnifiedTopology: true})
// i dont understand {useNewUrlParser: true, useUnifiedTopology: true}
.then ((result) => app.listen(3000))
.catch((err) => console.log(err));

// register view engine (ejs-embedded javascript templating)
app.set('view engine','ejs');
app.set('views', 'ejs');


// middleware & static files
app.use(express.static('dcss'));
app.use(express.urlencoded({extended: true}));
// using morgan we'll remove the codes typed earlier and it is below this morgan code
app.use(morgan('dev'));


// mango sandbox routes
/*app.get('/add-blog',(req,res) => {
    const newone = new Blog({
        title: 'second food blog ',
        snippet: 'about my new food blog',
        body: 'more about my food journey'
    });
    newone.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err) =>{
        console.log(err);
    });
})

// retrieve all the blogs or get all the blogs
app.get('/all-blogs',(req,res) => {
    Blog.find()
    .then((result) =>{
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    });
})

// single blog
app.get('/single-blog',(req,res) =>{
    Blog.findById('612641e82d1d9d81832fc154')
    .then((result) =>{
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    });
})
// middleware
/*app.use((req,res,next) =>{
    console.log('new request made:');
    console.log('host:', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
});
app.use((req,res,next) =>{
    console.log('in the next middleware');
    next();
});*/

// routes 
app.get('/', (req,res) => {
    // res.send('<p>Home Page</p>');
    /*const blogs = [
        {title: 'egg grace', snippet: 'i am a good egg'},
        {title: 'you gin', snippet: 'gin  is not good for the body'},
        {title: 'solo pull', snippet: 'solo solo solo ahhh'},
    ];
    res.render('index', { title: 'Home', blogs });*/
    res.redirect('/blogs')
});

app.get('/about', (req,res) => {
    // res.send('<p>About Page</p>'); 
    // res.sendFile('./htmlagain/about.html',{ root: __dirname});
    res.render('about' , { title: 'About'});
    // i dont understand <%= %> 
});

// redirecting
/*app.get('/about-us',(req,res) => {
    res.redirect('/about');
});*/
 

// blogs routes
app.get('/blogs',(req,res) =>{
    Blog.find().sort({ createdAt: -1})
    .then((result) =>{
res.render('index',{ title: 'All Blogs', blogs:result})
    })
    .catch((err) =>{
        console.log(err);
    })
})

app.post('/blogs',(req,res) => {
    console.log(req.body);
})

// i have an issue with create
app.get('/blogs/create',(req,res) => {
    res.render('create' , {title: 'create a new blog'});
})

// error page
app.use((req,res) => {
    // res.status(404).sendFile('./htmlagain/404.html', {root: __dirname})
    res.status(404).render('404' , {title: 'error'});
});
