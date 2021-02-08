// express
const http = require ("http");
const express = require('express')

// body parser
const bodyParser = require("body-parser")
const app = express();

// parse app
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
const server = http.createServer(app);
var db = {"threads":[{ title:"this or that",
id:1,
author: "Aaron",
content: "thread content",
comments:[
    { author:"Brad", content:"this"},
    { author:"Clark", content:"that" },
    { author:"Dave", content:"that too"}]
},
{
    title:"Yea or nah",
    id:2,
    author: "Eli",
    content: "thread content",
    comments:[
        { author:"Fran", content:"Nope"},
        { author:"Greg", content:"Noooooo" },
        { author:"Hank", content:"Yes please"},
        { author:"Ian", content:"Nah"}]
},
{
title:"Yea or nah",
id:3,
author: "Eli",
content: "thread content",
comments:[
    { author:"Fran", content:"Nope"},
    { author:"Greg", content:"Noooooo" },
    { author:"Hank", content:"Yes please"},
    { author:"Ian", content:"Nah"}]
},
{
    title:"too To TWO",
    id:4,
    author: "Jill",
    comments:[
        { author:"Kim", content:"two"},
        { author:"Lisa", content:"to" },
        { author:"Mary", content:"too"}]

}]}

//express-session
const session = require ("express-session");
var path = require('path');

// static public folder
    app.use(express.json());
    app.use(express.static("public"));

// template
const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

