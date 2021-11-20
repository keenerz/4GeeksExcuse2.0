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

let who = ["The dog", "My grandma", "My turtle", "My bird"];
let action = ["ate", "peed on", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before class.",
  "when I finished.",
  "during lunch.",
  "while I was praying."
];

let generateExcuse = function() {
  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

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

let btnAdd = document.querySelector("button");
let input = document.querySelector("input");

btnAdd.addEventListener("click", () => {
  if (input == null) {
    return;
  } else {
    who.push(input.value);
    input.value = "";
    generateExcuse();
    console.log(who);
  }
});

//button effects code
var buttons = document.getElementsByTagName("button");

Array.prototype.forEach.call(buttons, function(b) {
  b.addEventListener("click", createRipple);
});

function createRipple(e) {
  if (this.getElementsByClassName("ripple").length > 0) {
    this.removeChild(this.childNodes[1]);
  }

  var circle = document.createElement("div");
  this.appendChild(circle);

  var d = Math.max(this.clientWidth, this.clientHeight);
  circle.style.width = circle.style.height = d + "px";

  circle.style.left = e.clientX - this.offsetLeft - d / 2 + "px";
  circle.style.top = e.clientY - this.offsetTop - d / 2 + "px";

  circle.classList.add("ripple");
}
