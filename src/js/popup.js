'use strict';

document.addEventListener('DOMContentLoaded', function () {
  retrieveData();
});

function retrieveData () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tab) {
    if (typeof tab[0] === 'undefined') {
      setTimeout(retrieveData(), 1000);
    } else {
      chrome.tabs.sendMessage(tab[0].id, 'getSnippet', function (data) {
        if (typeof tab[0] === 'undefined') {
          setTimeout(retrieveData(), 1000);
        } else {
          updatePopup(data);
        }
      });
    }
  });
}

function updatePopup (serp) {
  document.getElementById('title').innerText =
    serpSnippetTool.utils.buildTitle(serp.title);
  document.getElementById('url').innerText = serp.url;
  document.getElementById('description').innerText =
    serpSnippetTool.utils.buildDescription(serp.description);
}
