"use strict";

const counter = document.querySelector(".news-counter");
const updateCounterValue = () => {
  const unreadStatuses = document.querySelectorAll(".unread");
  counter.textContent = unreadStatuses.length;
  if (unreadStatuses.length === 0) {
    counter.classList.add("news-counter--closed");
  }
};

updateCounterValue();

window.counter = {
  updateValue: updateCounterValue,
  element: counter
}
