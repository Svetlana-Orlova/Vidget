"use strict";

const feed = document.querySelector(".feed");
const newsItems = feed.querySelectorAll(".feed__news-item");
const closeButtons = feed.querySelectorAll(".close-button");
const visits = feed.querySelectorAll(".check");
const newsStatuses = feed.querySelectorAll(".feed__news-status");
const links = feed.querySelectorAll(".feed__news-link");

if (closeButtons.length == 0) {
  window.start.closeList();
  window.counter.element.classList.add("news-counter--closed");
} else {
  let closeButtonsCounter = closeButtons.length;
  for (let i = closeButtons.length-1; i >= 0; i--) {
    closeButtons[i].addEventListener("click", (evt) => {
      evt.preventDefault();
      newsItems[i].remove();
      let button = closeButtons[i];
      button.parentElement.removeChild(button);
      closeButtonsCounter--;
      window.counter.updateValue();
      if (closeButtonsCounter == 0) {
        window.start.closeList();
      }
    });
  }
}

const addClick = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i].addEventListener("click", (evt) => {
      newsStatuses[i].classList.remove("unread");
      newsStatuses[i].classList.add("read");
      window.counter.updateValue();
    })
  }
};

addClick(visits);
addClick(links);
