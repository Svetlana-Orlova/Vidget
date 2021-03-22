"use strict";

const lenta = document.querySelector(".lenta");
const newsItems = lenta.querySelectorAll(".lenta__news-item");
const closeButtons = lenta.querySelectorAll(".close-button");
const visits = lenta.querySelectorAll(".check");
const newsStatuses = lenta.querySelectorAll(".lenta__news-status");
const links = lenta.querySelectorAll(".lenta__news-link");

if (closeButtons.length==0) {
  window.start.closeList();
  window.counter.element.classList.add("news-counter--closed");
} else {
  let counterCloseButtons = closeButtons.length;
  for (let i=closeButtons.length-1; i>=0; i--) {
    closeButtons[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      newsItems[i].remove();
      let button = closeButtons[i];
      button.parentElement.removeChild(button);
      counterCloseButtons--;
      window.counter.updateValue();
      if (counterCloseButtons==0) {
        window.start.closeList();
      }
    });
  }
}

const addEvent = function (array) {
  for (let i=0; i<array.length; i++) {
    array[i].addEventListener("click", function(evt) {
      newsStatuses[i].classList.remove("not-read");
      newsStatuses[i].classList.add("read");
      window.counter.updateValue();
    })
  }
};

addEvent(visits);
addEvent(links);
