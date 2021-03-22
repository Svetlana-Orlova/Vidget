"use strict";

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
