// express
const http = require("http");
const express = require("express");

// body parser
const bodyParser = require("body-parser");
const app = express();

// parse app
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const server = http.createServer(app);
var db = [
  {
    title: "this or that",
    id: 1,
    author: "Aaron",
    content: "thread content",
    comments: [
      { author: "Brad", content: "this" },
      { author: "Clark", content: "that" },
      { author: "Dave", content: "that too" },
    ],
  },
  {
    title: "Yea or nah",
    id: 2,
    author: "Eli",
    content: "thread content",
    comments: [
      { author: "Fran", content: "Nope" },
      { author: "Greg", content: "Noooooo" },
      { author: "Hank", content: "Yes please" },
      { author: "Ian", content: "Nah" },
    ],
  },
  {
    title: "Yea or nah",
    id: 3,
    author: "Eli",
    content: "thread content",
    comments: [
      { author: "Fran", content: "Nope" },
      { author: "Greg", content: "Noooooo" },
      { author: "Hank", content: "Yes please" },
      { author: "Ian", content: "Nah" },
    ],
  },
  {
    title: "too To TWO",
    id: 4,
    author: "Jill",
    comments: [
      { author: "Kim", content: "two" },
      { author: "Lisa", content: "to" },
      { author: "Mary", content: "too" },
    ],
  },
];

//express-session
const session = require("express-session");
var path = require("path");

// static public folder
app.use(express.json());
app.use(express.static("public"));

// template
const es6Renderer = require("express-es6-template-engine");
app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

app.get("/api/threads", function (request, response, next) {
  console.log("someone sent a request home");
  response.json(db);
});

// post to /api/threads is a different route than get to /api/threads
app.post("/api/threads", function (request, response, next) {
  console.log("someone sent a request home");
  response.json("Post add to forum");
});

// the :id param will be used to identify the thread we want to post a comment to
app.post("/api/threads/:id/comment", function (request, response, next) {
  // get the index of the thread having id = :id
  const idx = db.findIndex((element) => {
    return element.id == request.params.id;
  });

  console.log("index: " + idx);
  console.log("params id: " + request.params.id);

  // push an object onto the comments of the thread at that index
  db[idx].comments.push({
    author: request.body.author,
    content: request.body.content,
  });
  response.sendStatus(200);
});

app.listen(3000, function () {
  console.log("listening in port 3000");
});
