/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
!function() {


window.data = [
  {
    "title": "Смартфоны должны подешеветь",
    "author": "Эльяс Касми",
    "data": "25.08.2020 15:07",
    "link": "https://www.cnews.ru/news/top/2020-08-25_smartfony_nikomu_ne_nuzhny",
    "status": "read"
  },
  {
    "title": "Распродажа квартир!",
    "author": "VARENIK",
    "data": "01.03.2019 13:20",
    "link": "https://luckclub.ru/pervoaprelskie-shutki-prikoly-1-aprelya-v-shkole-dlya-odnoklassnikov-uchitelej-veselyj-prikol-kartinki",
    "status": "unread"
  },
  {
    "title": "Лыжные гонки: Большунов за всю Россию.",
    "author": "Андрей Шитихин",
    "data": "06.02.2021 10:45",
    "link": "https://www.championat.com/other/article-4261683-aleksandr-bolshunov-dosrochno-vyigral-kubok-mira-po-lyzham-kak-takoe-stalo-vozmozhno.html",
    "status": "unread"
  },
  {
    "title": "Погода обещает быть жаркой.",
    "author": "Александр Сириус",
    "data": "23.03.2020 17:34",
    "link": "https://www.spb.kp.ru/daily/27107/4183144/",
    "status": "unread"
  }
];

}();
!function() {


const newsList = document.querySelector(".feed__news");
const messageTemplateElement = document.querySelector("#message").content.querySelector(".feed__news-item");

const getMessage = (news) => {
  let messageElement = messageTemplateElement.cloneNode(true);
  const messageClose = messageElement.querySelector(".close-button");

  messageElement.querySelector(".feed__news-title").textContent = news.title;
  messageElement.querySelector(".feed__news-author").textContent = news.author;
  messageElement.querySelector(".feed__news-data").textContent = news.data;
  messageElement.querySelector(".feed__news-link").href = news.link;
  messageElement.querySelector(".feed__news-status").classList.add(news.status);

  messageClose.addEventListener("click", () => {
    messageElement.remove();
  });

  return messageElement;
};

const fragment = document.createDocumentFragment();

for (let i = 0; i < data.length; i++) {
  fragment.appendChild(getMessage(window.data[i]));
}

newsList.appendChild(fragment);

}();
!function() {


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

}();
!function() {


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

}();
!function() {


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

}();
/******/ })()
;