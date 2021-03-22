"use strict";

const feed = document.querySelector(".feed");
const closeListButton = feed.querySelector(".close-feed");
const newsButton = document.querySelector(".extra-news");
const emptyFeed = document.querySelector(".empty-feed");

newsButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  newsButton.classList.add("extra-news--closed");
  window.counter.element.classList.add("news-counter--closed");
  feed.classList.remove("feed--closed");
  feed.classList.add("feed--opened");
  const closeButtons = feed.querySelectorAll(".close-button");
  if (closeButtons.length == 0) {
    cleanList();
  }
})

closeListButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  closeList();
  const unreadStatuses = document.querySelectorAll(".unread");
  if (unreadStatuses.length !== 0) {
    window.counter.element.classList.remove("news-counter--closed");
  }
})

const closeList = () => {
  newsButton.classList.remove("extra-news--closed");
  feed.classList.remove("feed--opened");
  feed.classList.add("feed--closed");
}

const cleanList = () => {
  closeList();
  emptyFeed.classList.toggle("visually-hidden");
}

window.start = {
  closeList: closeList,
  cleanList: cleanList
}
