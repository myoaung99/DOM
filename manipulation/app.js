"use strict";
const allLinks = document.querySelectorAll("a");

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }

for (let link of allLinks) {
  link.style.color = "rgb(0, 108, 134)";
  link.style.textDecorationColor = "magenta";
  link.style.textDecorationStyle = "wavy";
}

// Creating dummy method
const obj = {
  shout() {
    console.log("Hey Hey");
  },
};

const para = document.getElementsByTagName("p");

for (let p of para) {
  p.innerText = "Hey";
}
