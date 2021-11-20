/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#button").addEventListener("click", function() {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = function() {
  let who = ["The dog", "My grandma", "My turtle", "My bird"];
  let action = ["ate", "peed on", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before class.",
    "when I finished.",
    "during lunch.",
    "while I was praying."
  ];
  let whoIndex = Math.floor(Math.random() * 3);
  let actionIndex = Math.floor(Math.random() * 3);
  let whatIndex = Math.floor(Math.random() * 2);
  let whenIndex = Math.floor(Math.random() * 4);

  let phrase =
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex];

  return phrase;
};
