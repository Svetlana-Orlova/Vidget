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
    "status": "not-read"
  },
  {
    "title": "Лыжные гонки: Большунов за всю Россию.",
    "author": "Андрей Шитихин",
    "data": "06.02.2021 10:45",
    "link": "https://www.championat.com/other/article-4261683-aleksandr-bolshunov-dosrochno-vyigral-kubok-mira-po-lyzham-kak-takoe-stalo-vozmozhno.html",
    "status": "not-read"
  },
  {
    "title": "Погода обещает быть жаркой.",
    "author": "Александр Сириус",
    "data": "23.03.2020 17:34",
    "link": "https://www.spb.kp.ru/daily/27107/4183144/",
    "status": "not-read"
  }
];

}();
!function() {


const newsList = document.querySelector(".lenta__news");
const messageTemplateElement = document.querySelector("#message").content.querySelector(".lenta__news-item");

const getMessage = (news) => {
  let messageElement = messageTemplateElement.cloneNode(true);
  const messageClose = messageElement.querySelector(".close-button");

  messageElement.querySelector(".lenta__news-title").textContent = news.title;
  messageElement.querySelector(".lenta__news-author").textContent = news.author;
  messageElement.querySelector(".lenta__news-data").textContent = news.data;
  messageElement.querySelector(".lenta__news-link").href = news.link;
  messageElement.querySelector(".lenta__news-status").classList.add(news.status);

  messageClose.addEventListener("click", function() {
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

}();
!function() {


  const lenta = document.querySelector(".lenta");
  const closeListButton = lenta.querySelector(".close-lenta");
  const newsButton = document.querySelector(".new-news");
  const emptyLenta = document.querySelector(".empty-lenta");

  newsButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    newsButton.classList.add("new-news--closed");
    window.counter.element.classList.add("news-counter--closed");
    lenta.classList.remove("lenta--closed");
    lenta.classList.add("lenta--opened");
    const closeButtons = lenta.querySelectorAll(".close-button");
    if (closeButtons.length==0) {
      cleanList();
    }
  })

  closeListButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    closeList();
    if (window.counter.element.textContent!=="0") {
      window.counter.element.classList.remove("news-counter--closed");
    }
  })

  const closeList = function () {
    newsButton.classList.remove("new-news--closed");
    lenta.classList.remove("lenta--opened");
    lenta.classList.add("lenta--closed");
  }

  const cleanList = function () {
    closeList();
    emptyLenta.classList.toggle("visually-hidden");
  }

  window.start = {
    closeList: closeList,
    cleanList: cleanList
  }

}();
!function() {


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

}();
/******/ })()
;