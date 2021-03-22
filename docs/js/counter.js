"use strict";

const counter = document.querySelector(".news-counter");
const updateCounterValue = function() {
  const statusesNotRead = document.querySelectorAll(".not-read");
  counter.textContent = statusesNotRead.length;
  if (counter.textContent==="0") {
    counter.classList.add("news-counter--closed");
  }
};

updateCounterValue();

window.counter = {
  updateValue: updateCounterValue,
  element: counter
}