// app.get('/', (req, res) => {
//     res.render('home');
// });

  
    app.get("/api/threads", function(request, response, next){
        console.log("someone sent a request home");
        response.send(db.threads);
    });
    

    app.post("/api/threads/add", function(request, response, next){
        console.log("someone sent a request home");
        response.json("Post add to forum");
    });

    app.post("/api/threads/add/comment", function(request, response, next){
        console.log("someone sent a request home");
        response.send(db.comments);
    });
    
    // Array with comments
    var threads = 
        [{ title:"this or that",
            id:1,
            author: "Aaron",
            content: "thread content",
            comments:[
                { author:"Brad", content:"this"},
                { author:"Clark", content:"that" },
                { author:"Dave", content:"that too"}]
            },
            {
                title:"Yea or nah",
                id:2,
                author: "Eli",
                content: "thread content",
                comments:[
                    { author:"Fran", content:"Nope"},
                    { author:"Greg", content:"Noooooo" },
                    { author:"Hank", content:"Yes please"},
                    { author:"Ian", content:"Nah"}]
            },
            {
            title:"Yea or nah",
            id:3,
            author: "Eli",
            content: "thread content",
            comments:[
                { author:"Fran", content:"Nope"},
                { author:"Greg", content:"Noooooo" },
                { author:"Hank", content:"Yes please"},
                { author:"Ian", content:"Nah"}]
            },
        {
                title:"too To TWO",
                id:4,
                author: "Jill",
                comments:[
                    { author:"Kim", content:"two"},
                    { author:"Lisa", content:"to" },
                    { author:"Mary", content:"too"}]
            
        }]

    
        console.log("someone sent a request home");
        response.send(db.comments);
    });
    
    // Array with comments
    var threads = 
        [{ title:"this or that",
            id:1,
            author: "Aaron",
            content: "thread content",
            comments:[
                { author:"Brad", content:"this"},
                { author:"Clark", content:"that" },
                { author:"Dave", content:"that too"}]
            },
            {
                title:"Yea or nah",
                id:2,
                author: "Eli",
                content: "thread content",
                comments:[
                    { author:"Fran", content:"Nope"},
                    { author:"Greg", content:"Noooooo" },
                    { author:"Hank", content:"Yes please"},
                    { author:"Ian", content:"Nah"}]
            },
            {
            title:"Yea or nah",
            id:3,
            author: "Eli",
            content: "thread content",
            comments:[
                { author:"Fran", content:"Nope"},
                { author:"Greg", content:"Noooooo" },
                { author:"Hank", content:"Yes please"},
                { author:"Ian", content:"Nah"}]
            },
        {
                title:"too To TWO",
                id:4,
                author: "Jill",
                comments:[
                    { author:"Kim", content:"two"},
                    { author:"Lisa", content:"to" },
                    { author:"Mary", content:"too"}]
            
        }]

    
        console.log("someone sent a request home");
        response.send(db.comments);
    });
    
    // Array with comments
    var threads = 
        [{ title:"this or that",
            id:1,
            author: "Aaron",
            content: "thread content",
            comments:[
                { author:"Brad", content:"this"},
                { author:"Clark", content:"that" },
                { author:"Dave", content:"that too"}]
            },
            {
                title:"Yea or nah",
                id:2,
                author: "Eli",
                content: "thread content",
                comments:[
                    { author:"Fran", content:"Nope"},
                    { author:"Greg", content:"Noooooo" },
                    { author:"Hank", content:"Yes please"},
                    { author:"Ian", content:"Nah"}]
            },
            {
            title:"Yea or nah",
            id:3,
            author: "Eli",
            content: "thread content",
            comments:[
                { author:"Fran", content:"Nope"},
                { author:"Greg", content:"Noooooo" },
                { author:"Hank", content:"Yes please"},
                { author:"Ian", content:"Nah"}]
            },
        {
                title:"too To TWO",
                id:4,
                author: "Jill",
                comments:[
                    { author:"Kim", content:"two"},
                    { author:"Lisa", content:"to" },
                    { author:"Mary", content:"too"}]
            
        }]

    
        console.log("someone sent a request home");
        response.send(db.comments);
    });
    
    // Array with comments
    var threads = 
        [{ title:"this or that",
            id:1,
            author: "Aaron",
            content: "thread content",
            comments:[
                { author:"Brad", content:"this"},
                { author:"Clark", content:"that" },
                { author:"Dave", content:"that too"}]
            },
            {
                title:"Yea or nah",
                id:2,
                author: "Eli",
                content: "thread content",
                comments:[
                    { author:"Fran", content:"Nope"},
                    { author:"Greg", content:"Noooooo" },
                    { author:"Hank", content:"Yes please"},
                    { author:"Ian", content:"Nah"}]
            },
            {
            title:"Yea or nah",
            id:3,
            author: "Eli",
            content: "thread content",
            comments:[
                { author:"Fran", content:"Nope"},
                { author:"Greg", content:"Noooooo" },
                { author:"Hank", content:"Yes please"},
                { author:"Ian", content:"Nah"}]
            },
        {
                title:"too To TWO",
                id:4,
                author: "Jill",
                comments:[
                    { author:"Kim", content:"two"},
                    { author:"Lisa", content:"to" },
                    { author:"Mary", content:"too"}]
            
        }]

    
        console.log("someone sent a request home");
        response.send(db.comments);
    });
    
    // Array with comments
    var threads = 
        [{ title:"this or that",
            id:1,
            author: "Aaron",
            content: "thread content",
            comments:[
                { author:"Brad", content:"this"},
                { author:"Clark", content:"that" },
                { author:"Dave", content:"that too"}]
            },
            {
                title:"Yea or nah",
                id:2,
                author: "Eli",
                content: "thread content",
                comments:[
                    { author:"Fran", content:"Nope"},
                    { author:"Greg", content:"Noooooo" },
                    { author:"Hank", content:"Yes please"},
                    { author:"Ian", content:"Nah"}]
            },
            {
            title:"Yea or nah",
            id:3,
            author: "Eli",
            content: "thread content",
            comments:[
                { author:"Fran", content:"Nope"},
                { author:"Greg", content:"Noooooo" },
                { author:"Hank", content:"Yes please"},
                { author:"Ian", content:"Nah"}]
            },
        {
                title:"too To TWO",
                id:4,
                author: "Jill",
                comments:[
                    { author:"Kim", content:"two"},
                    { author:"Lisa", content:"to" },
                    { author:"Mary", content:"too"}]
            
        }]

    
        console.log("someone sent a request home");
        response.send(db.comments);
    });
    
    // Array with comments
    var threads = 
        [{ title:"this or that",
            id:1,
            author: "Aaron",
            content: "thread content",
            comments:[
                { author:"Brad", content:"this"},
                { author:"Clark", content:"that" },
                { author:"Dave", content:"that too"}]
            },
            {
                title:"Yea or nah",
                id:2,
                author: "Eli",
                content: "thread content",
                comments:[
                    { author:"Fran", content:"Nope"},
                    { author:"Greg", content:"Noooooo" },
                    { author:"Hank", content:"Yes please"},
                    { author:"Ian", content:"Nah"}]
            },
            {
            title:"Yea or nah",
            id:3,
            author: "Eli",
            content: "thread content",
            comments:[
                { author:"Fran", content:"Nope"},
                { author:"Greg", content:"Noooooo" },
                { author:"Hank", content:"Yes please"},
                { author:"Ian", content:"Nah"}]
            },
        {
                title:"too To TWO",
                id:4,
                author: "Jill",
                comments:[
                    { author:"Kim", content:"two"},
                    { author:"Lisa", content:"to" },
                    { author:"Mary", content:"too"}]
            
        }]

    
        console.log("someone sent a request home");
        response.send(db.comments);
    });
    
    // Array with comments
    var threads = 
        [{ title:"this or that",
            id:1,
            author: "Aaron",
            content: "thread content",
            comments:[
                { author:"Brad", content:"this"},
                { author:"Clark", content:"that" },
                { author:"Dave", content:"that too"}]
            },
            {
                title:"Yea or nah",
                id:2,
                author: "Eli",
                content: "thread content",
                comments:[
                    { author:"Fran", content:"Nope"},
                    { author:"Greg", content:"Noooooo" },
                    { author:"Hank", content:"Yes please"},
                    { author:"Ian", content:"Nah"}]
            },
            {
            title:"Yea or nah",
            id:3,
            author: "Eli",
            content: "thread content",
            comments:[
                { author:"Fran", content:"Nope"},
                { author:"Greg", content:"Noooooo" },
                { author:"Hank", content:"Yes please"},
                { author:"Ian", content:"Nah"}]
            },
        {
                title:"too To TWO",
                id:4,
                author: "Jill",
                comments:[
                    { author:"Kim", content:"two"},
                    { author:"Lisa", content:"to" },
                    { author:"Mary", content:"too"}]
            
        }]

    
        console.log("someone sent a request home");
        response.send(db.comments);
    });
    
    // Array with comments
    var threads = 
        [{ title:"this or that",
            id:1,
            author: "Aaron",
            content: "thread content",
            comments:[
                { author:"Brad", content:"this"},
                { author:"Clark", content:"that" },
                { author:"Dave", content:"that too"}]
            },
            {
                title:"Yea or nah",
                id:2,
                author: "Eli",
                content: "thread content",
                comments:[
                    { author:"Fran", content:"Nope"},
                    { author:"Greg", content:"Noooooo" },
                    { author:"Hank", content:"Yes please"},
                    { author:"Ian", content:"Nah"}]
            },
            {
            title:"Yea or nah",
            id:3,
            author: "Eli",
            content: "thread content",
            comments:[
                { author:"Fran", content:"Nope"},
                { author:"Greg", content:"Noooooo" },
                { author:"Hank", content:"Yes please"},
                { author:"Ian", content:"Nah"}]
            },
        {
                title:"too To TWO",
                id:4,
                author: "Jill",
                comments:[
                    { author:"Kim", content:"two"},
                    { author:"Lisa", content:"to" },
                    { author:"Mary", content:"too"}]
            
        }]

    
    
    app.listen(3000,function(){
        console.log("listening in port 3000");
    });