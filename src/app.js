/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function Excuse() {
  let who = ["My dog", "My penguin", "My turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the bed", "the sofa"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let who1 = who[Math.floor(Math.random() * who.length)];
  var action1 = action[Math.floor(Math.random() * action.length)];
  var what1 = what[Math.floor(Math.random() * what.length)];
  var when1 = when[Math.floor(Math.random() * when.length)];

  return who1 + " " + action1 + " " + what1 + " " + when1;
}

document.getElementById("button").addEventListener("click", () => {
  document.getElementById("excuses").innerHTML = Excuse();
});
