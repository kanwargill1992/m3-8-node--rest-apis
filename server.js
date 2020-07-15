"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { clients } = require("./data/clients");
const { words } = require("./data/words");
const { v4: uuidv4 } = require("uuid");

const q1 = (req, res) => {
  res.json({ clients });
};

const q2 = (req, res) => {
  let id1 = req.params.id;
  const newPerson = clients.find((person) => {
    return person.id == id1;
  });
  res.send(newPerson);
};

const q3 = (req, res) => {
  let newClient = req.body;
  const duplicateUser = clients.find((person) => {
    return person.email === newClient.email;
  });
  if (duplicateUser === undefined) {
    newClient.id = uuidv4();
    clients.push(newClient);
    res.send({ clients }).status(200);
  } else {
    res.send("Error").status(400);
  }
};

const q4 = (req, res) => {
  let oldClient = req.body;
  const removeUser = clients.find((person) => {
    return person.id === oldClient.id;
  });
  if (removeUser.id === oldClient.id) {
    clients.pop(oldClient);
    res.send({ clients }).status(200);
  } else {
    res.send("error").status(400);
  }
};

const q5 = (req, res) => {
  res.send({ words });
};

const q6 = (req, res) => {
  let randomWord = words[Math.floor(Math.random() * words.length)];
  const newWord = { id: randomWord.id, letterCount: randomWord.letterCount };
  res.send(newWord);
};

const q7 = (req, res) => {
  let newWord = req.params;
  const newWord1 = words.find((word) => {
    if (word.id === newWord.id) {
      return word;
    }
  });
  const newNum = newWord1.word.split("").map((letter) => {
    return newWord.letter === letter;
  });
  res.status(200).json(newNum);
};

express()
  .use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // endpoints
  .get("/clients", q1)
  .get("/clients/:id", q2)
  .post("/clients", q3)
  .delete("/clients", q4)
  .get("/hangman/word/:id", q5)
  .get("/hangman/word", q6)
  .get("/hangman/guess/:id/:letter", q7)

  .listen(8000, () => console.log(`Listening on port 8000`));
